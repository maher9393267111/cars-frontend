import React from "react";
import { useState, useRef, useEffect } from "react";
import { fetch_categoriesApi, carsBycategoryIdApi } from "../redux/fetchapi";
import { useSelector, useDispatch } from "react-redux";
import { getcarsByCategoryId } from "../redux/carSlice";
import axios from "axios";

export default function Categories() {
  const apiurl = "http://localhost:5000/api";

  const dispatch = useDispatch();

  const { categories } = useSelector((state) => state.car);
  console.log("Categories from redux fetch", categories);

  useEffect(() => {
    dispatch(fetch_categoriesApi());
    console.log("helloc categoreis");
  }, []);

  const handlecategoryId = async (categoryId) => {
    console.log("categoryId", categoryId);
    
    

    dispatch(carsBycategoryIdApi(categoryId))

    console.log("cat clickeed");
  };

  return (
    <div>
      <h1>categories page</h1>

      {/* categoreis make map */}

      <div>
        {categories.map((category) => (
          <div>
            <h1 >{category.name}
            <span onClick={()=>handlecategoryId(category._id)}>{category._id}</span>
            
            
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}
