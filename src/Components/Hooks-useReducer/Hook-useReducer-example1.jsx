import { useReducer } from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case 'decrement':
            return { count: state.count - 1 }
        case 'increment':
            return { count: state.count + 1 }
        default:
            return state;
    }
}
const Counter = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    const handleSub = () => {
        dispatch({type:"decrement"})
    }
    const handleAdd = () => {
        dispatch({ type: "increment" });
    }
    return ( 
        <div className="counter">
            <button onClick={handleSub}>-</button>
            <h1>{ state.count}</h1>
            <button onClick={handleAdd}>+</button>
        </div>
     );
}
 
export default Counter;