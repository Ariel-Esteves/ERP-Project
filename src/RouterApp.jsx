import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SalePage from "./pages/SalePage";
import EntityPage from "./pages/EntityPage";
import ProductPage from "./pages/ProductPage";
import PersonalPage from "./pages/PersonalPage";
import StockPage from "./pages/StockPage";
import AboutPage from "./pages/AboutPage";
import FunctionalityPage from "./pages/FunctionalityPage";
import ProtectedRoute from "./hooks/ProtectedRoute";
import RegisterUser from "./pages/RegisterUser";
import LoginUser from "./pages/LoginUser";

const RouterApp = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sobre" element={<AboutPage />} />
      <Route path="/login" element={<LoginUser />} />
      <Route path="signup" element={<RegisterUser />} />
      <Route path="/funcionalidade" element={<FunctionalityPage />} />
      <Route
        path="/venda"
        element={<ProtectedRoute element={<SalePage />} />}
      />
      <Route
        path="*"
        element={<ProtectedRoute element={<h1>Not Found</h1>} />}
      />
      <Route
        path="/sale/:id"
        element={<ProtectedRoute element={<SalePage />} />}
      />
      <Route
        path="/entidade"
        element={<ProtectedRoute element={<EntityPage />} />}
      />
      <Route
        path="/produto"
        element={<ProtectedRoute element={<ProductPage />} />}
      />
      <Route
        path="/user/:id"
        element={<ProtectedRoute element={<PersonalPage />} />}
      />
      <Route
        path="/stock"
        element={<ProtectedRoute element={<StockPage />} />}
      />
    </Routes>
  );
};

export default RouterApp;
