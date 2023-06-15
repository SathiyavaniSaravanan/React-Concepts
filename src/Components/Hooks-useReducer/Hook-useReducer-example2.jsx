import { useState,useReducer } from "react";
import TodoList from "./TodoList";

export const ACTIONS = {
    ADD_TODO: "add-todo",
    TOGGLE_TODO: "toggle-todo",
    DELETE_TODO: "delete-todo",
}

const reducerTodos = (state, action) => {
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return [...state, newTodo(action.payload.newUserName)];
        case ACTIONS.TOGGLE_TODO:
            return (
                state.map(todo => {
                    if (todo.id === action.payload.id) {
                        return { ...todo, complete: !todo.complete }
                    }
                    else {
                        return todo;
                    }
                })
            )
        case ACTIONS.DELETE_TODO:
            return (
                state.filter(todo=>todo.id!==action.payload.id)
            )
        default:
            return state;
    }
}
const newTodo = (receivedUserName) => {
    return {id:Date.now(),userName:receivedUserName,complete:false}
}

const Todo = () => {
    const [userName, setUserName] = useState('');
    const [todos, dispatchTodos] = useReducer(reducerTodos, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatchTodos({ type: ACTIONS.ADD_TODO, payload:{newUserName:userName} })
        setUserName('');
    }
    console.log(todos);
    return ( 
        <div className="todos">
            <form onSubmit={handleSubmit}>
                <input type="text" value={userName} onChange={e=>setUserName(e.target.value)} />
            </form>
            <div className="todo-list">
                {
                    todos.map(todoItems => {
                        return (<TodoList id={todoItems.id} todoItems={todoItems} dispatchTodos={ dispatchTodos} />)
                    })
                }
            </div>
        </div>
     );
}
 
export default Todo;