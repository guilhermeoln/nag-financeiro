import { configureStore } from "@reduxjs/toolkit";
import entriesSlice from "./reducers/entries";
import exitsSlice from "./reducers/exits";

const store = configureStore({
  reducer: {
    entries: entriesSlice,
    exits: exitsSlice,
  },
});

export default store;
