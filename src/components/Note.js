import React from 'react';

function Note(props) {
    return (
        <div className="note h-48 rounded-xl bg-blue-200 bg-opacity-10 col-span-1 text-gray-400 p-4
            hover:text-black hover:bg-opacity-100 hover:-rotate-6 duration-200 transition-all">
            <div className="flex flex-col h-full">
                <div className="text-justify grow overflow-hidden">
                    {props.content}
                </div>
                <div className="flex-none text-right">Posted at: {props.date} {props.time}</div>
            </div>
        </div>
    );
}

export default Note;