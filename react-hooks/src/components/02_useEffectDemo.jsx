import { useState, useEffect } from 'react'
import axios from 'axios';

function UseEffectComponent() {

  const [varA, setVarA] = useState(0);
  const [varB, setVarB] = useState(1);

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

  return <div className="hook-component">
    
    <h3>Hello cat world</h3>

    <button data-testid="number" onClick={() => {
      setVarA(p => p+1); 
    }}> Update varA ({varA}) </button>

    <button onClick={() => setVarB(p => p+1)}> Update varB ({varB}) </button>
    <p>Check Console to se side effect pattern</p>

    <br />
    <br />
    Fix: <button> Get New Cat Fact  </button>

    
    <p>{catFact}</p>
  </div>
}

export default UseEffectComponent;