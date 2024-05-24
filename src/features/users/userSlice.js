import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: "",
  isAuthenticated: false,
  fullname: "",
  username: "",
  jwtToken: "",
  expiresIn: "",
  roleId: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setInfo(state, action) {
      return action.payload;
    },
    clearInfo(state, action) {
      return {
        userId: "",
        isAuthenticated: false,
        fullname: "",
        username: "",
        jwtToken: "",
        expiresIn: "",
        roleId: "",
      };
    },
  },
});

export const { setInfo, clearInfo } = userSlice.actions;

export default userSlice.reducer;
