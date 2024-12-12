import React, {useState} from 'react'

export default function TextForm(props) {

  const handleUpClick=()=>{
    console.log("uppercase is clicked")
    let newtext=text.toUpperCase();
    props.showAlert("Converted to Uppercase","success")
    setText(newtext)
  }
  const handleLowClick=()=>{
    console.log("uppercase is clicked")
    let newtext=text.toLowerCase();
    props.showAlert("Converted to Lowercase","success")

    setText(newtext)
  }
  const handleOnChange=(event)=>{
    console.log("On change",text);
    setText(event.target.value);
 
  }
  const handlefindchange=(event)=>{
    setfind(event.target.value);
  }
  const handleFindClick=(event)=>{
    if (findtext.trim() === "") {
      alert("Please enter a valid text to find");
      return;
    }
    let index = text.search(findtext);
    setfoundindex(index); // Update the found index state
  };

  const handleCopy=()=>{
    console.log("I am copy");
    var textField=document.getElementById("myBox");
    textField.select();
    navigator.clipboard.writeText(textField.value);
  };
const [text,setText] = useState('');
//find
const [findtext,setfind]=useState(' ');
const [foundindex,setfoundindex]=useState(-1);
  return (<>
    <div className='container'>
   <h1>{props.heading}</h1>
<div className="mb-3">

  <textarea className="form-control" id="myBox" rows="8"  value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}} ></textarea>
</div>
<button className="btn btn-primary mx-2"onClick={handleUpClick} >Convert to upper CASE</button>
<button className="btn btn-primary mx-2"onClick={handleLowClick} >Convert to Lower CASE</button>
<button className="btn btn-primary mx-2"onClick={handleCopy} >Copy</button>


    </div>
    <div className="container my-5"  style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}}>
        <h1>Your text summary</h1>
        <p>Number of words:{text.split(" ").length} <br/>Number of character:{text.length}
        <br /> Time needed to read:{0.008*text.split(" ").length}
        <h2>Preview</h2>
        <p>{text}</p>
        <p>{text.length>0?text:"Enter some thing to preview"}</p>
        </p>
    </div>
    <div className='container ' style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}} >
    <textarea name="find" id="find my" rows={3} onChange={handlefindchange}> </textarea>
    <p>The location of {findtext} is {foundindex} </p>
    <button className="btn btn-primary mx-2 "onClick={handleFindClick} >Find {findtext}</button></div>
</>

  )
}
