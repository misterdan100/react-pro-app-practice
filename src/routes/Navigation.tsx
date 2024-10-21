import {
  Routes,
  Route,
  NavLink,
  BrowserRouter
} from 'react-router-dom';
  
  import logo from '../logo.svg';
import RegisterPage from '../03-forms/pages/RegisterPage';
import { FormikBasicPage } from '../03-forms/pages/FormikBasicPage';
import { FormikYupPage } from '../03-forms/pages/FormikYupPage';
// import ShoppingPage from '../02-component-patterns/pages/ShoppingPage';
  
  export const Navigation = () => {
    return (
      <BrowserRouter>
        <div className="main-layout">
          <nav>
              <img src={ logo } alt="React Logo" />
            <ul>
              <li>
                <NavLink to="/formik-yup" className={({isActive}) => (`${isActive ? 'nav-active' : ''}`)}>Formik Yup</NavLink>
              </li>
              <li>
                <NavLink to="/formik-basic" className={({isActive}) => (`${isActive ? 'nav-active' : ''}`)}>Formik Basic</NavLink>
              </li>
              <li>
                <NavLink to="/users" className={({isActive}) => (`${isActive ? 'nav-active' : ''}`)} >Users</NavLink>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/formik-yup" element={<FormikYupPage />} />
            <Route path="/formik-basic" element={<FormikBasicPage />} />
            <Route path="/register" element={<RegisterPage />}/>
            <Route path="/" element={<RegisterPage />}/>
          </Routes>
        </div>
      </BrowserRouter>
    );
  }