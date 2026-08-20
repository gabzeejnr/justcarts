import { Route, Routes } from "react-router-dom";
import Registration from "../pages/Registration";
import Login from "../pages/Login";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import ProductPage from "../pages/ProductPage";
import Categories from "../pages/Categories";
import Category from "../pages/Category";

export default function RoutePage() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="products" element={<Home />} />
                <Route path="products/:id" element={<ProductPage />} />
                <Route path="categories" element={<Categories />} />
                <Route path="categories/:category" element={<Category />} />
            </Route>
        </Routes>
    )
}