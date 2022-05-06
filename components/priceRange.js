import React from "react";
import { Button, Form, FormGroup, Label, Input } from "react-bootstrap";

import { useState, useRef, useEffect } from "react";
import axios from "axios";
import {
  getallcars,
  filterSearchByName,
  filterSearchEvery,
  minPrice,
  maxPrice,
} from "../redux/carSlice";
import { useSelector, useDispatch } from "react-redux";
//import {findcarbyprice} from "./API/index";

export default function PriceRange() {
  const apiurl = "http://localhost:5000/api";
  //  const [min_price, setMinPrice] = useState(0);

  // const [max_price, setMaxPrice] = useState(0);

  const [price, setPrice] = useState(0);

  const [name, setName] = useState("");

  const [skip, setSkip] = useState(3);

  const [limit, setLimit] = useState(6);

  const [car, setCar] = useState([]);

  const minref = useRef();

  const minref2 = useRef();

  const refCheckbox = useRef();

  const dispatch = useDispatch();

  const { allcars, min_price, max_price } = useSelector((state) => state.car);

  console.log("redux--->", allcars.cars);

  // {"price_min": "23000","price_max":"200000"}

  const onChange = (e) => {
    console.log(e.target.checked);

    if (e.target.checked) {
      const min_pricevalue = e.target.value.split(",")[0];
      console.log("minvalue", min_pricevalue);
      //  setMinPrice(parseInt(min_pricevalue)); // before , result 23000
      const max_pricevalue = e.target.value.split(",")[1];
      console.log("maxvalue", max_pricevalue, " convert to number");

      //    setMaxPrice(parseInt(max_pricevalue)); //after ,  result {200000}

      console.log("max_price----->", max_price);
      console.log("min_price ----->", min_price);

      dispatch(maxPrice(parseInt(min_pricevalue)));
      dispatch(minPrice(parseInt(max_pricevalue)));

      // setMaxPrice(max_price);

      // send  price range to server

      // http://localhost:5000/api/car/search-car-by-price-range hh

      setTimeout(() => {
        console.log(
          "max_price----->",
          max_pricevalue,
          "------",
          min_pricevalue
        );

        const data = axios
          .post(`${apiurl}/car/search-car-by-price-range `, {
            price_min: min_pricevalue,
            price_max: max_pricevalue,
          })
          .then((res) => {
            console.log("------>", res.data);

            setCar(res.data);
            dispatch(getallcars(res.data)); //  <-------------- after filter by price
            console.log("------>", car.cars[1]);
            //console.log(car,car.cars.length);

            return res.data;
          });
      }, 1000);
    } else {
      dispatch(maxPrice(0));
      dispatch(minPrice(0));
    }

    // else if nothing checked  fetch all cars
  };

  // handlSearch when click button

  const handlesubmit = async (e) => {
    //e.preventDefault();
    //serrch by name with regex

    const regex = new RegExp(name, "i");

    //send name and price as action payload to redux tofilter

    dispatch(filterSearchEvery({ name: name, price: 200000 }));

    // dispatch(filterSearchByName(name))
  };

  useEffect(() => {
    // if (!e.target.checked) {
    // // http://localhost:5000/api/car/search-car-by-query?search=ren&&city=istanbul

    if (min_price === 0 && max_price === 0) {
      console.log("else--------->");
      const data = axios
        .get(
          `${apiurl}/car/show-cars-limit?skip=${skip ? skip : 3}&limit=${
            limit ? limit : 6
          }`
        )
        .then((res) => {
          console.log("------>", res.data);

          setCar(res.data);
          dispatch(getallcars(res.data)); //  <--------------
          console.log("------>", car.cars);
          //console.log(car,car.cars.length);

          return res.data;
        });
    }
    //data();
    //  }
  }, [min_price]);





  

  return (
    <div>
      <h1 className="  bg-[aliceblue]  text-red font-bold ">
        price range find {min_price} - {max_price}
        <Button variant="primary">Primary</Button>{" "}
      </h1>

      <div>
        //{" "}
        <input
          ref={minref2}
          type="checkbox"
          //   name="min_price"
          value=" 40000,800000"
          onChange={onChange}
        />
        <input
          ref={minref}
          type="checkbox"
          //   name="min_price"
          value="23000,26600"
          onChange={onChange}
        />
      </div>

      <hr />

      <input
        type="text"
        name=""
        onChange={(e) => setName(e.target.value)}
        value={name}
      />

      <button onClick={handlesubmit} type="submit">
        Search car by name
      </button>
    </div>
  );
}
