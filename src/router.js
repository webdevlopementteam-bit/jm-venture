
import * as ReactRouterDOM from "react-router-dom";

const mod = ReactRouterDOM.BrowserRouter ? ReactRouterDOM : ReactRouterDOM.default;

export const {
  BrowserRouter,
  StaticRouter,
  Routes,
  Route,
  Link,
  useLocation,
  useNavigate,
} = mod;
