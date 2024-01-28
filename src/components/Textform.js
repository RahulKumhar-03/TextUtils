import React, {useState} from 'react'

export default function TextForm(props) {
   
    const handleOnChange = (event) =>{
      setText(event.target.value)
    }

    const [text, setText] = useState('');

    const handleClick = () =>{
     let newText = text.toUpperCase();
     setText(newText);
    }
    const handleloClick = () =>{
     let newText = text.toLowerCase();
     setText(newText);
    }

    const clearClick = () =>{
     let newText = "";
     setText(newText);
    }
    
    const handleCopyClick = async () => {
      try {
          await navigator.clipboard.writeText(text);
      } catch (err) {
          console.error("Unable to copy to clipboard.",err);
          alert("Copy to clipboard failed.");
      }
    };

 return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode === 'light'?'white':'black', color : props.mode === 'light'?'black':'white'}}
         id="myBox" rows="10"></textarea>
        </div>
        <button className='btn btn-primary mx-2' onClick={handleClick}>Convert to Uppercase</button>
        <button className='btn btn-primary mx-2' onClick={handleloClick}>Convert to Lowercase</button>
        <button className='btn btn-primary mx-2' onClick={clearClick}>Clear Text</button>
        <button className='btn btn-primary mx-2' onClick={handleCopyClick}>Copy Text</button>
      </div>
     <div className="container my-4">
       <h1>Your Text Summary</h1>
       <p>{text.trim().split(/\s+/).filter(Boolean).length} words and {text.length} characters</p>
       <p>{0.008 * text.split(" ").length} minutes read</p>
       <h2>Preview</h2>
       <p>{text}</p>
     </div>
    </>
  )
}
