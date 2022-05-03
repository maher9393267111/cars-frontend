import { createSlice } from "@reduxjs/toolkit";

export const carSlice = createSlice({
  name: "car",
  initialState: {
      allcars: [],
    carsByfilter: [],
    loading: false,
    error: null,
    categories :[],
  },
  reducers: {
    getallcars: (state, action) => {
      state.allcars = action.payload;
    },
    createcar: (state, action) => {
      state.allcars.unshift(action.payload);
    },
    deletecar: (state, action) => {
      state.allcars = state.allcars.filter((car) => car.id !== action.payload.id);
    },

    filterSearchByName: (state, action) => {

      state.carsByfilter = state.allcars.cars.filter((car) => {
        return car.name.toLowerCase().includes(action.payload.toLowerCase());
      });
    },

    
filterSearchPrice: (state, action) => {

      state.carsByfilter = state.allcars.cars.filter((car) => {
        return car.price.toLowerCase().includes(action.payload.toLowerCase());
      });

    

    }
  },
});

// Action creators are generated for each case reducer function
export const { creatcar, deleteUser, getUser,getallcars ,   filterSearchByName} = carSlice.actions;

export default carSlice.reducer;