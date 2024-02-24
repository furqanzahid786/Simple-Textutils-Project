import React, { useState } from 'react'

export default function About() {

        const[Mystyle,setstyle]=useState(
            {
                color:'black',
                backgroundColor:'white'
            }
        )

        const[btnstatus,changedstatus]=useState('Enable Dark Mode')

        const toggleStyle=()=>
        {
            if(Mystyle.color==='black')
            {
                setstyle({
                    color:'white',
                    backgroundColor:'black',
                    border: '1px solid white'
                })
                changedstatus('Enable Light Mode')
            }
            else
            {
                setstyle({
                    color:'black',
                    backgroundColor:'white'
                    
                })
                changedstatus('Enable Light Mode')

            }
        }


  return (
    <div classNameName='container' style={Mystyle}>
        <h1 className='mx-3'>About Us</h1>
        <div className="accordion mx-3" id="accordionExample"  >
        <div className="accordion-item" style={Mystyle}>
            <h2 className="accordion-header">
            <button className="accordion-button" type="button" style={Mystyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Accordion Item #1
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        <div className="accordion-item" style={Mystyle}>
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" style={Mystyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Accordion Item #2
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        <div className="accordion-item" style={Mystyle}>
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" style={Mystyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Accordion Item #3
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        </div>

        <div>
        <button type='button' onClick={toggleStyle} className='btn btn-primary my-3 mx-3'>{btnstatus}</button>  
        </div>     
    </div>
  )
}
