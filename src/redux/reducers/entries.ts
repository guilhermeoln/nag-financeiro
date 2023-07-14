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
  reducers: {
    addEntries: (state, { payload }) => {
      const day = payload.date.getDate();
      const month = payload.date.getMonth() + 1;
      const year = payload.date.getFullYear();

      return [
        ...state,
        {
          ...payload,
          value: Number(payload.value),
          date: `${day.toString().length > 1 ? day : `0${day}`}/${
            month.toString().length > 1 ? month : `0${month}`
          }/${year}`,
        },
      ];
    },
  },
});

export const { addEntries } = entriesSlice.actions;
export default entriesSlice.reducer;
