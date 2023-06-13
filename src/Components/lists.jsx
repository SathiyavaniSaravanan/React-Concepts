import { useState } from "react";

const Lists = () => {
    const [users,setUsers]=useState([
        {
            id:1,
            name:"Spencer",
            age:30,
            role:"Manager",
        },
        {
            id:2,
            name:"Elijah",
            age:35,
            role:"Engineer",
        },
        {
            id:3,
            name:"Tiger",
            age:10,
            role:"Caretaker",
        }
    ])
    const handleRemove = (id) => {
    
        let newUsers = users.filter(data => {
          if (data.id !== id) return data;
        });
        setUsers(newUsers)
        console.log(id);
    }
    return ( 
        <div className="lists">
            {users.map(items => {
                return (
                  <div className="users">
                    <h1>Name: {items.name}</h1>
                    <h2>Age: {items.age}</h2>
                    <h4>Role: {items.role}</h4>
                    <button onClick={() => handleRemove(items.id)}>Remove</button>
                  </div>
                );
            })}
        </div>
     );
}
 
export default Lists;