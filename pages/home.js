import React from "react";

import { useState, useRef, useEffect } from "react";
import axios from "axios";

export default function Home() {
  // send city and name to search from server

  const [city, setCity] = useState("");

  const [name, setName] = useState("");

  useEffect(() => {
    // send city and name to search from server


    

      handlesubmit();
  }, [city, name]);

  // handle change event city and name

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "city") {
      setCity(value);
      console.log(city);
    } else if (name === "name") {
      setName(value);
      console.log(name);
    }
  };


const handlesubmit = async(e) => {


    //e.preventDefault();

        const response = await axios.post(
          `http://localhost:5000/api/car/search-car-by-query?search=${name}&city=${city? city : ""}`
        );
  
        const data = await response.data;
  
        console.log(data);
        


}






  return (
    <div>
      <h1>home page is here </h1>

      {/* // city input  */}

      <input type="text" name="city" value={city} onChange={handleChange} />

      {/* // name input  */}

      <input type="text" name="name" value={name} onChange={handleChange} />


<button onClick={handlesubmit} type="submit"> find car</button>

    </div>
  );
}
