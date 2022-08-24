import { toggled } from "../TodoActions";

const updateStatus = (todoID, currentStatus) => {
    return async (dispatch) => {
        const response = await fetch(`http://localhost:9000/todos/${todoID}`,
            {
                method: 'PATCH',
                body: JSON.stringify({
                    completed: !currentStatus
                }),
                headers: { "Content-type": "application/json; charset=UTF-8" }
            }
        );
        const todos = await response.json();
        dispatch(toggled(todos.id));
    }
}
export default updateStatus;