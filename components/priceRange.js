import React from "react";

import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { getallcars,   filterSearchByName,filterSearchEvery } from "../redux/carSlice";
import { useSelector, useDispatch } from "react-redux";
//import {findcarbyprice} from "./API/index";

export default function PriceRange() {
  const apiurl = "http://localhost:5000/api";
  const [min_price, setMinPrice] = useState(0);

  const [max_price, setMaxPrice] = useState(0);

const [price, setPrice] = useState(0);

  const [name, setName] = useState("");

  const [car, setCar] = useState([]);

  const minref = useRef();

  const minref2 = useRef();

  const refCheckbox = useRef();



  const dispatch = useDispatch()

  const {allcars} = useSelector((state) => state.car);

  console.log('redux--->',allcars.cars);



  // {"price_min": "23000","price_max":"200000"}

  const onChange = (e) => {
    
    console.log(e.target.checked);


    if (e.target.checked) {



      const min_price = e.target.value.split(",")[0]; // before , result 23000
      const max_price = e.target.value.split(",")[1]; //after ,  result {200000}

      console.log("max_price", max_price);
        console.log("min_price", min_price);

     // setMaxPrice(max_price);

      // send  price range to server

      // http://localhost:5000/api/car/search-car-by-price-range hh

      const data = axios
        .post(`${apiurl}/car/search-car-by-price-range `, {
          price_min: min_price,
          price_max: max_price,
        })
        .then((res) => {
          console.log("------>", res.data);

          setCar(res.data);
          dispatch(getallcars(res.data))  //  <--------------
          console.log("------>", car.cars[1]);
          //console.log(car,car.cars.length);

          return res.data;
        });
    }


// else if nothing checked  fetch all cars

else{

    console.log('nothing fetcheeeeeed checked')
    dispatch(getallcars(null))
}


  };

// handlSearch when click button


const handlesubmit = async(e) => {


  //e.preventDefault();
//serrch by name with regex

const regex = new RegExp(name, 'i');



//send name and price as action payload to redux tofilter

dispatch(filterSearchEvery({name:name,price:200000}))


 // dispatch(filterSearchByName(name))


}



  useEffect(() => {
    console.log(
      "min ref",
      minref.current.checked,
      "---->",
      minref.current.value
    );
  }, [min_price]);

  return (
    <div>
      <h1>price range find</h1>

      <div>
        //{" "}
        <input
          ref={minref2}
          type="checkbox"
        //   name="min_price"
          value=' 40000,800000'
          onChange={onChange}
        />
        <input
          ref={minref}
          type="checkbox"
        //   name="min_price"
          value='23000,26600'
          onChange={onChange}
        />
      </div>


<hr/>


<input type="text" name=""  onChange={(e)=>setName(e.target.value)} value={name}/>

<button  onClick={handlesubmit} type="submit">Search car by name</button>


    </div>
  );
}
