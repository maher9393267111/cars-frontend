import logo from './logo.svg';
import './App.css';
import {useState,useRef} from 'react';
import React from "react";
import Categories from "./components/categories";
//import Home from "./pages/home";
import PriceRange from './components/priceRange';
import  Maher from "./pages/maherBranch/maher";
 
function App() {
  const [show, setShow] = useState(false);
  const [cityFilter, setCityFilter] = useState([]);

  const refCheckbox = useRef();





  return (
    
<div>
  
<h1>Cars app</h1>

{/* <PriceRange /> */}

<Maher /> 




</div>

  );
}

export default App;
