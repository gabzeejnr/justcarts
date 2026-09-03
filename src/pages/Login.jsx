import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/axios";
import Toast from "../components/Auth/Toast";
import InputHolder from "../components/Auth/InputHolder";
import PasswordHolder from "../components/Auth/PasswordHolder";
import ThemeButton from "../components/ThemeButton";

export default function Login() {

    // ============================================================================================
    // STATES & VARIABLES =======================
    // ============================================================================================

    const navigate = useNavigate();
    const [form, setForm] = useState({
        email: "",
        password: ""
    });
    const [loading, setLoading] = useState(false);
    const [toast, setToast] = useState({
        type: "",
        text: ""
    });
    const labelStyle = "block text-sm font-medium text-gray-700 mb-1";
    const passwordInput = "w-full pr-10 rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-[#0AAD0A] focus:ring-1 focus:ring-[#0AAD0A] tracking-[0.2em] font-semibold";


    // ============================================================================================
    // EFFECTS & FUNCTIONS ======================
    // ============================================================================================

    async function handleLogin(e) {

        e.preventDefault();
        setLoading(true);
        setToast({});

        try {
            const { data } = await api.post("/auth/login", form);
            setToast({
                type: "success",
                text: data.message
            });
            navigate("/home");
        } catch (err) {
            const data = err.response?.data ?? { error: "Something went wrong" };
            console.error("Could not login:", err);
            setLoading(false);
            if (data.code === "ACCOUNT_UNVERIFIED") {
                localStorage.setItem("email", data.email)
                setTimeout(() => {
                    navigate("/auth/otp_verification")
                }, 1500);
            }
            setToast({
                type: "failure",
                text: data.error
            });
            setTimeout(() => {
                setToast({})
            }, 3000);
        }
    }


    return (
        <section>
            <div className="mb-5">
                <h2 className="mb-1 font-semibold text-xl text-[#0AAD0A]">Login</h2>
                <h3 className="text-xs font-extralight tracking-wide text-[#0AAD0A]">Login to your JustCarts account</h3>
            </div>

            {toast?.type && toast?.text && (
                <div className="mb-3">
                    <Toast toast={toast} />
                </div>
            )}

            <form className="space-y-5" onSubmit={handleLogin}>
                <InputHolder id="email" label="Email" type="email" value={form.email} required
                    placeholder="someone@example.com" onChange={(e) => setForm(prev => ({ ...prev, email: e.target.value.trim() }))}
                />
                <PasswordHolder id="password" label="Password" value={form.password} labelStyle={labelStyle}
                    className={passwordInput} onChange={(e) => setForm(prev => ({ ...prev, password: e.target.value }))}
                />
                <ThemeButton type="submit" disabled={loading} value="LOGIN" loadingValue="LOGGING IN" />
            </form>
            <div className="mt-3 text-[14px]">Don't have an account? {""}
                <Link to="/auth/register" className="text-[#0AAD0A]">Register</Link>
            </div>
        </section>
    )
}