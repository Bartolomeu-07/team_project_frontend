import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import './styles.scss';
import { MatchesPage } from './pages/MatchesPage/MatchesPage';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { RegistrationPage } from './pages/RegistrationPage/RegistrationPage';
import { Layout } from './components/Layout/Layout';
import { CurrentMatch } from './pages/MatchDetails/CurrentMatch';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  // Ustal stan logowania na podstawie np. tokena w localStorage lub cookies
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <Routes>
      <Route
        path="/login"
        element={<LoginPage setIsAuthenticated={setIsAuthenticated} />}
      />
      <Route path="/register" element={<RegistrationPage />} />
      <Route path="/" element={<Layout />}>
        {/* PrivateRoute zabezpiecza dostęp do tras wymagających zalogowania */}
        <Route element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
          <Route index element={<Navigate to="/matches" />} />
          <Route path="matches" element={<MatchesPage />} />
          <Route path="current_match" element={<CurrentMatch />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
