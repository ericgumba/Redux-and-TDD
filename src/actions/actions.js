 
export const addTodo = text => ({
    type: "ADD_TODO", 
    text
})

export const increment = () => ({
    type:"INCREMENT"
})


export const decrement = () => ({
    type:"DECREMENT"
})

export const deleteTodo = id => ({
    type: "DELETE_TODO",
    id
})

export const editTodo = (text, id) => ({
    type: "EDIT_TODO",
    id,
    text
})