import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/axios";
import FormCard from "../components/Auth/FormCard";
import PasswordHolder from "../components/Auth/PasswordHolder";
import InputHolder from "../components/Auth/InputHolder";
import Toast from "../components/Auth/Toast";
import ThemeButton from "../components/ThemeButton";


export default function Registration() {

    // ============================================================================================
    // STATES & VARIABLES =======================
    // ============================================================================================

    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [loading, setLoading] = useState(false);
    const [toast, setToast] = useState({});
    const labelStyle = "block text-sm font-medium text-gray-700 mb-1";
    const inputStyle = "w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-black focus:ring-1 focus:ring-black";
    const passwordInput = "w-full pr-10 rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-[#0AAD0A] focus:ring-1 focus:ring-[#0AAD0A] tracking-[0.2em] font-semibold";
    const requirements = [
        {
            label: "At least 8 characters",
            valid: form.password.length >= 8
        },
        {
            label: "One uppercase letter",
            valid: /[A-Z]/.test(form.password)
        },
        {
            label: "One lowercase letter",
            valid: /[a-z]/.test(form.password)
        },
        {
            label: "One number",
            valid: /\d/.test(form.password)
        },
        {
            label: "One special character",
            valid: /[^A-Za-z0-9]/.test(form.password)
        }
    ];

    // ============================================================================================
    // EFFECTS & FUNCTIONS ======================
    // ============================================================================================

    async function handleSubmit(e) {
        e.preventDefault();
        setToast({});
        setLoading(true);
        try {
            const { data } = await api.post("/auth/register", form);
            localStorage.setItem("email", data.email);

            setToast({
                type: "success",
                text: data.message
            });

            setTimeout(() => {
                navigate("/auth/otp_verification")
            }, 3000);

        } catch (err) {
            console.error(err)
            const data = err.response?.data ?? { error: "Something went wrong" };
            console.error("Error with request. Try again");
            setToast({
                type: "failure",
                text: data.error
            });
            setTimeout(() => {
                setToast({})
            }, 5000);
        } finally {
            setLoading(false);
        };
    };

    return (
        <section className="pb-5">
            <div className="mb-5">
                <h2 className="mb-1 font-semibold text-xl text-[#0AAD0A]">Create Account</h2>
                <h3 className="text-xs font-extralight tracking-wide text-[#0AAD0A]">Create your JustCarts account</h3>
            </div>

            {toast?.type && toast?.text && (
                <div className="mb-3">
                    <Toast toast={toast} />
                </div>
            )}

            <form className="space-y-5" onSubmit={handleSubmit}>
                <InputHolder id="name" label="Full Name" type="text" value={form.name} placeholder="Your full name" required
                    onChange={(e) => setForm(prev => ({ ...prev, name: e.target.value.trim() }))}
                />
                <InputHolder id="email" label="Email" type="email" value={form.email} placeholder="johndoe@example.com" required
                    onChange={(e) => setForm(prev => ({ ...prev, email: e.target.value.trim() }))}
                />
                <PasswordHolder id="password" label="Password" labelStyle={labelStyle} value={form.password} required
                    className={passwordInput} onChange={(e) => setForm(prev => ({ ...prev, password: e.target.value }))}
                />
                <div className="text-[10px]">
                    {form.password.length > 0 && !requirements.every(r => r.valid) && (
                        requirements.map(r => (
                            <p key={r.label} className={r.valid ? "text-green-500" : "text-red-500"}>
                                <span>{r.valid ? "✓" : "○"}</span>
                                {" "}
                                {r.label}
                            </p>
                        ))
                    )}
                </div>
                <PasswordHolder id="confirmPassword" label="Confirm Password" labelStyle={labelStyle} value={form.confirmPassword} required
                    className={passwordInput} onChange={(e) => setForm(prev => ({ ...prev, confirmPassword: e.target.value }))}
                />
                {form.password !== form.confirmPassword && form.confirmPassword.length !== 0 && form.password.length >= 8 && (
                    <div className="-mt-5 w-full text-pretty text-sm text-red-500">Passwords do not match</div>
                )}
                <div className="flex gap-2">
                    <input type="checkbox" id="TC" required />
                    <label htmlFor="TC" className="block text-sm font-medium text-gray-700">I agree to the <Link className="decoration-dashed">Terms & Privacy Policy</Link>
                    </label>
                </div>
                <ThemeButton type="submit" disabled={loading} value="CREATE ACCOUNT" />
            </form>
            <div className="mt-3 text-[14px]">Already have an account? {""}
                <Link to="/auth/login" className="text-[#0AAD0A]">Login</Link>
            </div>
        </section>
    )
}