import React from 'react';

function PostModal(props) {
    return (
        <div className={`z-30 bg-black bg-opacity-50 top-0 left-0 fixed flex h-screen w-full ${props.modalActive ? "visible" : "hidden"}`}
             onClick={() => props.setModalActive(false)}>
            <div className="w-2/6 h-2/3 m-auto bg-blue-200 shadow-blue-200 shadow-lg rounded-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}>
                <textarea name="post" id="post" cols="15" rows="10" className="rounded-2xl bg-blue-100 text-cyan-900 grow m-5 p-4"
                defaultValue="Текст новой записки будет здесь.">
                </textarea>
                <div>
                    <button className="uppercase bg-blue-500 text-white rounded-2xl w-60 h-8 w-fit float-right mr-5 mb-4
                    hover:bg-blue-100 hover:text-black hover:ring-2 hover:ring-black transition-all duration-200">
                        Добавить
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PostModal;