import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SalePage from "./pages/SalePage";
import EntityPage from "./pages/EntityPage";
import ProductPage from "./pages/ProductPage";
import UserPage from "./pages/UserPage";
import PersonalPage from "./pages/PersonalPage";
import StockPage from "./pages/StockPage";
import AboutPage from "./pages/AboutPage";

const RouterApp = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/venda" element={<SalePage />} />
      <Route path="*" element={<h1>Not Found</h1>} />
      <Route path="/sale/:id" element={<SalePage />} />
      <Route path="/entidade" element={<EntityPage />} />
      <Route path="/produto" element={<ProductPage />} />
      <Route path="/login" element={<UserPage />} />
      <Route path="/user/:id" element={<PersonalPage />} />
      <Route path="/stock" element={<StockPage />} />
      <Route path="/sobre" element={<AboutPage />} />
    </Routes>
  );
};

export default RouterApp;
