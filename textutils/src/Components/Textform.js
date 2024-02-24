import React from 'react'
import { useState } from 'react'

export default function Textform(props) {

  const handlebtnU=()=>
  {
    let newtext= text.toUpperCase()
     setText(newtext)
  }

  const handlebtnL=()=>
  {
    let newtext= text.toLowerCase()
     setText(newtext)
  }

  const handlebtnC=()=>
  {
    let newtext= ''
     setText(newtext)
  }

  const handletext=(event)=>
  {
    setText(event.target.value)
  }

  const[text,setText]=useState('')

  return (
<div>
    <h1>{props.heading}</h1>
    <div class="mb-3">
    <textarea className="form-control" id="exampleFormControlTextarea1" onChange={handletext} value={text} rows="7"></textarea>
    </div>
    <button className='btn btn-primary mx-2' onClick={handlebtnU}>Convert to Uppercase</button>
    <button className='btn btn-primary mx-2' onClick={handlebtnL}>Convert to Lowercase</button>
    <button className='btn btn-primary mx-2' onClick={handlebtnC}>Clear Text</button>

    <div className="container my-3">
    <h2>Your Text Summary</h2>
    <p>Total Words {text.split(" ").length} and Total Characters {text.length}</p>
    <p>{0.008 * text.split(" ").length} minutes read</p>
    <h2>Preview</h2>
    <p>{text}</p>
    </div>
    
    
    
 </div>
  )
}
