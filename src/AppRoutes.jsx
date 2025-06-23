import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainPage from './pages/MainPage';
import CardPage from './pages/CardPage';
import Login from './pages/Login';
import Register from './pages/Register';
import Exit from './pages/Exit';
import NotFound from './pages/NotFound';

function AppRoutes() {
  const [isAuth, setIsAuth] = useState(false);

  const handleLogin = () => setIsAuth(true);
  const handleLogout = () => setIsAuth(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/exit"
          element={isAuth ? <Exit onExit={handleLogout} /> : <Navigate to="/login" />}
        />
        <Route
          path="/"
          element={isAuth ? <MainPage /> : <Navigate to="/login" replace />} />
        <Route
          path="/card/:id"
          element={isAuth ? <CardPage /> : <Navigate to="/login" replace />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
