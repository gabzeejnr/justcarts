import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import api from "../../api/axios";
import { useUser } from "../../context/UserContext";
import Loader from "../../assets/SVG/follow-square-circles.svg";

export default function ProtectedRoutes() {

    const navigate = useNavigate();
    const { setUser } = useUser();
    const [checkingAuth, setCheckingAuth] = useState(true);
    const [accessToken, setAccessToken] = useState(null);

    useEffect(() => {
        getAuthenticated();
    }, [navigate])

    async function getAuthenticated() {
        try {
            const { data } = await api.get("/auth/me");
            setUser(data.currentUser);
        } catch {
            navigate("/auth/login", { replace: true });
        } finally {
            setCheckingAuth(false);
        }
    }

    if (checkingAuth) return <div className="h-screen grid place-items-center">
        <img src={Loader} alt="Loading..." width="100" />
    </div>

    return <Outlet />
}