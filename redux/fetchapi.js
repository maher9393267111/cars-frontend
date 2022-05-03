

import axios from "axios";
import {fetch_categories} from "./carSlice"
import { useDispatch } from "react-redux";


// http://localhost:5000/api/category/get-all-category


const apiurl = "http://localhost:5000/api";

// fetch all categories and save to state in redux


export const fetch_categoriesApi = () => async (dispatch) => {
    
    const res = await axios.get(`${apiurl}/category/get-all-category`);
    console.log("categories", res.data);
    
    dispatch(fetch_categories(res.data));
    
    }