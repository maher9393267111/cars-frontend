import { createSlice } from "@reduxjs/toolkit";

export const carSlice = createSlice({
  name: "car",
  initialState: {
    allcars: [],
    carsByfilter: [],
    loading: false,
    error: null,
    categories: [],
    min_price: 0,
    max_price: 0,
    singlecar : {},
    singlecategory:{}
  },
  reducers: {
    fetch_categories: (state, action) => {
      state.categories = action.payload;
    },

    fetch_categoryById: (state, action) => {

      state.singlecategory = action.payload;
    },

    getallcars: (state, action) => {
      state.allcars = action.payload;
    },

getcarsByCategoryId: (state, action) => {

  state.allcars = action.payload;

} ,


fetch_carById: (state, action) => {

  state.singlecar = action.payload;

} ,



    createcar: (state, action) => {
      state.allcars.unshift(action.payload);
    },
    deletecar: (state, action) => {
      state.allcars = state.allcars.filter(
        (car) => car.id !== action.payload.id
      );
    },

    filterSearchByName: (state, action) => {
      state.carsByfilter = state.allcars.cars.filter((car) => {
        return car.name.toLowerCase().includes(action.payload.toLowerCase());
      });
    },

    filterSearchEvery: (state, action) => {
      action.payload = action.payload;
      console.log("action.payload", action.payload);

      if (action.payload.name !== "" && action.payload.price !== "") {
        state.carsByfilter = state.allcars?.cars.filter((car) => {
          console.log(
            "have name and price payload",
            action.payload.name,
            action.payload.price
          );

          return (
            car.name === action.payload.name &&
            car.price === action.payload.price
          );
        });
      } else if (action.payload.name !== "") {
        console.log("name", action.payload.name);
        state.carsByfilter = state.allcars?.cars.filter((car) => {
          return car.name
            .toLowerCase()
            .includes(action.payload.name.toLowerCase());
        });
      } else if (action.payload.price !== 0) {
        console.log("price", action.payload.price);

        state.carsByfilter = state.allcars?.cars.filter((car) => {
          return car.category
            .toLowerCase()
            .includes(action.payload.price.toLowerCase());
        });

        // if price not empty and name empty  filter by togehter
      }
    },

    // shoe only  5 car at first and calculate the rest of car numbers and show more when clicke and payload change

    showcars: (state, action) => {
      //calculate the rest of car numbers and show more when clicke and payload change

      const rest = state.allcars.cars.length - 5;

      if (action.payload === "showmore") {
        state.allcars.cars.length > 5
          ? (state.allcars.cars.length = 5)
          : (state.allcars.cars.length = rest);
      } else if (action.payload === "showless") {
        state.allcars.cars.length > 5
          ? (state.allcars.cars.length = rest)
          : (state.allcars.cars.length = 5);
      }
    },

    maxPrice: (state, action) => {
      state.max_price = action.payload;
    },

    minPrice: (state, action) => {
      state.min_price = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  creatcar,
  deleteUser,
  getUser,
  getallcars,
  filterSearchEvery,
  fetch_categories,
  minPrice,
  maxPrice,
  fetch_categoryById,
  getcarsByCategoryId,
  fetch_carById,
  


  filterSearchByName,
} = carSlice.actions;

export default carSlice.reducer;


export const allCategories = (state) => state.car.categories;
