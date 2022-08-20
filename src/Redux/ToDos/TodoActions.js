import { ADDED, TOGGLED, ALL_COMPLETED, CLEAR_COMPLETED, COLOR_SELECTED, DELETED } from "./TodoActionTypes"


export const added = (todo) => {
    return {
        type: ADDED,
        payload: todo
    }
}
export const toggled = (id) => {
    return {
        type: TOGGLED,
        payload: id
    }
}
export const colorSelected = (id, color) => {
    return {
        type: COLOR_SELECTED,
        payload: {
            id,
            color
        }
    }
}
export const deleted = (id) => {
    return {
        type: DELETED,
        payload: id
    }
}
export const allCompleted = () => {
    return {
        type: ALL_COMPLETED
    }
}
export const clearCompleted = () => {
    return {
        type: CLEAR_COMPLETED
    }
}