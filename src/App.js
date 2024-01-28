import React, {useState} from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/Textform';
{/*import About from './components/About';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";*/}

export default function App() {
  const [mode, setMode] = useState('light')           
  const togglemode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white'
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black'
    }
  }
  return (
    <>
    {/*<Router>*/}
      <Navbar title="TextUtils" homeLink="Home" mode={mode} toggleMode={togglemode} aboutLink="About"/> 
       <div className="container my-3">
       {/* <Routes>
          <Route path="/about"  element={<About mode={mode} />}/>*/}

          <TextForm heading="Enter Your Text To Analyze" mode={mode}/>
       / {/*</Routes>*/}
       </div>
    {/*</Router>*/}
   </>
  );
}

