import React from 'react'

function App() {

  let products = [
    {id: 1, title: "Watch", price: 5000},
    {id: 2, title: "Laptop", price: 20000},
    {id: 3, title: "Monitor", price: 15000}
  ]

  // basic function
  const payment = () => {
    alert("Payment successful");
  }

  const addtocart = (productTitle) => {
    alert(`${productTitle} added to cart`);
  }

  return (
    <div>
      <h1>Products page</h1>

      {
        // List 
        products.map(data => (
          <div key={data.id}>
            <h1>{data.title}</h1>
            <h2>{data.price}</h2>
            <button onClick={() => addtocart(data.title)}>Add to cart</button>
          </div>
        ))
      }
      <button onClick={payment}>Pay</button>
    </div>
  )
}

export default App