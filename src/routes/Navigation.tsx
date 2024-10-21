import {
  Routes,
  Route,
  NavLink,
  BrowserRouter
} from 'react-router-dom';
  
  import logo from '../logo.svg';
import RegisterPage from '../03-forms/RegisterPage';
  
  export const Navigation = () => {
    return (
      <BrowserRouter>
        <div className="main-layout">
          <nav>
              <img src={ logo } alt="React Logo" />
            <ul>
              <li>
                <NavLink to="/" className={({isActive}) => (`${isActive ? 'nav-active' : ''}`)}>Shopping</NavLink>
              </li>
              <li>
                <NavLink to="/about" className={({isActive}) => (`${isActive ? 'nav-active' : ''}`)}>About</NavLink>
              </li>
              <li>
                <NavLink to="/users" className={({isActive}) => (`${isActive ? 'nav-active' : ''}`)} >Users</NavLink>
              </li>
              <li>
                <NavLink to="/forms" className={({isActive}) => (`${isActive ? 'nav-active' : ''}`)} >Forms</NavLink>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<h1>Mister you can, just do it</h1>}/>
            <Route path="/about"  />
            <Route path="/users" />
            <Route path="/forms" element={<RegisterPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }