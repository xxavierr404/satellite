import React from 'react';

function NoteMenu(props) {
    return (
        <div className={`fixed w-screen h-screen bg-black p-28 grid grid-cols-3 grid-rows-1 transition-all duration-200
        ${ props.openedNote != null ? "opacity-100 z-30" : "opacity-0 -z-50"}`}
        onClick={() => props.setOpenedNote(null)}>
            <div className="col-span-1 row-span-1 w-full h-full bg-white">
                {props.openedNote != null ? props.openedNote.props.content : null}
            </div>
            <div className="col-span-1 row-span-1"></div>
            <div className="col-span-1 row-span-1 flex flex-col bg-white">

            </div>
        </div>
    );
}

export default NoteMenu;