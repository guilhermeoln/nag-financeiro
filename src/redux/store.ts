import { configureStore } from "@reduxjs/toolkit";
import entriesSlice from "./reducers/entries";

const store = configureStore({
  reducer: {
    entries: entriesSlice,
  },
});

export default store;
