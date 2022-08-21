import React from 'react';
import { useSelector } from 'react-redux';
import SingleToDo from './SingleToDo';

function TodoList() {
    const todos = useSelector((state) => state.todos)
    return (
        <div
            className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto"
        >
            {/* <!-- todo --> */}
            {
                todos.map(todo => <SingleToDo todo={todo} key={todo.id} />)
            }




        </div>
    );
}

export default TodoList;