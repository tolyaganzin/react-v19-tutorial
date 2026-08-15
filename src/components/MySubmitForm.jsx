import { useState } from 'react';

const MySubmitForm = () => {
  const [name, setName] = useState("");

  // handleChange function to update the state when the input value changes
  const handleChange = (e) => {
    setName(e.target.value);
  }
  // handleSubmit function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent the default form submission behavior
    alert(name);
  }

  return (
    <>
      <h3>My Submit Form Component</h3>
      <form onSubmit={handleSubmit}>
        <label>Enter your name:
          <input
            type="text" 
            value={name}
            onChange={handleChange}
          />
        </label>
        <input type="submit" />
      </form>
    </>
  )
}

export default MySubmitForm;