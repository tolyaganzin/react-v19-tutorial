import { useState } from 'react';
const MyCheckboxForm = () => {
  // Declare a new state variable, which we'll call "inputs"
  const [inputs, setInputs] = useState({});
  // Handle changes to the input fields by name and value
  const handleChange = (e) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    let fillings = '';
    if (inputs.tomato) fillings += 'tomato';
    if (inputs.onion) {
      if (inputs.tomato) fillings += ' and ';
      fillings += 'onion';
    }
    if (fillings == '') fillings = 'no fillings';
    alert(`${inputs.firstname} wants a burger with ${fillings}`);
    event.preventDefault();
  };

  return (
    <>
      <h3>My Checkbox Form Component</h3>
      <form onSubmit={handleSubmit}>
        <label>My name is:
        <input 
          type="text" 
          name="firstname" 
          value={inputs.firstname} 
          onChange={handleChange}
        />
        </label>

        <p>I want a burger with:</p>
        <label>Tomato:
        <input 
          type="checkbox" 
          name="tomato" 
          checked={inputs.tomato} 
          onChange={handleChange}
        />
        </label>
        <label>Onion:
          <input 
            type="checkbox" 
            name="onion" 
            checked={inputs.onion} 
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default MyCheckboxForm;