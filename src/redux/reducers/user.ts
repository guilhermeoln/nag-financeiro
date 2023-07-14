import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, { payload }) => {
      return payload;
    },
    logoutUser: (state) => {
      return (state = "");
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
