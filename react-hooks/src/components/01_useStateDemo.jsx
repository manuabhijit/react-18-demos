import React, { useState } from "react";

function Example() {
  // Declare a state variable and a setter function
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>

      <br />
      <br />
      <br />

      <p>
        This component has a state variable called count that is initialized to
        0, and a setter function called setCount that is used to update the
        value of count. The component renders a button that, when clicked,
        increments the value of count by calling the setCount function. The
        component also displays the current value of count in a paragraph
        element.
      </p>
    </div>
  );
}

export default Example;
