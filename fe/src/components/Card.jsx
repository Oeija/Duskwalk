import React from 'react';
import { FaTrashAlt } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";

function Card(props) {
    const { children, handleDeleteTodo, index, handleEditTodo } = props;

    return (
        <div className="flex flex-col p-6 bg-white text-black rounded-md border-4 border-green-950 mb-4 max-w-[80%] mx-auto space-y-4">
            <div className="text-xl tracking-wide">
                {children}
            </div>
       
            <div className="flex justify-end space-x-3">
                <button
                    onClick={() => handleEditTodo(index)}
                    className="p-2 rounded-md bg-yellow-700 hover:bg-yellow-500 text-white shadow-inner transition-transform transform hover:scale-110"
                    title="Edit this quest"
                >
                    <FaRegEdit />
                </button>
                <button
                    onClick={() => handleDeleteTodo(index)}
                    className="p-2 rounded-md bg-red-700 hover:bg-red-500 text-white shadow-inner transition-transform transform hover:scale-110"
                    title="Remove this quest"
                >
                    <FaTrashAlt />
                </button>
            </div>
        </div>
    );
}

export default Card;


