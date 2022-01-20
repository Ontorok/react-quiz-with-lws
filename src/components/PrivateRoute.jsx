import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function PrivateRoute(props) {
  const { children, component: Component, ...rest } = props;
  const { authUser } = useAuth();

  return authUser ? (
    <Route {...rest}>{(props) => <Component {...props} />}</Route>
  ) : (
    <Redirect to="login" />
  );
}
