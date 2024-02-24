import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';

function App() {
  return (
    <>
   <Navbar title="Textutils" about="About Textutils"/>
   <div className="container my-3">
   {/* <Textform heading="Enter the text to analyze below"/> */}
   <About/>
   </div>
   
    </>
  );
}

export default App;
