import React from "react"
export default function About(props) {

 let Mystyle={
    color: props.mode==='dark'?'white':'black',
    backgroundColor:props.mode==='dark'?'#1E3789':'white'
 }

  return (
    <div className='container'>
        <h1 className='mx-3' style={{color:props.mode==='dark'?'white':'black'}}>About Us</h1>
        <div className="accordion mx-3 my-4" id="accordionExample">
        <div className="accordion-item" style={Mystyle}>
            <h2 className="accordion-header">
            <button className="accordion-button" type="button" style={Mystyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
               <strong>Analyze your text</strong> 
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count etc
            </div>
            </div>
        </div>
        <div className="accordion-item" style={Mystyle}>
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" style={Mystyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong>Free to use</strong>
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              Textutils is a free character counter tool that provides instant character count and word count statistics for a given text. Textutils reports the no of words and characters. Thus it is suitable for writing text with word/character limit
            </div>
            </div>
        </div>
        <div className="accordion-item" style={Mystyle}>
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" style={Mystyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong>Browser Compatible</strong>
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              This word counter software works in any web browser such as Chrome, Firefox, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
            </div>
            </div>
        </div>
        </div>
 
    </div>
  )
}
