import React, {useState, useEffect, useRef, useCallback} from 'react';
import Note from "./Note";
import useFetch from '../hooks/useFetch';

function NoteList({loader}) {
    const [posts, setPosts] = useState([]);
    const [start, setStart] = useState(1);
    const [limit, setLimit] = useState(5);
    const {loading, error, notes} = useFetch(start, limit);

    const observerCallback = useCallback((entries) => {
        if (entries[0].isIntersecting) {
            setStart((prev) => prev + limit);
        }
    }, []);

    useEffect(() => {
        const option = {
            root: null,
            rootMargin: "50px",
            threshold: 0.25
        };
        const observer = new IntersectionObserver(observerCallback, option);
        if (loader.current) observer.observe(loader.current);
    }, [observerCallback]);

    useEffect(() => {
        if (!notes) return;
        let noteArray = notes;
        noteArray = noteArray.map((note, index) => (
            <Note content={note.content}
                  hoursLeft={note.hoursLeft}
                  key={index}></Note>
        ));
        setPosts(noteArray);
    }, [notes]);

    return posts;
}

export default NoteList;