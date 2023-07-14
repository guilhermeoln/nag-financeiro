import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, { payload }) => {
      return payload;
    },
  },
});

export const { loginUser } = userSlice.actions;

export default userSlice.reducer;
