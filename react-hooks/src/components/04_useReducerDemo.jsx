import { useReducer } from "react";

const initialState = { count: 0, text: "hello" };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    default:
      throw new Error();
  }
}

const UseReducerComponent = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="hook-component">
      <div>Count: {state.count}</div>
      <br />
      <br />
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </div>
  );
};

export default UseReducerComponent;
