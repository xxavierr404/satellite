import React, {memo} from 'react';

const AddPostButton = memo((props) => {
    return (
        <button className="note h-48 rounded-xl ring-4 ring-blue-200 bg-opacity-10 col-span-1 p-4
            hover:text-black hover:bg-opacity-100 hover:ring-0 hover:bg-blue-200 duration-200 transition-all
            text-blue-200 flex flex-col items-center w-full"
                onClick={() => props.setModalState(true)}>
            <div className="text-center text-9xl">+</div>
            <div className="sm:text-xl md:text-lg lg:text-2xl">Добавить записку</div>
        </button>
    );
});

export default AddPostButton;