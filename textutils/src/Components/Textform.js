import React from 'react'
import { useState } from 'react'

export default function Textform(props) {

  const handlebtn=()=>
  {
    let newtext= text.toUpperCase()
     setText(newtext)
  }

  const handletext=(event)=>
  {
    setText(event.target.value)
  }

  const[text,setText]=useState('Enter Your Text')

  return (
<div>
    <h1>{props.heading}</h1>
    <div class="mb-3">
    <textarea className="form-control" id="exampleFormControlTextarea1" onChange={handletext} value={text} rows="7"></textarea>
    </div>
    <button className='btn btn-primary' onClick={handlebtn}>Convert to Uppercase</button>
 </div>
  )
}
