import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';

function App() {
  return (
    <>
   <Navbar title="Textutils" about="About Textutils"/>
   <div className="container my-3">
   <Textform heading="Enter the text to analyze below"/>
   </div>
   
    </>
  );
}

export default App;
