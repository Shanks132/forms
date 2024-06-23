
import { useState } from 'react';
import './App.css'
import Input from './components/Input'

function App() {
  const [submitted, setSubmitted] = useState(false);
  const [position, setPostition] = useState('');
  const [data, setData] = useState({});
  const [error, setError] = useState('')

  function handlePositionChange(event){
    console.log(event.target.value)
    setPostition(event.target.value)
    console.log("Statement is ",data)
    
  }

  function handleSubmit(event){
    event.preventDefault();
    const formData = new FormData(event.target);
    const skills = formData.getAll('skills')
    const formEntries = Object.fromEntries(formData.entries());
    formEntries.skills = skills;
    
    if(formEntries.Phone.length === 10 && formEntries.position !== ''){
      setError('')
      console.log(formEntries);  
      setData(formEntries)  
      setSubmitted(true)
    }
    else{
      setError('Phone')
    }
  } 
  
  if(submitted){
    return (
      
      <dialog open={submitted} onClose={()=>setSubmitted(!submitted)}>
        <p>Your data has been submitted as follows : {Object.entries(data).map(([key, value]) =>
            <li key={key}>
              <strong>{key}:</strong> {value.toString()}
            </li>
          )} </p>
        <button onClick={()=>setSubmitted(!submitted)} type="submit">Return</button>
      </dialog>
    )
  }
  return (
    <>
      <form id="form2" onSubmit={()=>handleSubmit(event)}>
        <Input id="Name" label="Name" type="text" required />
        <Input id="Email" label="Email" type="email" required />

        <Input id="Phone" label="Phone Number" type="number" required />
        {error==="Phone" &&<p className='errorMessage'>Number should be 10 digits long</p>}
        
        <div className='inputField'>
        <label htmlFor="position">Choose the position you are applying for:</label>
        <select id="position" onChange={()=>handlePositionChange(event)} name="position">
          <option value="">None of these</option>
          <option value="Developer">Developer</option>
          <option value="Designer">Designer</option>
          <option value="Manager">Manager</option>
        </select>
        {position==="" && <p className='errorMessage'>please select a position</p>}
        </div>
        
        { 
        position === "Designer" &&
        <Input 
        id="portfolioLink" 
        label="Portfolio Link" 
        type="text" 
        />

        }
        {
          (position == "Developer" || position == "Designer") &&
          <Input 
          id="relevantExperience" 
          label="Relevant Experiece" 
          type="number" 
          defaultValue={0}/>
        }
        {
          (position === "Manager") &&
          <Input 
          id="managerExperience" 
          label="Management Experience" 
          type="text" 
          />
        }
        <fieldset className='inputField'>
            <legend>Additional Skills</legend>
            <div>
                <input type="checkbox" id="skill1" name="skills" value="HTML"/>
                <label htmlFor="skill1">HTML</label>
            </div>
            <div>
                <input type="checkbox" id="skill2" name="skills" value="CSS"/>
                <label htmlFor="skill2">CSS</label>
            </div>
            <div>
                <input type="checkbox" id="skill3" name="skills" value="JavaScript"/>
                <label htmlFor="skill3">JavaScript</label>
            </div>
            <div>
                <input type="checkbox" id="skill4" name="skills" value="Python"/>
                <label htmlFor="skill4">Python</label>
            </div>
            <div>
                <input type="checkbox" id="skill5" name="skills" value="Project Management"/>
                <label htmlFor="skill5">Project Management</label>
            </div>  
        </fieldset>

        <fieldset>
        <legend>Appointment Details</legend>
            <div>
                <label htmlFor="appointment-date">Select a date : </label>
                <input type="date" id="appointment-date" name="appointment-date"/>
            </div>
            <div>
                <label htmlFor="appointment-time">Select a time : </label>
                <input type="time" id="appointment-time" name="appointment-time"/>
            </div>
        </fieldset>
        <button type="submit" >Submit</button>
      </form>

    </>
  )
}

export default App
