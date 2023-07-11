import { createSlice } from "@reduxjs/toolkit";
import IExpenses from "../../types/IExpenses";

const initialState: IExpenses[] = [
  {
    id: 1,
    issuer: "José Guilherme",
    status: "Confirmado",
    type: "Pix",
    bank: "Banco do Brasil",
    date: "12/06/2023",
    value: 850,
  },
];

const exitsSlice = createSlice({
  name: "exits",
  initialState,
  reducers: {},
});

export default exitsSlice.reducer;
