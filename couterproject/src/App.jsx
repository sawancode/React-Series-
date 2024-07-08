import { useState } from 'react';
import './App.css'

function App() {

  const [couter, setCouter] = useState(0);

  const addValue = () => {
    setCouter(prevCouter => prevCouter + 2)
    setCouter(prevCouter => prevCouter + 2)
  }

  const removeValue = () => {
    if(couter>0) {
      setCouter(couter-1)
    } 
  }

  return (
    <>
      <h1>Counter Project</h1>     
      <h2>Couter Value: {couter}</h2>

      <button onClick={addValue}>Add Value {couter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {couter}</button>

      <p>Footer: {couter}</p>
    </>
  )
}

export default App
