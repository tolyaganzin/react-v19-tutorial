import { useState } from 'react'

const MyForm = () => {
  const [name, setName] = useState("test default"); //set default value for the input field

  // handleChange function to update the state when the input value changes
  const handleChange = (e) => {
    setName(e.target.value);
  }

  return (
    <>
      <h3>My Form Component</h3>
      <form>
        <label>Enter your name:
          <textarea
            type="text" 
            value={name}
            onChange={handleChange}
          />
        </label>
        <pre>Current value: {name}</pre>
      </form>
    </>
  )
}

export default MyForm;