import {
  useState,
  useRef
} from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 
 
  function plus(e) { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value)); 
  }; 
 
  function minus(e) { 
      e.preventDefault();
      setResult((result) => result - Number(inputRef.current.value));
      resetInput();
  };
 
  function times(e) { 
    e.preventDefault();
    const inputValue = parseFloat(inputRef.current.value);
      if (!isNaN(inputValue)) {
      setResult((result) => result * inputValue);
      resetInput();
    } else {
      alert("Invalid input");
    }
  }; 
 
  function divide(e) { 
    e.preventDefault();
    const inputValue = parseFloat(inputRef.current.value);
      if (!isNaN(inputValue) && inputValue !== 0) {
        setResult((result) => result / inputValue);
        resetInput();
    }  else {
        alert("Invalid input");
   }
  };
 
  function resetInput(e) { 
    inputRef.current.value = ""; 
  }; 
 
  function resetResult(e) { 
  	setResult(0);
    resetInput();
  }; 
 
  return ( 
    <div className="App"> 
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <form> 
        <p ref={resultRef}> 
          {result} 
        </p> 
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        /> 
        <button onClick={plus}>add</button> 
        <button onClick={minus}>subtract</button>
        <button onClick={times}>multiply</button>
        <button onClick={divide}>divide</button>
        <button onClick={resetInput}>reset Input</button>
        <button onClick={resetResult}>reset Result</button>
      </form> 
    </div> 
  ); 
} 
 
export default App; 
