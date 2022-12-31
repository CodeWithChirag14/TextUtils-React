import React from 'react'
import { useState } from 'react'

export default function TextForm(props) {


  // const[hover,setHover]=useState('true');

  
  const handleUpClick =()=>
  {
    //   console.log("Uppercase was clicked"+text);
      let newText=text.toUpperCase();
      setText(newText);
      props.showAlert("Converted to UpperCase","success");
      
      
  }  
  const handleOnChange=(event)=>
  {
    //  console.log("handle on change")
    setText(event.target.value)

  }

  const handleLoClick=()=>
  {
      let newText=text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to LowerCase","success");

  }
  const handleClearClick=()=>
  {
    let newText='';
    setText(newText); 
    props.showAlert("Cleared Text","success");


  }
  const handleCopy=()=>
  {
      var text=document.getElementById("myBox")
      text.select();
      navigator.clipboard.writeText(text.value)
      props.showAlert("Text copied to clipboard","success");

  }
  const handleExtraSpaces=()=>
  {
    let newText=text.split(/[ ]+/)
    setText(newText.join(" "))
    props.showAlert("Extra spaces removed","success");


  }

  
  const [text,setText]=useState('');

 

  
  return (
    <>
    <div className="container" style={{color: props.mode === 'dark'?'white':'#042743' }}>
        <h1 className='mb-3'>{props.heading}</h1>
        <div className="mb-3">
        
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'#13466e':'white' ,color:props.mode === 'dark'?'white':'black'}} id="myBox" rows="8"     ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to  Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to  Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

    </div>

    <div className="container my-2" style={{color: props.mode === 'dark'?'white':'black' }}    >
     <h2>Your text summary</h2>
     <p>{text.split(" ").filter((element)=>{return element.length !==0 }).length} words and {text.length} characters</p>
     <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
     <h2>Preview</h2>
     <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </>
  )
}
