import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/users/userSlice";
import hospitalReducer from "./features/hospital/hospitalSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    hospital: hospitalReducer,
  },
});

export default store;
