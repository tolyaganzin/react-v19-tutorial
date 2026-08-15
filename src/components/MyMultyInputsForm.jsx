import { useState } from 'react';
const MyMultiInputsForm = () => {
  // Declare a new state variable, which we'll call "inputs"
  const [inputs, setInputs] = useState({
    firstname: 'John',
    lastname: 'Doe'
  });
  // Handle changes to the input fields by name and value
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  return (
    <>
      <h3>My Multi Inputs Form Component</h3>
      <form>
        <label>First name:
        <input 
          type="text" 
          name="firstname" 
          value={inputs.firstname} 
          onChange={handleChange}
        />
        </label>
        <label>Last name:
          <input 
            type="text" 
            name="lastname" 
            value={inputs.lastname} 
            onChange={handleChange}
          />
          </label>
          <p>Current values: {inputs.firstname} {inputs.lastname}</p>
      </form>
    </>
  )
}

export default MyMultiInputsForm;