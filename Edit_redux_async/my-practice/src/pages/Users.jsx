import React, { useContext } from 'react';
import { UsersContext } from '../context/context';


const Users = () => {

    const { user, setUser } = useContext(UsersContext);

    const handleName = () => {
        setUser(user)
    }

  const  handleInputChange = (e) => {
        const input_value = e.target.value
        setUser(input_value)
  };
 

    return (
        <div>
            <p> User: {user}</p>

            <input onChange={handleInputChange} type="text" placeholder='Adinizi daxil edin' style={{ height: "50px", width: "300px" }} />
            <br />
            <br />
            <br />


            <button onClick={handleName} style={{ backgroundColor: "green" }}>User-in name -ini deyis</button>



        </div>
    )
}

export default Users
