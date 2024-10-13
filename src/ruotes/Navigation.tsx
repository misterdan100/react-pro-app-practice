import {
  BrowserRouter,
  Navigate,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";
import logo from "../logo.svg";
import { routes } from "./routes";
import { Suspense } from "react";

export default function Navigation() {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="logo" />

          <ul>
            {routes.map((route) => (
              <li key={route.to}>
                <NavLink
                  to={route.to}
                  className={({ isActive }) => (isActive ? "nav-active" : "")}
                >
                  {route.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <Suspense fallback={<span>Loading...</span>}>
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.to}
                path={route.path}
                element={<route.Component />}
              />
            ))}
            <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}