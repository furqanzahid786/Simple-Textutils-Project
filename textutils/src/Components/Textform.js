import React from 'react'
import { useState } from 'react'

export default function Textform(props) {

  const handlebtnU=()=>
  {
    let newtext= text.toUpperCase()
     setText(newtext)
     props.showalert("Converted to uppercase!","Success")
  }

  const handlebtnL=()=>
  {
    let newtext= text.toLowerCase()
     setText(newtext)
     props.showalert("Converted to Lowercase!","Success")
  }

  const handleCopy=()=>
  {
     let copy_text=document.getElementById('textarea')
     copy_text.select()
     navigator.clipboard.writeText(copy_text.value)  //copy text
     props.showalert("Copied to clipboard","Success")
  }

  const handlebtnC=()=>
  {
    let newtext= ''
     setText(newtext)
     props.showalert("Clear","Success")
  }

  const handletext=(event)=>
  {
    setText(event.target.value)
  }
  const handleExtraspaces=()=>
  {
   let content=text.split(/[ ]+/)
   setText(content.join(" "))
   props.showalert("Extra Spaces Removed","Success")
  }

  const[text,setText]=useState('')

  return (
    <>
<div className='container' style={{ color:props.mode==='dark'?'white':'black'}} >
    <h1>{props.heading}</h1>
    <div class="mb-3">
    <textarea className="form-control" id="textarea"   onChange={handletext} style={{backgroundColor:props.mode==='dark'?'#766B6B':'white', color:props.mode==='dark'?'white':'black'}} value={text} rows="7"></textarea>
    </div>
    <button className='btn btn-primary mx-2' onClick={handlebtnU}>Convert to Uppercase</button>
    <button className='btn btn-primary mx-2' onClick={handlebtnL}>Convert to Lowercase</button>
    <button className='btn btn-primary mx-2' onClick={handlebtnC}>Clear Text</button>
    <button className='btn btn-primary mx-2' onClick={handleCopy}>Copy Text</button>
    <button className='btn btn-primary mx-2' onClick={handleExtraspaces}>Remove Extra Spaces</button>
</div>


    <div className="container my-3 mx-2"  style={{ color:props.mode==='dark'?'white':'black'}}>
    <h2>Your Text Summary</h2>
    <p>Total Words {text.split(" ").length} and Total Characters {text.length}</p>
    <p>{0.008 * text.split(" ").length} minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:'Enter something in the textbox above to preview it here'}</p>
    </div>
    </>
  )
}
