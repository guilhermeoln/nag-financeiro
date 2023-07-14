import { configureStore } from "@reduxjs/toolkit";
import entriesSlice from "./reducers/entries";
import exitsSlice from "./reducers/exits";
import userSlice from "./reducers/user";

const store = configureStore({
  reducer: {
    entries: entriesSlice,
    exits: exitsSlice,
    user: userSlice,
  },
});

export default store;
