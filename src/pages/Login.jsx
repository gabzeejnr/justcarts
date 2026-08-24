import { useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/axios";
import FormCard from "../components/Auth/FormCard";
import Toast from "../components/Auth/Toast";
import InputHolder from "../components/Auth/InputHolder";
import PasswordHolder from "../components/Auth/PasswordHolder";
import ThemeButton from "../components/ThemeButton";

export default function Login() {

    // ============================================================================================
    // STATES & VARIABLES =======================
    // ============================================================================================

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: ""
    });
    const [loading, setLoading] = useState(false);
    const [toast, setToast] = useState({
        type: "",
        text: ""
    });
    const registrationToken = localStorage.getItem("reg-token");
    const labelStyle = "block text-sm font-medium text-gray-700 mb-1";
    const passwordInput = "w-full pr-10 rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-[#0AAD0A] focus:ring-1 focus:ring-[#0AAD0A] tracking-[0.2em] font-semibold";

    // if (registrationToken) {
    //     setToast({
    //         type: "error",
    //         text: "Please finish verification before logging in."
    //     });
    //     return;
    // }


    // ============================================================================================
    // EFFECTS & FUNCTIONS ======================
    // ============================================================================================

    async function handleLogin(e) {
        if (registrationToken) {
            e.preventDefault();
            setToast({
                type: "error",
                text: "Please complete registration before logging in."
            })
            return;
        }

        e.preventDefault();
        setLoading(true);
        setToast({});

        try {
            const { data } = await api.post("/auth/login", form, {
                headers: {Authorization: `Bearer`}
            });
            setToast({
                type: "success",
                text: data.message
            });
        } catch (err) {
            const data = err.response?.data ?? { error: "Something went wrong" };
            console.error("Could not login:", err);
            setToast({
                type: "failure",
                text: data.error
            });
            setTimeout(() => {
                setToast({})
            }, 3000);
        } finally {
            setLoading(false);
            setForm({
                name: "",
                email: "",
                password: ""
            });
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
                <InputHolder id="name" label="Full Name" type="text" value={form.name} required
                    placeholder="Full Name" onChange={(e) => setForm(prev => ({ ...prev, name: e.target.value }))}
                />
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