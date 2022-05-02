import logo from './logo.svg';
import './App.css';
import {useState,useRef} from 'react';
import React from "react";

import Home from "./pages/home";

function App() {
  const [show, setShow] = useState(false);
  const [cityFilter, setCityFilter] = useState([]);

  const refCheckbox = useRef();


  const onChange = (e) => {
    const cityName = e.target.value; // checkbox value
   
    // add all checkd inpu  to array

    if(e.target.checked){

      setCityFilter([...cityFilter,cityName]);
    }

    // remove all checked input from array

    if(!e.target.checked){

      setCityFilter(cityFilter.filter(city => city !== cityName));
    }

    // console.log(cityFilter);

  



     
  };


  return (
    
<div>
  
<h1>Cars app</h1>


<Home/>



</div>

  );
}

export default App;
