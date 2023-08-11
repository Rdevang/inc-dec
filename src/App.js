import { useState } from "react";
import "./App.css";


function App() {
  const [count, setCount] = useState(0);

  function ondec() {
    setCount((prevCount) => prevCount - 1);
  }

  function oninc() {
    setCount((prevCount) => prevCount + 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div className="App">
      <div className="head">increment && decrement</div>
      <div className="incdec">
        <button onClick={oninc}>+</button>
        <div className="counter">{count}</div>
        <button onClick={ondec}>-</button>
      </div>
      <button className="reset" onClick={reset}>
        Reset
      </button>
    </div>
  );
}

export default App;
