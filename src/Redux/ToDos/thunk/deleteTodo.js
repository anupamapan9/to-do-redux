import { deleted } from "../TodoActions";

const deleteTodo = (todoID) => {
    return async (dispatch) => {
        await fetch(`http://localhost:9000/todos/${todoID}`,
            {
                method: 'DELETE',
            }
        );

        dispatch(deleted(todoID));
    }
}
export default deleteTodo;