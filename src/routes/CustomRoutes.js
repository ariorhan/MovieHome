import React from "react";
import { Route, Routes } from "react-router-dom";
import DetailPage from "../components/DetailPage";
import LoginForm from "../components/LoginForm";
import Movies from "../components/Movies";
import PrivateRoute from "./PrivateRoute";

const CustomRoutes = () => {
  return (
    <Routes>
      <Route
        path="/movie/:movieId"
        element={
          <PrivateRoute>
            <DetailPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/movies"
        element={
          <PrivateRoute>
            <Movies />
          </PrivateRoute>
        }
      />
      <Route path="/" element={<LoginForm />} />
    </Routes>
  );
};

export default CustomRoutes;