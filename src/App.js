import { useState } from "react";
import "./App.css";
import Button from "./components/Button";

function App() {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");
  const buttonItems = [
    "7",
    "8",
    "9",
    "+",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "*",
    "C",
    "0",
    "=",
    "/",
  ];
  const handleButtonClick = (val) => {
    if (val === "C") {
      setExpression("");
      setResult(null);
      return;
    }
    if (val === "=") {
      if (expression === "") {
        setResult("Error");
        return;
      }
      let evaluatedVale = eval(expression);
      console.log(evaluatedVale);
      setResult(evaluatedVale);
      return;
    }
    let expressionCurrent = expression;
    expressionCurrent += val;
    setExpression(expressionCurrent);
  };
  return (
    <div className="container">
      <h1>Calculator Item</h1>
      <input value={expression} disabled={true} className="input-field" />
      {result && <div className="result">{result}</div>}
      <div className="calculator-pad">
        {buttonItems.map((ele, index) => {
          return (
            <Button
              content={ele}
              onClick={() => handleButtonClick(ele)}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
