import { configureStore } from "@reduxjs/toolkit";
import kitchenReducer from "./reducers/kitchenReducer";

export const store = configureStore({
  reducer: {
    kitchen: kitchenReducer,
  },
});
