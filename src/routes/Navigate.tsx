import { NavLink, BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import logo from "../logo.svg";
import { routes } from "./routes";
import { Suspense } from "react";

export default function Navigate() {
  return (
    <Router>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="logo" />
          <ul>

            {routes.map(route => (
              <li key={route.path}>
                <NavLink to={route.path} activeClassName="nav-active" exact>
                  {route.name}
                </NavLink>
              </li>
            ))}

          </ul>
        </nav>

        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            {routes.map(route => (
              <Route key={route.path} path={route.path}>
                {<route.Component />}
              </Route>
            ))}

            <Redirect to={routes[0].path} />
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}
