

import axios from "axios";
import {fetch_categories,getcarsByCategoryId} from "./carSlice"
import { useDispatch,useSelector } from "react-redux";


// http://localhost:5000/api/category/get-all-category


const apiurl = "http://localhost:5000/api";

// fetch all categories and save to state in redux


export const fetch_categoriesApi = () => async (dispatch) => {
    
    const res = await axios.get(`${apiurl}/category/get-all-category`);
    console.log("categories", res.data);
    
    dispatch(fetch_categories(res.data));
    
    }



    //cars by category id

   // http://localhost:5000/api/car/search-car-by-category-id/626f9485e9f85a87334678fa


   export const carsBycategoryIdApi = (categoryId) => async (dispatch) => {

console.log("categoryId", categoryId);


try{
    const res = await axios.get(`${apiurl}/car/search-car-by-category-id/${categoryId}`);
    console.log("cars by category id", res.data);
    
   // dispatch(getcarsByCategoryId(res.data)); // all cars with category id fetched

} catch(err){

    console.log("error message", err);
}
    
    
    }

