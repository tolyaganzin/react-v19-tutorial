import { useState } from 'react'
const MyCars = () => {
  const cars = ['Ford', 'BMW', 'Audi'];

  const [myCar, setMyCar] = useState("Volvo");

  const handleChange = (event) => {
    setMyCar(event.target.value)
  }

  return (
    <>
      <h3>My Cars:</h3>
      <form>
        <span>selected car: </span>
        <select value={myCar} onChange={handleChange}>
          {cars.map((car) => <option  value={car}>{car}</option>)}
        </select>
      </form>
      <ul>{cars.map((car, index) => <li key={index}>I am a { car }</li>)}</ul>

    </>
  )
  // return (
  //   <>
  //     <h3>My Cars:</h3>
  //     <ul>
  //       {cars.map((car, index) => <li key={index}>I am a { car }</li>)}
  //     </ul>
  //   </>
  // );
}

export default MyCars;