import React from 'react'

function Dashboard({loginstatus, role}) {
  return (
    <div>
        {
            loginstatus ? (
                <h1>User logged in</h1>
            ) : (
                <h1>User not logged in</h1>
            )
        }
        {
            role === "admin" ? (
                <div>
                    <h2>Welcome admin</h2>
                    <button>View user details</button>
                    <button>View all products</button>
                    <button>View seller details</button>
                </div>
            ) : role === "buyer" ? (
                <div>
                    <h2>Welcome user</h2>
                    <button>View all products</button>
                    <button>My orders</button>
                </div>
            ) : role === "seller" ? (
                <div>
                    <h2>Welcome seller</h2>
                    <button>Add new product</button>
                    <button>Edit product</button>
                    <button>View orders</button>
                </div>
            ) : (
                <h1>Unauthorized</h1>
            )
        }
        {/* ? - true value : false value */}
    </div>
  )
}

export default Dashboard