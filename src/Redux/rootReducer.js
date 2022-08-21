import { combineReducers } from "redux";
import filterReducer from "./Filters/FilterReducer";
import todoReducer from "./ToDos/TodoReducer";

const rootReducer = combineReducers({
    todos: todoReducer,
    filters: filterReducer
})
export default rootReducer