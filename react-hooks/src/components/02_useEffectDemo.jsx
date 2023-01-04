import { useState, useEffect } from 'react'
import axios from 'axios';

function Cats() {

  const [varA, setVarA] = useState(0);
  const [varB, setVarB] = useState('A');

  const [catFact, setCatFact] = useState(null)

  useEffect(() => {
    console.log("There was a side effect for Var A & B");
  }, [varA, varB]);

  useEffect(() => {
    console.log("There was a side effect for Var A");
  }, [varA]);

  useEffect(() => {
    console.log("There was a side effect for Var B");
  }, [varB]);

  useEffect(() => {
    console.log("There was a side effect for Once");
    axios.get('https://catfact.ninja/fact').then(resp => {
      setCatFact(resp.data.fact)
    });
    
  }, []);

  useEffect(() => {
    console.log("There was a side effect for All.");
  });

  return <div className="cat-world-container">
    
    <h3>Hello cat world</h3>

    <button data-testid="number" onClick={() => {
      setVarA(p => p+1); 
    }}> {varA}  </button>

    <button onClick={() => setVarB(p => p+1)}> {varB}  </button>
    
    <p>{catFact}</p>
  </div>
}

export default Cats;