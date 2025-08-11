import React, { useEffect, useState } from 'react'

// https://jsonplaceholder.typicode.com/users

function App() {
  // state intialization for storing api datas
  const[users, setUsers] = useState([]);

  // using useEffect hook to make my api call, and store the data into the state
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json()) // using then method to convert my api datas into a json format
    .then(data => setUsers(data)) // second then method to store api datas into my state
    .catch(err => console.error(err)) // global catch block to catch any errors while making api request
  }, []) // providing empty arrays to stop unwanted api calls

  return (
    <div>
      {
        users.map(data => (
          <div key={data.id}>
              <h1>{data.username} - {data.email}</h1>
              <h3>{data.address.city}</h3>
          </div>
        ))
      }
    </div>
  )
}

export default App