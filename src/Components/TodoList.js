import React from 'react';
import { useSelector } from 'react-redux';
import SingleToDo from './SingleToDo';



function TodoList() {
    const todos = useSelector((state) => state.todos);
    const filters = useSelector((state) => state.filters)

    const filterByStatus = todo => {
        const { status } = filters;
        switch (status) {
            case 'Complete':
                return todo.completed
            case 'Incomplete':
                return !todo.completed

            default:
                return true
        }
    }
    const filterByColors = todo => {
        const { colors } = filters;
        if (colors.length > 0) {
            return colors.includes(todo?.color)
        }
        return true
    }
    return (
        <div
            className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto"
        >
            {/* <!-- todo --> */}
            {
                todos
                    .filter(filterByStatus)
                    .filter(filterByColors)
                    .map(todo => <SingleToDo todo={todo} key={todo.id} />)
            }




        </div>
    );
}

export default TodoList;