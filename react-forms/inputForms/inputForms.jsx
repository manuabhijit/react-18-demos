import './inputForms.css';
import { useState } from 'react';

function InputForms() {

  const [name, setName] = useState('qwerty');

  localStorage.setItem("formData", JSON.stringify({}))
  const myData = localStorage.getItem("formData");
  console.log(myData);

  return <div className="input-forms-container">
    <h3>Input Forms</h3>
    <input 
      placeholder="Enter your Name"
      maxLength="5"
      value={name} 
      onChange={(e) => setName(e.target.value)} 
      type="text" 
    />
    My Value: {name}

    Reset 
  </div>
}

export default InputForms;