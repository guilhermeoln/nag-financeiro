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
  reducers: {
    addExit: (state, { payload }) => {
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

export const { addExit } = exitsSlice.actions;

export default exitsSlice.reducer;
