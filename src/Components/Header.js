import React, { useState } from 'react';
import Note from '../images/notes.png'
import Complete from '../images/double-tick.png'
import Plus from '../images/plus.png'
import { useDispatch } from 'react-redux';
import { allCompleted, clearCompleted } from '../Redux/ToDos/TodoActions';
import addTodo from '../Redux/ToDos/thunk/addToDo';
const Header = () => {
    const dispatch = useDispatch()
    const [input, setInput] = useState('')
    const handelInput = (e) => {
        setInput(e.target.value)
    }
    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        e.target.reset()

    }
    const handelCompleted = () => {
        dispatch(allCompleted())
    }
    const handelClearCompleted = () => {
        dispatch(clearCompleted())
    }
    return (
        <div>
            <form
                className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
                onSubmit={submitHandler}
            >
                <img
                    src={Note}
                    className="w-6 h-6"
                    alt="Add todo"
                />
                <input
                    type="text"
                    placeholder="Type your todo"
                    className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
                    value={input}
                    onChange={handelInput}
                />
                <button
                    type="submit"
                    className={`appearance-none w-8 h-8 bg-[url('${Plus}')] bg-no-repeat bg-contain`}
                ></button>
            </form>

            <ul className="flex justify-between my-4 text-xs text-gray-500">
                <li className="flex space-x-1 cursor-pointer" onClick={handelCompleted}>
                    <img
                        className="w-4 h-4"
                        src={Complete}
                        alt="Complete"
                    />
                    <span>Complete All Tasks</span>
                </li>
                <li className="cursor-pointer" onClick={handelClearCompleted}>Clear completed</li>
            </ul>
        </div>
    );
};

export default Header;