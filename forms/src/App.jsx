import { useState } from 'react'
import './App.css'

function App() {
  const [guestIn, setGuestIn] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [userData, setUserData] = useState({})

  function handleGuestStatus() {
    setGuestIn(!guestIn)
  }

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
    const formData = new FormData(event.target)
    const data = Object.fromEntries(formData.entries())

    // Correct guest status handling
    data.guest = formData.get('guest') ? true : false
    
    setUserData(data)
    console.log(data)
  }

  return (
    <div>
      <header id="title">
        Forms (level 1)
      </header>
      {!submitted &&
        <form id="form1" onSubmit={handleSubmit}>
          <div>
            <label htmlFor='name'>Name</label>
            <input id='name' name='name' type="text" required></input>

            <label htmlFor='email'>Email</label>
            <input id='email' name='email' type="email" required></input>

            <label htmlFor='age'>Age</label>
            <input id='age' name='age' type="number" min={0}></input>

            <label htmlFor='guest'>Are you attending with a guest</label>
            <input id='guest' name='guest' type="checkbox" onClick={handleGuestStatus}></input>

            {guestIn && <>
              <label htmlFor='guestName'>Guest Name</label>
              <input id='guestName' name='guestName' type="text" required></input>
            </>}
          </div>
          <button id="submitButton" type="submit">Submit</button>
        </form>
      }
      {submitted &&
        <ul>
          {Object.entries(userData).map(([key, value]) =>
            <li key={key}>
              <strong>{key}:</strong> {value.toString()}
            </li>
          )}
        </ul>}
    </div>
  )
}

export default App
