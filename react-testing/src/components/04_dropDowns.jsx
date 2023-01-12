import React, { useState } from 'react';

function DropdownEvent() {
  // Declare a state variable and a setter function
  const options = [
    { value: 'Volvo', label: 'Volvo' },
    { value: 'Saab', label: 'Saab' },
    { value: 'Fiat', label: 'Fiat' },
  ];

  const [car, setCar] = useState(options[0].value);

  return <div className="hook-component">
    <p >Choose a car: {car}</p>
    <select
        id="cars"
        name="cars"
        data-testid="car-dropdown"
        onChange={(e) => {
          console.log(e.target.value)
          setCar(e.target.value);
        }}
      >
        {options.map(options => <option 
        key={`option-${options.value}`}
        data-testid={`select-option`}
        value={options.value}>{options.label}</option>)}
  
      </select>
  </div>;
}

export default DropdownEvent;
