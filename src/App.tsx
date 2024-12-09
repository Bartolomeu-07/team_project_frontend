import { useState } from 'react';
import { Link, NavLink, Route, Routes } from 'react-router-dom';

import './styles.scss';
import { HomePage } from './pages/HomePage/HomePage';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { RegistrationPage } from './pages/RegistrationPage/RegistrationPage';

function App() {
  const [user, setUser] = useState(false);

  return (
    <>
      <nav className="nav">
        <div className="nav__links">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'nav__item nav__item--active' : 'nav__item'
            }
          >
            Home
          </NavLink>
        </div>

        <div className="nav__data">
          <div className="nav__data-button">
            {user ? (
              <button className="nav__logout" onClick={() => setUser(false)}>
                Log out
              </button>
            ) : (
              <>
                <Link to="/register" className="nav__data-links">
                  Sign up
                </Link>

                <Link to="/login" className="nav__data-links">
                  Log in
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
