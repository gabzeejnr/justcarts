import { Route, Routes } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import Registration from "../pages/Registration";
import OtpVerification from "../pages/OtpVerification";
import ProtectedRoutes from "../components/Auth/ProtectedRoutes";
import Login from "../pages/Login";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import ProductPage from "../pages/ProductPage";
import Categories from "../pages/Categories";
import Category from "../pages/Category";
import Cart from "../pages/Cart";

export default function RoutePage() {
    return (
        <Routes>
            <Route path="/auth/" element={<AuthLayout />}>
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Registration />} />
                <Route path="otp_verification" element={<OtpVerification />} />
            </Route>
            <Route element={<ProtectedRoutes />}>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="home" element={<Home />} />
                    <Route path="products/:id" element={<ProductPage />} />
                    <Route path="categories" element={<Categories />} />
                    <Route path="categories/:category" element={<Category />} />
                    <Route path="cart" element={<Cart />} />
                </Route>
            </Route>
        </Routes>
    )
}