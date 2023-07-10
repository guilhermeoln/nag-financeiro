import INavigationBar from "../types/INavigationBar";

const navigationBar: INavigationBar[] = [
  { id: 1, name: "Início", icon: "/inicio", path: "/inicio" },
  {
    id: 2,
    name: "Despesas",
    icon: "/despesas",
    path: "/despesas",
    subItems: [
      {
        id: 1,
        name: "Entradas",
        icon: "/despesas",
        path: "/despesas/entradas",
      },
      { id: 2, name: "Saídas", icon: "/despesas", path: "/despesas/saidas" },
      {
        id: 3,
        name: "Criar entrada",
        icon: "/despesas",
        path: "/despesas/criar-entrada",
      },
      {
        id: 4,
        name: "Criar saída",
        icon: "/despesas",
        path: "/despesas/criar-saida",
      },
    ],
  },
];

export default navigationBar;
