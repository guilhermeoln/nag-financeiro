interface INavigationBar {
  id: number;
  name: string;
  icon: string;
  path: string;
  subItems?: {
    id: number;
    name: string;
    icon: string;
    path: string;
  }[];
}

export default INavigationBar;
