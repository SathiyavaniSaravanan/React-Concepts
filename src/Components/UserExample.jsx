import { useState } from "react";
import UsersInfo from './usersData.js';

const UserExample = () => {
    let [usersData, setUsersData] = useState(UsersInfo);

    

    const handleDelete = (userID, userName) => {
        const newUserData = usersData.filter(data => {
            if (data.id !== userID)
            {
                return data;
                }
        })
        setUsersData(newUserData);
        alert(`${userName} has been deleted successfully!!!`);
    }
    return (
        <div className="userexample">
            {
                usersData.map(data => {
                    return (
                      <div className="users" key={data.id}>
                        <h5>Name:{data.name}</h5>
                        <h5>Email:{data.email}</h5>
                        <h5>Phone:{data.phone}</h5>
                        <h5>Website:{data.website}</h5>
                        <button onClick={()=>handleDelete(data.id,data.name)}>Delete</button>
                      </div>
                    );
                })
            }
        </div>
    )
};

export default UserExample;
