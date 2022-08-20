import React from 'react';
import SingleToDo from './SingleToDo';

function TodoList() {
    return (
        <div
            className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto"
        >
            {/* <!-- todo --> */}
            <SingleToDo />



        </div>
    );
}

export default TodoList;