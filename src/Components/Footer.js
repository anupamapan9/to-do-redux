import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { statusChange, colorChanged } from '../Redux/Filters/FilterActions';


const numberOfTodos = (no_of_to) => {
    switch (no_of_to) {
        case 0:
            return 'No task'


        default:
            return `${no_of_to} remaining`
    }
}

const Footer = () => {
    const dispatch = useDispatch()
    const todos = useSelector((state) => state.todos)
    const todosRemaining = todos.filter(todo => !todo.completed).length;
    const filters = useSelector(state => state.filters)
    const { status, colors } = filters
    const handelStatusChanged = (status) => {
        dispatch(statusChange(status))
    }
    const handelColorChange = (color) => {
        if (colors.includes(color)) {
            dispatch(colorChanged(color, 'removed'))
        } else {
            dispatch(colorChanged(color, 'added'))
        }

    }
    return (
        <div className="mt-4 flex justify-between text-xs text-gray-500">
            <p>{numberOfTodos(todosRemaining)}</p>
            <ul className="flex space-x-1 items-center text-xs">
                <li className={`cursor-pointer ${status === 'All' && 'font-bold'}`} onClick={() => handelStatusChanged('All')}>All</li>
                <li>|</li>
                <li className={`cursor-pointer ${status === 'Incomplete' && 'font-bold'}`} onClick={() => handelStatusChanged('Incomplete')}>Incomplete</li>
                <li>|</li>
                <li className={`cursor-pointer ${status === 'Complete' && 'font-bold'}`} onClick={() => handelStatusChanged('Complete')}>Complete</li>
                <li></li>
                <li></li>
                <li onClick={() => handelColorChange('green')}
                    className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${colors.includes('green') && 'bg-green-500'}`}
                ></li>
                <li onClick={() => handelColorChange('red')}
                    className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer   ${colors.includes('red') && 'bg-red-500'}`}
                ></li>
                <li onClick={() => handelColorChange('yellow')}
                    className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer  ${colors.includes('yellow') && 'bg-yellow-500'}`}
                ></li>
            </ul>
        </div>
    );
};

export default Footer;