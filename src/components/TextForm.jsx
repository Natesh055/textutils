import React, { useState } from "react";

const TextForm = (props) => {
  const [text, setText] = useState("");
  const [numerics, setNumerics] = useState(0);

  const countNumerics = (newText) => {
    let count = 0;
    for (let i = 0; i < newText.length; i++) {
      if (/\d/.test(newText[i])) {
        count++;
      }
    }
    setNumerics(count);
  };

  return (
    <>
      <div className>
        <div className={`container text-${props.mode=='light'?'#042743':'light'} `}>
          <h3 className ='light' >{props.heading}</h3>
          <div className="form-group">
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              style = {{backgroundColor:props.mode==='dark'?'#042743':'light',color:props.mode==='dark'?'white':'black'}}
              value={text}
              onChange={(e) => {
                let newText = e.target.value;
                setText(newText);
                countNumerics(newText); // Update the numeric count
              }}
            ></textarea>
          </div>
          <div>
            <button
              className="btn btn-primary mx-2 "
              onClick={() => {
                let newText = text.toUpperCase();
                setText(newText);
                countNumerics(newText); // Recalculate numerics after conversion
              }}
            >
              Convert to uppercase
            </button>
            <button
              className="btn btn-primary mx-2"
              onClick={() => {
                let newText = text.toLowerCase();
                setText(newText);
                countNumerics(newText); // Recalculate numerics after conversion
              }}
            >
              Convert to LowerCase
            </button>
            <button
              className="btn btn-primary mx-2"
              onClick={() => {
                setText('');
                setNumerics(0); // Reset numerics count when clearing the text
              }}
            >
              Clear Text
            </button>
          </div>
        </div>
        <div className={`container text-${props.mode=='light'?'dark':'light'}` }>
          <h4>Your Text Summary :</h4>
          <p>
            {(text === '') ? 0 : text.split(" ").length} Words , {text.length} Characters
          </p>
          <p>
            Number of numerics: {numerics}
          </p>
          <p>{0.008 * text.split(" ").length} words per minute</p>
          <h2>Preview</h2>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
};

export default TextForm;
