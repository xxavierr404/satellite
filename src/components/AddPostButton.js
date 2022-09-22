import React from 'react';

function AddPostButton(props) {
    return (
        <button className="note h-48 rounded-xl ring-4 ring-blue-200 bg-opacity-10 col-span-1 text-gray-400 p-4
            hover:text-black hover:bg-opacity-100 hover:ring-0 hover:bg-blue-200 duration-200 transition-all
            text-blue-200 flex flex-col items-center"
        onClick={() => props.modalState(true)}>
            <div className="text-9xl text-center">+</div>
            <div className="text-2xl">Добавить записку</div>
        </button>
    );
}

export default AddPostButton;