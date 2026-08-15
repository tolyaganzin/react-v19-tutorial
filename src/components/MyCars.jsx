import { useState } from 'react'
const MyCars = () => {
  const cars = ['Ford', 'BMW', 'Audi'];

  // useState hook to manage the selected car state
  const [myCar, setMyCar] = useState("Volvo");
  // handleChange function to update the selected car state when the dropdown value changes
  const handleChange = (event) => {
    setMyCar(event.target.value)
  }

  return (
    <>
      <h3>My Cars Component</h3>
      <form>
        <span>selected car: </span>
        <select value={myCar} onChange={handleChange}>
          {cars.map((car) => <option  value={car}>{car}</option>)}
        </select>
      </form>
      <ul>{cars.map((car, index) => <li key={index}>I am a { car }</li>)}</ul>
    </>
  )
}

export default MyCars;