import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("");

  // Funtion to convert text to Uppercase
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };

  // Function to convert Text to Lowercase
  const handlelowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  };

  // Function to Clear Text from clipboard
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared!", "success");
  };

  // Function to Copy Text from clipboard
  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied!", "success");
  };

  // Functions that removes extra spaces from the textbox
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  };

  // Function that allows the user to change text in textbox
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "light" ? "#042743" : "white",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            autoFocus
            className="form-control"
            value={text}
            placeholder="Enter text here"
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{
              color: props.mode === "light" ? "#042743" : "white",
              backgroundColor: props.mode === "light" ? "white" : "grey",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary m-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary m-1" onClick={handlelowClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary m-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary m-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "light" ? "#042743" : "white",
        }}
      >
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length ? text : "Enter your text to preview here"}</p>
      </div>
    </>
  );
}
