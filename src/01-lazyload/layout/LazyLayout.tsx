import { NavLink, useRouteMatch, Route, Switch, Redirect } from "react-router-dom";
import { LazyPage1, LazyPage2, LazyPage3 } from "../pages";

export default function LazyLayout() {
    const { params, path,url } = useRouteMatch()
  return (
    <>
        <h1>Lazy Layout - MAin</h1>

        <div>
            <ul>
                <li>
                    <NavLink to={`${url}/lazy-1`}>Lazy 1</NavLink>
                </li>
                <li>
                    <NavLink to={`${url}/lazy-2`}>Lazy 2</NavLink>
                </li>
                <li>
                    <NavLink to={`${url}/lazy-3`}>Lazy 3</NavLink>
                </li>
            </ul>
        </div>


            <Switch>
                <Route path={`${url}/lazy-1`}>
                    <LazyPage1 />
                </Route>
                <Route path={`${url}/lazy-2`}>
                    <LazyPage2 />
                </Route>
                <Route path={`${url}/lazy-3`}>
                    <LazyPage3 />
                </Route>

                <Redirect to={'lazy-1'}/> 
            </Switch>

    </>
  )
}