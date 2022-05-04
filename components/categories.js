import React from "react";
import { useState, useRef, useEffect } from "react";
import { fetch_categoriesApi, carsBycategoryIdApi,fetch_cargoryByIdApi,fetch_allcarsApi } from "../redux/fetchapi";
import { useSelector, useDispatch } from "react-redux";
import { getcarsByCategoryId,carsfilterbyCheckbox } from "../redux/carSlice";
import axios from "axios";

export default function Categories() {
  const apiurl = "http://localhost:5000/api";

  const dispatch = useDispatch();

  const { categories,allcars } = useSelector((state) => state.car);

const cars = allcars?.cars ===  undefined ? allcars : allcars.cars;


  console.log("Categories from redux fetch", categories);

  useEffect(() => {
    dispatch(fetch_categoriesApi());
   
  
    console.log("all  categoreis  fetched");
  }, []);

  useEffect(() => {
    dispatch(fetch_allcarsApi());
   
    
  
    console.log("all  cars  fetched-----  maher branch");
  }, []);



  const handlecategoryId = async (categoryId) => {
    console.log("categoryId", categoryId);
    
    

    dispatch(carsBycategoryIdApi(categoryId))
    dispatch(fetch_cargoryByIdApi('626f9a4d1050bb4a0e855266'))

    console.log("cat clickeed");
  };


const [checkedbox,setcheckedbox] = useState([]);

// find car by category id from checkbox checked


const handleCheckbox = (e) => {
  

  const {value,checked} = e.target;

  if( e.target.checked === true){
    console.log(e.target.value,e.target.checked);

    if(checkedbox.length === 0){
      setcheckedbox([...checkedbox,value]);
      console.log("checkedbox  at meeeeee",checkedbox);
    }

//pus checked input to checkedinputs array by and keep old values
setcheckedbox([...checkedbox,value])
    dispatch(carsfilterbyCheckbox(checkedbox))
    console.log("checkedinputs", checkedbox);

  }   if(! e.target.checked)  {

    const checkboxnew = checkedbox.filter((item) => item !== e.target.value); 

 
setcheckedbox(checkboxnew)

// if checkedbox.length === 0 then set checkedbox to []

// setcheckedbox(checkedbox?.length === 0 ? [] : checkedbox)
// console.log("splicefromarray", checkedbox);
    
    dispatch(carsfilterbyCheckbox(checkedbox))

  

  console.log("checkedinputs", checkedbox);

  

  }
}




  return (
    <div>
      <h1>categories page {cars?.length}</h1>

      {/* categoreis make map */}

      <div>
        {categories?.map((category) => (
          <div>
            <h1 >

              <div>
              <label forhtml='category'>
                {/* // name={category?._id}  */}

<input type="checkbox" name='category' onChange={handleCheckbox } value={category?._id}/>

              </label>

              </div>
       
              
              
              {category?.name}
              {/* <div  style={{ maginTop:"100px"}}>
              <span onClick={()=>handlecategoryId(category?._id)}>{category?._id}</span>
            
              </div> */}
           
            
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}
