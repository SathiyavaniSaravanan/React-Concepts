import { useState } from "react";

const Hooks = () => {
    let [val, setVal] = useState(0);
    const increase = () => {
        setVal(++val);
    }
    const decrease = () => {
      setVal(--val);
    };
    const reset = () => {
      setVal(0);
    };
    return (
      <div className="hooks">
        <h1>{val}</h1>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
        <button onClick={reset}>Reset</button>
      </div>
    );
}
 
export default Hooks;