const MyCars = () => {
  const cars = ['Ford', 'BMW', 'Audi'];
  return (
    <>
      <h3>My Cars:</h3>
      <ul>
        {cars.map((car, index) => <li key={index}>I am a { car }</li>)}
      </ul>
    </>
  );
}

export default MyCars;