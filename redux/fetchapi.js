

import axios from "axios";
import {fetch_categories,getcarsByCategoryId,fetch_carById} from "./carSlice"
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
    
    dispatch(getcarsByCategoryId(res.data)); // all cars with category id fetched

} catch(err){

    console.log("error message", err);
}
    
    
    }



    // fetch car by id


    // http://localhost:5000/api/car/get-car-by-id/5f0b8f9b8b8f9b8b8b8b8b8b


    export const fetch_cargoryByIdApi = (carId) => async (dispatch) => {

        console.log("carId", carId);

        try{
            const res = await axios.get(`${apiurl}/car/find-car-by-id/${carId}`);
            console.log("car by id", res.data);
            
            dispatch(fetch_carById(res.data)); // all cars with category id fetched
    
        } catch(err){
    
            console.log("error message", err);
        }
            
            
            }

