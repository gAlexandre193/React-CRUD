import React, { HTMLInputTypeAttribute } from "react";
import "../assets/styles/input.css";

type InputT = {
  label: string;
  type?: "text" | "number";
  value?: any;
  onChange?: (e: HTMLInputTypeAttribute) => void;
};

function Input({ label, type = "text", value, onChange }: InputT) {
  return (
    <div className="inputContainer">
      <label className="labelInput"> {label} </label>
      <input 
        type={type}
        className="input"
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
      />
    </div>
  );
}

export default Input;