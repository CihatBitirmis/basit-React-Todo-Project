import React from 'react';
import { useState } from 'react';

function App() {
  const [add, setAdd] = useState("")
  const [todos, setTodos] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault()

    if (add === "") {
      alert("Your To do List Empty!")
      return
    }
    console.log(add)
    setTodos([...todos,add])
    setAdd("")
  }
  return (
    <div className="container my-5">
      <form onSubmit={handleSubmit}>
        <h1 className="d-flex justify-content-center">Cihat Bitirmiş</h1>
        <div className="input-group mt-5">
          <input type="text"
            className="form-control"
            placeholder="Your To Do List"
            value={add}
            onChange={(event) => {
              setAdd(event.target.value)
            }} />
          <button className="btn btn-outline-light bg-success w-25" type="submit">ADD</button>
        </div>
      </form>
      <div className="mt-5">
        {
          todos.length === 0 ? (
            <p>You Don't have any todos yet</p>
          ) : (
            <>
              {
                todos.map((item, index) => (
                  <h1 key={index}>{item}</h1>
                ))
              }
            </>
          )
        }
      </div>
    </div>
  )
}

export default App;