import './App.css';
import { useState } from "react";
import axios from 'axios';

function App() {
  const [text , setTextList] = useState([]);
  
  const  gettexts = () => {
    axios.get("http://localhost:3001/1").then((response) => {
      setTextList(response.data[0]);
    });
  };
  
  
  



  return (
    <div className="App">
       <div className="texts">
        {/* <h1>hi for everyone</h1> */}
        
        {/* <button onClick={gettexts}>Show text</button> */}
        {gettexts()}
        {text.map((val, key) => {
          if (key===0) {
          return (
            <h3 key={key}>{val.text}-{key}</h3>
            ) 
          }
          else{
            return null;
            }
          }
        )}

      </div>


    </div>
  );
}

export default App;
