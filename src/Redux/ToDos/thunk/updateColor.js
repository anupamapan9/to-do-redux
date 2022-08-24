import { colorSelected } from "../TodoActions";

const updateColor = (todoID, color) => {
    return async (dispatch) => {
        const response = await fetch(`http://localhost:9000/todos/${todoID}`,
            {
                method: 'PATCH',
                body: JSON.stringify({
                    color: color
                }),
                headers: { "Content-type": "application/json; charset=UTF-8" }
            }
        );
        const todos = await response.json();
        dispatch(colorSelected(todos.id, todos.color));
    }
}
export default updateColor;