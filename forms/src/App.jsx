import { useState } from 'react'
import './App.css'
useState

function App() {
  // eslint-disable-next-line no-unused-vars
  const[guestIn, setGuestIn]= useState(false)

   function handleGuestStatus(){
    setGuestIn(!guestIn)
   }
  
  function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.target)
    const guestStatus = formData.get('guest')
    const data = Object.fromEntries(formData.entries())

    if(!guestStatus){
      data.guest = false;
    }
    else{
      setGuestIn(true)
      data.guest = true;
    }
    console.log(data)
    }

  return (
    <div>
      <header id="title">
        Forms (level 1)
      </header>

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
      </>
      }

      </div>
      <button id="submitButton" type="submit">Submit</button>
    </form>
    </div>
  )
}

export default App
