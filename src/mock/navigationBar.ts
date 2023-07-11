import INavigationBar from "../types/INavigationBar";
import iconCashNavbar from "../assets/iconCashNavbar.png";
import iconHomeNavbarActive from "../assets/iconHomeNavbarActive.png";
import iconHomeNavbarInactive from "../assets/iconHomeNavbarInactive.png";
import iconCashNavbarActive from "../assets/iconCashNavbarActive.png";

const navigationBar: INavigationBar[] = [
  {
    id: 1,
    name: "Início",
    iconActive: `${iconHomeNavbarActive}`,
    iconInactive: `${iconHomeNavbarInactive}`,
    path: "/inicio",
  },
  {
    id: 2,
    name: "Despesas",
    iconActive: `${iconCashNavbarActive}`,
    iconInactive: `${iconCashNavbar}`,
    path: "/despesas",
    subItems: [
      {
        id: 1,
        name: "Entradas",
        path: "/despesas/entradas",
      },
      { id: 2, name: "Saídas", path: "/despesas/saidas" },
    ],
  },
];

export default navigationBar;
