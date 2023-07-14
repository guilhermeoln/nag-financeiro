import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

type Props = {
  children: JSX.Element;
};

type State = {
  user: string;
};

export default function PrivateRoutes({ children }: Props) {
  const user = useSelector((state: State) => state.user);

  return user ? children : <Navigate to="/" />;
}
