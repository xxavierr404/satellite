import React, {useState} from 'react';
import Note from "./Note";

function NoteLoader(props) {
    const [posts, setPosts] = useState([]);
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(json => {
            let commentArray = Array.from(json);
            commentArray = commentArray.slice(10);
            commentArray = commentArray.map((comment) => (
                <Note content={comment.body} date={comment.postId} time={comment.id} key={comment.id}></Note>
            ))
            setPosts(commentArray);
        });
    return posts;
}

export default NoteLoader;