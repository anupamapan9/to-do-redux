import React from 'react';
import Cancel from '../images/cancel.png'
import { toggled, colorSelected, deleted } from '../Redux/ToDos/TodoActions'
import { useDispatch } from 'react-redux';
const SingleToDo = ({ todo }) => {
    const { id, text, completed, color } = todo;
    const dispatch = useDispatch()


    // handel events --------------------------------
    const handelStatusChange = (todoId) => {
        dispatch(toggled(todoId))
    }
    const handelColorChange = (todoId, selectedColor) => {
        dispatch(colorSelected(
            todoId,
            selectedColor
        ))
    }
    const handelDeleted = (todoId) => {
        dispatch(deleted(
            todoId
        ))
    }
    return (
        <div
            className="flex justify-start items-center p-2 hover:bg-gray-100 hover:transition-all space-x-4 border-b border-gray-400/20 last:border-0"
        >
            <div
                className={`rounded-full bg-white border-2 border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 ${completed && 'border-green-500 focus-within:border-green-500'}`}
            >
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={() => handelStatusChange(id)}
                    className="opacity-0 absolute rounded-full"
                />
                {
                    completed && <svg
                        className="fill-current w-3 h-3 text-green-500 pointer-events-none"
                        viewBox="0 0 20 20"
                    >
                        <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                    </svg>
                }

            </div>

            <div className={`select-none flex-1 ${completed && 'line-through'}`}>
                {text}
            </div>

            <div onClick={() => handelColorChange(id, 'green')}
                className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer ${color === 'green' && '  bg-green-500'} hover:bg-green-500 border-green-500`}
            ></div>

            <div onClick={() => handelColorChange(id, 'yellow')}
                className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer ${color === 'yellow' && ' bg-yellow-500'} border-yellow-500 hover:bg-yellow-500`}
            ></div>

            <div onClick={() => handelColorChange(id, 'red')}
                className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer ${color === 'red' && ' bg-red-500'} border-red-500 hover:bg-red-500`}
            ></div>

            <img
                onClick={() => handelDeleted(id)}
                src={Cancel}
                className="flex-shrink-0 w-4 h-4 ml-2 cursor-pointer"
                alt="Cancel"
            />
        </div>
    );
};

export default SingleToDo;