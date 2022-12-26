
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react';
import Alert from './components/Alert';

// import { BrowserRouter, Routes,Route} from "react-router-dom";




function App() {
const[mode, setMode] = useState('light');

const showAlert=(message,type)=>
{
    setAlert(
    {
      msg:message,
      type:type
    
    }
    
    )
    setTimeout(() => {
      setAlert(null);
    }, 1500);

}

  const toggleMode=()=>
  {
     if(mode ==='light')
     {
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode is enabled","success");
      document.title='TextUtils - Dark Mode';

     }    
     else
     {
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode is enabled","success");
      document.title='TextUtils - Light Mode';
     }
      
  }
  // const toggleMode1=()=>
  // {
  //    if(mode ==='light')
  //    {
  //     setMode('dark');
  //     document.body.style.backgroundColor='Red';
  //     showAlert("Red mode is enabled","success");

  //    }    
  //    else
  //    {
  //     setMode('light');
  //     document.body.style.backgroundColor='White';
  //     showAlert("Light mode is enabled","success");
  //    }
      
  // }
  

    


  const[alert,setAlert]=useState(null);
   
  return (
   <>
   
    
   
    {/* <BrowserRouter> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}   />

      <Alert alert={alert}></Alert>
      <div className="container my-3">
        {/* <Routes>
          <Route exact path="/about" element={ <About/> }>
          
          </Route> */}
          {/* <Route exact path="/" element={<TextForm  showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>}> */}
          <TextForm  showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
         {/* </Route> */}
        {/* </Routes> */}
        </div>
    {/* </BrowserRouter> */}
    
   </>
  );
}

export default App;
 