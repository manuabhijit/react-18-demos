import React, { useState } from "react";

function ClickEvent({testClick}) {
  // Declare a state variable and a setter function
  const [count, setCount] = useState(0);

  const onclickHandler = () => {
    testClick()
    setCount(count + 1);
  };

  return (
    <div className="hook-component">
      <p>
        You clicked
        <span data-testid="count-display">{count}</span>
         times
      </p>
      <button data-testid="click-button" onClick={onclickHandler}>
        Click me
      </button>

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

ClickEvent.defaultProps = {
  testClick: () => {}
}
export default ClickEvent;
