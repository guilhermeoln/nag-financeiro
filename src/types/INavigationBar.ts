interface INavigationBar {
  id: number;
  name: string;
  path: string;
  iconActive: string;
  iconInactive: string;
  subItems?: {
    id: number;
    name: string;
    path: string;
  }[];
}

export default INavigationBar;
