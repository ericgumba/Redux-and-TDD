 

export default (state = [], action) => {
    switch (action.type) {
        case "EDIT_TODO":
            return state.map( todo => action.id === todo.id ? todo.text = {text:action.text, id: todo.id, completed: todo.completed} : todo )
        case "DELETE_TODO":
            return state.filter( (todo) => action.id !== todo.id );
        case "ADD_TODO": 
            return [...state, {text: action.text, completed: false, id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1 }]; 
        default: 
            return state; 
    }
}
 