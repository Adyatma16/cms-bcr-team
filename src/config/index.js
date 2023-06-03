import { useRoutes } from "react-router-dom";
import Layout from "../layout";
import { privaterouting, publicrouting } from "./router";

export const AppPublicRoute = (props) => {
  const routes = useRoutes(publicrouting(props));
  return routes;
};

export const AppPrivateRoute = (props) => {
  const routes = useRoutes(privaterouting(props));
  return routes;
};

export const AuthProvider = (props) => {
  const ACCESS_TOKEN = localStorage.getItem("ACCESS_TOKEN");
  const isLoggedIn = ACCESS_TOKEN ? true : false;
  return isLoggedIn ? <Layout {...props} /> : <AppPublicRoute />;
};
