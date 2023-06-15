import { ACTIONS } from "./Hook-useReducer-example2";

const TodoList = (props) => {
    return (
      <div className="todoList">
        <span style={{ color: props.todoItems.complete ? "#AAA" : "#000" }}>
          {props.todoItems.userName}
        </span>
        <button
          onClick={() =>
            props.dispatchTodos({
              type: ACTIONS.TOGGLE_TODO,
              payload: { id: props.todoItems.id },
            })
          }
        >
          TOGGLE
        </button>
        <button onClick={() => props.dispatchTodos({type:ACTIONS.DELETE_TODO, payload:{id:props.todoItems.id}})}>DELETE</button>
      </div>
    );
}
 
export default TodoList;