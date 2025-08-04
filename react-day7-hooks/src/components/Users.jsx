import React, { useEffect, useState } from 'react'

function Users() {
    const[users, setUsers] = useState([]);
    useEffect(() => {  // mount

        fetch("https://fakestoreapi.com/users").then(res => res.json())
        .then(data => setUsers(data))
        .catch(err => {
            console.error(err)   // update
        })                      
    }, [])   // unmount
    
    console.log(users);
  return (
    <div>
        {
            users.map(data => (
                <div key={data.id}>
                        <h1>{data.username}</h1>
                        <h4>{data.email}</h4>
                </div>
            ))
        }
    </div>
  )
}

export default Users