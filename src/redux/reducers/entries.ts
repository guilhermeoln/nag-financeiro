import { createSlice } from "@reduxjs/toolkit";
import IEntries from "../../types/IExpenses";

const initialState: IEntries[] = [
  {
    id: 1,
    issuer: "José Guilherme",
    status: "Pendente",
    date: "12/06/2023",
    type: "Pix",
    bank: "Santander",
    value: 850,
  },
  {
    id: 2,
    issuer: "José Guilherme",
    status: "Confirmado",
    type: "Pix",
    bank: "Bradesco",
    date: "02/06/2023",
    value: 920,
  },
  {
    id: 3,
    issuer: "Nalbert Cezar",
    status: "Pendente",
    type: "Boleto",
    bank: "Banco do Brasil",
    date: "25/06/2023",
    value: 1200,
  },
];

const entriesSlice = createSlice({
  name: "entries",
  initialState,
  reducers: {},
});

export default entriesSlice.reducer;
