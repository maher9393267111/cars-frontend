import { createSlice } from "@reduxjs/toolkit";

export const carSlice = createSlice({
  name: "car",
  initialState: {
    allcars: [],
    carsByfilter: [],
    loading: false,
    error: null,
    categories: [],
  },
  reducers: {
    getallcars: (state, action) => {
      state.allcars = action.payload;
    },
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
  },
});

// Action creators are generated for each case reducer function
export const {
  creatcar,
  deleteUser,
  getUser,
  getallcars,
  filterSearchEvery,

  filterSearchByName,
} = carSlice.actions;

export default carSlice.reducer;
