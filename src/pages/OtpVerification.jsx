import { useState } from "react";
import Toast from "../components/Auth/Toast";
import api from "../api/axios";
import ThemeButton from "../components/ThemeButton";

export default function OtpVerification() {

    const [codeSent, setCodeSent] = useState(false)
    const [toast, setToast] = useState(null);
    const [otp, setOtp] = useState("");
    const [loading, setLoading] = useState(false);

    const email = localStorage.getItem("email");

    async function handleSendCode() {
        setLoading(true);
        setToast(null);

        try {
            await api.post("/auth/send_registration_code", { email })
            setCodeSent(true);
            setToast({
                type: "success",
                text: data.message || "Confirmation code sent successfully"
            })
        } catch (err) {
            console.error("Error sending OTP:", err);
            setToast({
                type: "error",
                text: err.response?.data?.error || "Couldn't send confirmation code."
            })
        } finally {
            setLoading(false)
        }
    }

    async function handleSubmit(e) {
        e.preventDefault();

        if (otp.length !== 6) {
            setToast({
                type: "failure",
                text: "Enter the 6-digit confirmation code"
            });
            return;
        }

        setLoading(true);
        setToast(null);

        try {

            const { data } = await api.post("/auth/otp_verification", { otp });
            console.log(data);

            setToast({
                type: "success",
                text: data.message || "Account verified successfully."
            })
        } catch (err) {
            console.error("Error posting OTP code", err);
            setToast({
                type: "failure",
                text: err.response?.data?.error || "Invalid or expired confirmation code."
            })
        } finally {
            setLoading(false)
        }

    }

    return (
        <>
            <div className="mb-3 mt-2">
                <h1 className="mb-2 font-semibold text-xl text-[#0AAD0A]">OTP VERIFICATION</h1>
            </div>
            <Toast toast={toast} />

            {!codeSent ? (
                <div className="space-y-5">
                    <div className="text-sm bg-gray-100 rounded-xl py-3 px-3">
                        We'll send a 6-digit confirmation code to{" "}
                        <strong>{email}</strong>
                    </div>
                    <ThemeButton type="button" onClick={handleSendCode} disabled={loading}
                        value="SEND CODE" loadingValue="SENDING..." />
                </div>
            ) : (
                < form className="space-y-5">
                    <div className="text-sm bg-green-100 rounded-xl py-2 px-2 mb-8">Enter the 6-digit confirmation code sent to {email}</div>
                    <input type="text" inputMode="numeric" id="otp" placeholder="000000" maxLength={6} value={otp}
                        className="border rounded-2xl py-3 w-full tracking-[1rem] text-center text-3xl font-semibold"
                        onChange={(e) => setOtp(e.target.value.replace(/\D/g))}
                    />
                    <button type="submit" disabled={loading} className={`border border-green-500 rounded-xl w-full py-3 bg-green-700 text-white font-medium text-lg
                    ${loading && "cursor-not-allowed"}`}>SEND CODE</button>
                </form>
            )}

        </>
    )
}