import { initialstate } from "./initialstate";
import { ADDED, TOGGLED, ALL_COMPLETED, CLEAR_COMPLETED, COLOR_SELECTED, DELETED, LOADED } from "./TodoActionTypes"
function nextTodoId(todos) {
    const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
    return maxId + 1
}
const todoReducer = (state = initialstate, action) => {
    switch (action.type) {
        case LOADED:

            console.log(action)
            return action.payload;

        case ADDED:
            return [
                ...state,
                {
                    id: nextTodoId(state),
                    text: action.payload,
                    completed: false
                }
            ]
        case TOGGLED:

            return state.map((todo) => {
                if (todo.id !== action.payload) {
                    return todo
                }

                return {
                    ...todo,
                    completed: !todo.completed
                }
            })

        case COLOR_SELECTED:
            const { id, color } = action.payload
            return state.map(todo => {
                if (todo.id !== id) {
                    return todo
                }

                return {
                    ...todo,
                    color: color
                }
            })

        case DELETED:
            return state.filter(todo => todo.id !== action.payload)

        case ALL_COMPLETED:

            return state.map(todo => {
                return {
                    ...todo,
                    completed: true,
                }
            })
        case CLEAR_COMPLETED:
            return state.filter(todo => !todo.completed)
        default:
            return state;
    }
}
export default todoReducer