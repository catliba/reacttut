import './App.css';
import { useState, useEffect } from 'react'
/*
const Person = (props) => {
  return (
    <>
      <h1>Name: {props.name}</h1>
      <h2>Last Name: {props.lastname}</h2>
      <h2>Age: {props.age}</h2>
    </>
  )
}
*/

const App = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    alert('Youve changed the counter to ' + counter)
  }, [counter]);
  
  return (
    <div className='App'>
      <button onClick = {() => setCounter((prevCounter) => prevCounter - 1)}>-</button>
      <h1>{counter}</h1>
      <button onClick = {() => setCounter((nextCounter) => nextCounter + 1)}>+</button>
    </div>
  );
}

export default App;
