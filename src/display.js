
import React, { useEffect, useState } from "react";
//import './App.css';

function App() {
  const[dog, setDog]  = useState([]);

  useEffect(() => {
        const url = `https://dog.ceo/api/breeds/list/all`

        const fetchData = async() => {
          try{
            const response = await fetch(url);
            const json = await response.json();
            console.log(json);
            setDog(json);
          }catch(error){
            console.log(error);
          }
        };
        fetchData();
  }, []);

  

  return (
	
  <div className="Whole">
      <h1>Dog Generator</h1>
	  <div className="Dog">
      <select>
        <option value={dog.message}>Dof</option>
      </select>
      <img src={dog.message} alt="funny dog"/>
      <a href="/" id="new">Fetch!</a>
	  </div>  

</div>

  );
}



export default App;