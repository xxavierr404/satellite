import React, {useEffect, useState} from 'react';
import axios from "axios";

function PostModal(props) {
    const [visible, setVisible] = useState(false);
    const [noteContent, setContent] = useState("");

    useEffect(()=>{
        setVisible(true);
    }, []);

    function disappear() {
        setVisible(false);
        setTimeout(() => props.setModalActive(false), 300);
    }

    async function upload() {
        if (noteContent.trim().length === 0) {
            return;
        }
        await axios.get(`http://127.0.0.1:8080/note/send?content=${noteContent}`);
    }

    return (
        <div className={`bg-black bg-opacity-50 top-0 left-0 fixed flex h-screen w-full transition-all duration-200
        ${visible ? "z-30 opacity-100" : "-z-50 opacity-0"}`}
             onClick={disappear}>
            <div className="md:w-2/6 h-2/3 m-auto bg-black outline-8 outline-white
             shadow-white shadow-lg rounded-2xl flex flex-col w-full p-5 gap-y-5"
            onClick={(e) => e.stopPropagation()}>
                <textarea name="post" id="post" cols="15" rows="10"
                          className="rounded-2xl bg-gray-800 text-white grow p-4 resize-none"
                          onChange={(event) => setContent(event.target.value)}
                          value={noteContent}
                placeholder="Текст новой записки будет здесь.">
                </textarea>
                    <button className="uppercase bg-black ring-1 ring-white
                     text-white rounded-2xl lg:w-48 h-8 w-full mx-auto
                    hover:bg-blue-100 hover:text-black hover:ring-2 hover:ring-black transition-all duration-200"
                    onClick={async () => {
                        await upload();
                        disappear();
                    }}>
                        Добавить
                    </button>
            </div>
        </div>
    );
}

export default PostModal;