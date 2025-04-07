import React from "react";
import "./Button.css";

function Button({ content, onClick }) {
  return (
    <button onClick={onClick} className="calculator-item">
      {content}
    </button>
  );
}

export default Button;
