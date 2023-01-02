# UseReducer

```javascript
import { useReducer, useState } from "react";
import "./App.css";

const TYPES = {
  increment: "increment",
  decrement: "decrement",
  reset: "reset",
};

const reducer = (state, action) => {
  switch (action.type) {
    case TYPES.increment:
      return state + action.payload;
    case TYPES.decrement:
      return state - 1;
    case TYPES.reset:
      return 0;
    default:
      return state;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => dispatch({ type: TYPES.increment, payload: 5 })}>
        Incrementar
      </button>
      <button onClick={() => dispatch({ type: TYPES.decrement })}>
        Decrementar
      </button>
      <button onClick={() => dispatch({ type: TYPES.reset })}>Reset</button>
    </div>
  );
}

export default App;
```
