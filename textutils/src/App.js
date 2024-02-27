import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import Alert from './Components/Alert';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {

  const[mode,setmode]=useState('light')
  const[alert,setalert]=useState(null)

      let showalert=(message,type)=>
      {
        setalert({
        msg:message,
        type:type
        })
        setTimeout(() => {
          setalert(null)
        }, 1700);
      }
      
  let togglecheck=()=>
  {
       if(mode==='light')
       {
        setmode('dark')
        document.body.style.backgroundColor='#042743';
        showalert("Dark mode has been enabled","Success")
       }
       else
       {
        setmode('light')
        document.body.style.backgroundColor='white';
        showalert("Light mode has been enabled","Success")
       }
  }

  return (
    <>
    <Router>
      <Navbar title="Textutils" about="About" mode={mode} toggle={togglecheck}/>
      <Alert alert={alert}/>
    <div className="container my-3">
      <Routes>
        <Route exact path="/about" element={<About mode={mode}/>}/>
        <Route exact path="/" element={<Textform heading="Enter the text to analyze below" showalert={showalert} mode={mode}/>}/>
      </Routes>
   </div>
   </Router>
    </>
  );
}

export default App;
