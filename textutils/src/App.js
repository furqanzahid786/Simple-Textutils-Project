import { useState } from 'react';
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';


function App() {

  const[mode,setmode]=useState('light')

  let togglecheck=()=>
  {
       if(mode==='light')
       {
        setmode('dark')
        document.body.style.backgroundColor='#042743';
       }
       else
       {
        setmode('light')
        document.body.style.backgroundColor='white';
       }
  }

  return (
    <>
   <Navbar title="Textutils" about="About Textutils" mode={mode} toggle={togglecheck}/>
   <div className="container my-3">
   <Textform heading="Enter the text to analyze below"  mode={mode}/>
   </div>
      {/* <About/> */}
   
    </>
  );
}

export default App;
