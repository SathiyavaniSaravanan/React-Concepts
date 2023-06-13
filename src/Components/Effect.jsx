import { useEffect, useState } from "react";

// const Effect = () => {
//     const [val, setVal] = useState('Hi');
//     const handleClick = () => {
//         setVal('Hello');
//     }
//     useEffect(() => {
//         console.log("UseEffect Worked");
//     })
//     return (
//         <div className="effect">
//             <h1>Use Effect Hook</h1>
//             <h1>{ val}</h1>
//             <button onClick={handleClick}>Click to Change</button>
//         </div>
//      );
// }
// export default Effect;

const Effect = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    console.log("entered");
    const fetchData = async () => {
      let response = await fetch("https://jsonplaceholder.typicode.com/users");
      let data = await response.json();
      setUser(data);
    };
    fetchData();
  }, []);
  const handleDelete = id => {
      let output = user.filter(y => {
          if (y.id !== id) return y;
    });
    setUser(output);
  };
  return (
    <div className="effect">
      {user.map(x => {
        return (
          <div className="users">
            <h1>{x.name}</h1>
            <button onClick={() => handleDelete(x.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default Effect;
