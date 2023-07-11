interface IExpenses {
  id: number;
  issuer: string;
  status: string;
  date: string;
  value: number;
  type: string;
  bank: string;
}

export default IExpenses;
