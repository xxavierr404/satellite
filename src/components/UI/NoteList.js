import React, {useState} from 'react';
import Note from "./Note";
import NoteFetcher from '../API/NoteFetcher';

function NoteList(props) {
    const [posts, setPosts] = useState([]);
    NoteFetcher.fetchNotes().then((json) => {
            let commentArray = Array.from(json.data);
            commentArray = commentArray.map((comment) => (
                <Note content={comment.body} date={comment.postId} time={comment.id} key={comment.id}></Note>
            ));
            setPosts(commentArray);
        }
    );
    return posts;
}

export default NoteList;