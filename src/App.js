
import './App.css';
import React,{ useState } from 'react';
import Abouts from './components/Abouts';

import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import  Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode,setMode] = useState('light');

  const [alert, setAlert] = useState(null);
  const showAlert = (message,type)=>{
                setAlert({
                    msg:message,type:type
                  })
                  setTimeout(()=>{
                    setAlert(null);
                  },1500)
  }

  const toggleMode=()=>
  { if(mode==='light'){
     setMode('dark')
     document.body.style.backgroundColor='#042743';
     showAlert("Dark mode is enable","success")
     
    //  setInterval(() => {
    //   document.title=" Text utils Darkmode";
    //  },2000);
    
     
  }
  else{
    setMode('light')
    document.body.style.backgroundColor='white';
    showAlert("Light mode is enable","success")
  }
   
  }
    
    
    return (
    <>
<Router>
<Navbar title="Textutils2 in progress by yash" abouttextutils="About us" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}  />

<div className={`container my-3 text-${mode==='dark'?'white':'black'}`}>
  <Routes>
    <Route exact path="/about" element={<Abouts/>}/>
    
    
    
    <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyse below" mode={mode} />} />
   
  </Routes>
 
 
  </div>
</Router>
    </>
  );
}

export default App;
