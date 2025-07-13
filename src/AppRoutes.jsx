import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import MainPage from "./pages/MainPage";
import CardPage from "./pages/CardPage";
import NewCardPage from "./pages/NewCardPage";
import ExitPage from "./pages/ExitPage";
import NotFound from "./pages/NotFound";

import Header from "./components/Header/Header";
import Popups from "./components/Popups/Popups";

export default function AppRoutes() {
  const [isAuth, setIsAuth] = useState(true);

  const PrivateRoute = ({ children }) => {
    return isAuth ? children : <Navigate to="/login" />;
  };

  return (
    <>
      <Popups />
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <MainPage />
            </PrivateRoute>
          }
        />

        <Route
          path="/card/:id"
          element={
            <PrivateRoute>
              <CardPage />
            </PrivateRoute>
          }
        />

        <Route
          path="/new"
          element={
            <PrivateRoute>
              <NewCardPage />
            </PrivateRoute>
          }
        />

        <Route
          path="/exit"
          element={
            <PrivateRoute>
              <ExitPage />
            </PrivateRoute>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
