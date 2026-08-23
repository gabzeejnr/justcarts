// import React, { useState, useEffect, useRef } from "react";
// import { Eye, EyeOff, ArrowRight, Check, AlertCircle } from "lucide-react";

// /**
//  * Access Console — Login / Register
//  * Split-panel auth screen. Left: terminal-style status log that reacts
//  * to what the person is doing. Right: the actual form.
//  */

// const BOOT_LINES = [
//   "AUTH.HANDSHAKE ..... ready",
//   "SESSION.STORE ...... online",
//   "RATE_LIMIT ......... armed",
// ];

// export default function AuthPage() {
//   const [mode, setMode] = useState("login"); // "login" | "register"

//   return (
//     <div className="min-h-screen w-full flex bg-[#0F111A]">
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Inter:wght@400;500;600;700&display=swap');
//         .font-mono-ui { font-family: 'JetBrains Mono', ui-monospace, monospace; }
//         .font-sans-ui { font-family: 'Inter', ui-sans-serif, system-ui; }
//         @keyframes blink { 0%, 49% { opacity: 1; } 50%, 100% { opacity: 0; } }
//         .cursor-blink { animation: blink 1s step-end infinite; }
//         @keyframes rise {
//           from { opacity: 0; transform: translateY(6px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         .rise { animation: rise 0.35s ease-out both; }
//       `}</style>

//       <BrandPanel mode={mode} />
//       <FormPanel mode={mode} setMode={setMode} />
//     </div>
//   );
// }

// /* ---------------------------------- */
// /* Left panel: brand + terminal log   */
// /* ---------------------------------- */

// function BrandPanel({ mode }) {
//   const [lines, setLines] = useState(BOOT_LINES);
//   const logRef = useRef(null);

//   // Expose a way for the form side to push log lines via a custom event
//   useEffect(() => {
//     function onLog(e) {
//       setLines((prev) => [...prev.slice(-7), e.detail]);
//     }
//     window.addEventListener("access-log", onLog);
//     return () => window.removeEventListener("access-log", onLog);
//   }, []);

//   useEffect(() => {
//     if (logRef.current) logRef.current.scrollTop = logRef.current.scrollHeight;
//   }, [lines]);

//   return (
//     <div className="hidden lg:flex lg:w-[42%] relative flex-col justify-between px-12 py-14 bg-[#0F111A] border-r border-[#20232F] overflow-hidden">
//       {/* faint grid texture */}
//       <div
//         className="absolute inset-0 opacity-[0.05] pointer-events-none"
//         style={{
//           backgroundImage:
//             "linear-gradient(#5EEAD4 1px, transparent 1px), linear-gradient(90deg, #5EEAD4 1px, transparent 1px)",
//           backgroundSize: "42px 42px",
//         }}
//       />

//       <div className="relative z-10">
//         <div className="flex items-center gap-2.5 mb-16">
//           <div className="w-7 h-7 rounded-md bg-gradient-to-br from-[#5EEAD4] to-[#7C6FF0] flex items-center justify-center">
//             <div className="w-2 h-2 rounded-sm bg-[#0F111A]" />
//           </div>
//           <span className="font-mono-ui text-[13px] tracking-[0.15em] text-[#E8E9F0]">
//             ACCESS.CONSOLE
//           </span>
//         </div>

//         <h1 className="font-sans-ui text-[2.75rem] leading-[1.08] font-semibold text-[#E8E9F0] max-w-sm">
//           {mode === "login" ? (
//             <>Pick up right where you left off.</>
//           ) : (
//             <>One console. Every project, one login away.</>
//           )}
//         </h1>
//         <p className="font-sans-ui text-[15px] leading-relaxed text-[#8B8FA3] mt-5 max-w-xs">
//           {mode === "login"
//             ? "Your workspaces, keys, and deploys are waiting on the other side."
//             : "Set up credentials once — sessions, tokens, and 2FA all inherit from here."}
//         </p>
//       </div>

//       {/* terminal log — the signature element */}
//       <div className="relative z-10">
//         <div className="font-mono-ui text-[11px] tracking-widest text-[#565A6E] mb-2">
//           SYSTEM LOG
//         </div>
//         <div
//           ref={logRef}
//           className="font-mono-ui text-[12.5px] leading-[1.9] text-[#7FE7D4] bg-[#151824] border border-[#20232F] rounded-lg px-4 py-3 h-[168px] overflow-hidden"
//         >
//           {lines.map((line, i) => (
//             <div key={i} className="rise text-[#7FE7D4]/90 whitespace-nowrap">
//               <span className="text-[#565A6E]">›</span> {line}
//             </div>
//           ))}
//           <span className="text-[#7FE7D4] cursor-blink">▍</span>
//         </div>
//       </div>
//     </div>
//   );
// }

// function pushLog(text) {
//   window.dispatchEvent(new CustomEvent("access-log", { detail: text }));
// }

// /* ---------------------------------- */
// /* Right panel: the actual form       */
// /* ---------------------------------- */

// function FormPanel({ mode, setMode }) {
//   return (
//     <div className="flex-1 flex items-center justify-center px-6 py-14 bg-[#0F111A]">
//       <div className="w-full max-w-[380px]">
//         {/* mobile brand mark */}
//         <div className="flex lg:hidden items-center gap-2.5 mb-10">
//           <div className="w-6 h-6 rounded-md bg-gradient-to-br from-[#5EEAD4] to-[#7C6FF0]" />
//           <span className="font-mono-ui text-[12px] tracking-[0.15em] text-[#E8E9F0]">
//             ACCESS.CONSOLE
//           </span>
//         </div>

//         <Tabs mode={mode} setMode={setMode} />

//         <div key={mode} className="rise">
//           {mode === "login" ? <LoginForm /> : <RegisterForm />}
//         </div>
//       </div>
//     </div>
//   );
// }

// function Tabs({ mode, setMode }) {
//   return (
//     <div className="flex gap-6 mb-8 border-b border-[#20232F]">
//       {["login", "register"].map((m) => (
//         <button
//           key={m}
//           onClick={() => setMode(m)}
//           className={`font-sans-ui text-[14px] pb-3 -mb-px border-b-2 transition-colors ${
//             mode === m
//               ? "text-[#E8E9F0] border-[#5EEAD4]"
//               : "text-[#565A6E] border-transparent hover:text-[#8B8FA3]"
//           }`}
//         >
//           {m === "login" ? "Sign in" : "Create account"}
//         </button>
//       ))}
//     </div>
//   );
// }

// /* ---------- shared bits ---------- */

// function Field({ label, error, children }) {
//   return (
//     <div className="mb-5">
//       <label className="font-mono-ui text-[11px] tracking-widest text-[#8B8FA3] block mb-2">
//         {label}
//       </label>
//       {children}
//       {error && (
//         <div className="flex items-center gap-1.5 mt-1.5 text-[#F98080] text-[12.5px] font-sans-ui">
//           <AlertCircle size={13} />
//           {error}
//         </div>
//       )}
//     </div>
//   );
// }

// const inputClass =
//   "w-full font-sans-ui text-[14.5px] text-[#E8E9F0] bg-[#151824] border rounded-lg px-3.5 py-3 outline-none transition-colors placeholder:text-[#4A4E60] focus:border-[#5EEAD4]";

// function PasswordInput({ value, onChange, placeholder, show, setShow, error }) {
//   return (
//     <div className="relative">
//       <input
//         type={show ? "text" : "password"}
//         value={value}
//         onChange={onChange}
//         placeholder={placeholder}
//         className={`${inputClass} pr-11 ${
//           error ? "border-[#F98080]" : "border-[#20232F]"
//         }`}
//       />
//       <button
//         type="button"
//         onClick={() => setShow((s) => !s)}
//         className="absolute right-3 top-1/2 -translate-y-1/2 text-[#565A6E] hover:text-[#8B8FA3]"
//         aria-label={show ? "Hide password" : "Show password"}
//       >
//         {show ? <EyeOff size={16} /> : <Eye size={16} />}
//       </button>
//     </div>
//   );
// }

// function SubmitButton({ label, loading }) {
//   return (
//     <button
//       type="submit"
//       disabled={loading}
//       className="w-full font-sans-ui text-[14.5px] font-semibold text-[#0F111A] bg-[#5EEAD4] hover:bg-[#7FF0DE] disabled:opacity-60 rounded-lg py-3 flex items-center justify-center gap-2 transition-colors mt-2"
//     >
//       {loading ? (
//         <span className="w-4 h-4 border-2 border-[#0F111A]/30 border-t-[#0F111A] rounded-full animate-spin" />
//       ) : (
//         <>
//           {label} <ArrowRight size={15} />
//         </>
//       )}
//     </button>
//   );
// }

// /* ---------- Login ---------- */

// function LoginForm() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [show, setShow] = useState(false);
//   const [errors, setErrors] = useState({});
//   const [loading, setLoading] = useState(false);
//   const [status, setStatus] = useState(null); // "success" | "error" | null

//   function validate() {
//     const e = {};
//     if (!/^\S+@\S+\.\S+$/.test(email)) e.email = "Enter a valid email address.";
//     if (password.length < 1) e.password = "Password is required.";
//     return e;
//   }

//   async function handleSubmit(ev) {
//     ev.preventDefault();
//     const e = validate();
//     setErrors(e);
//     if (Object.keys(e).length) return;

//     setLoading(true);
//     setStatus(null);
//     pushLog("AUTH.LOGIN ......... pending");

//     // Simulated request — replace with a real POST to /api/auth/login
//     await new Promise((r) => setTimeout(r, 900));

//     setLoading(false);
//     const ok = true; // placeholder for actual response check
//     if (ok) {
//       setStatus("success");
//       pushLog("AUTH.LOGIN ......... 200 OK");
//     } else {
//       setStatus("error");
//       pushLog("AUTH.LOGIN ......... 401 denied");
//     }
//   }

//   return (
//     <form onSubmit={handleSubmit} noValidate>
//       <Field label="EMAIL" error={errors.email}>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="you@company.com"
//           className={`${inputClass} ${errors.email ? "border-[#F98080]" : "border-[#20232F]"}`}
//         />
//       </Field>

//       <Field label="PASSWORD" error={errors.password}>
//         <PasswordInput
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="••••••••"
//           show={show}
//           setShow={setShow}
//           error={errors.password}
//         />
//       </Field>

//       <div className="flex justify-end mb-5 -mt-2">
//         <button
//           type="button"
//           className="font-sans-ui text-[13px] text-[#8B8FA3] hover:text-[#5EEAD4]"
//         >
//           Forgot password?
//         </button>
//       </div>

//       <SubmitButton label="Sign in" loading={loading} />

//       {status === "success" && (
//         <div className="flex items-center gap-1.5 mt-3 text-[#7FE7D4] text-[13px] font-sans-ui rise">
//           <Check size={14} /> Signed in — redirecting.
//         </div>
//       )}
//       {status === "error" && (
//         <div className="flex items-center gap-1.5 mt-3 text-[#F98080] text-[13px] font-sans-ui rise">
//           <AlertCircle size={14} /> That email and password don't match.
//         </div>
//       )}
//     </form>
//   );
// }

// /* ---------- Register ---------- */

// function RegisterForm() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirm, setConfirm] = useState("");
//   const [show, setShow] = useState(false);
//   const [showConfirm, setShowConfirm] = useState(false);
//   const [errors, setErrors] = useState({});
//   const [loading, setLoading] = useState(false);
//   const [status, setStatus] = useState(null);

//   const strength = passwordStrength(password);

//   function validate() {
//     const e = {};
//     if (name.trim().length < 2) e.name = "Enter your name.";
//     if (!/^\S+@\S+\.\S+$/.test(email)) e.email = "Enter a valid email address.";
//     if (password.length < 8) e.password = "At least 8 characters.";
//     if (confirm !== password) e.confirm = "Passwords don't match.";
//     return e;
//   }

//   async function handleSubmit(ev) {
//     ev.preventDefault();
//     const e = validate();
//     setErrors(e);
//     if (Object.keys(e).length) return;

//     setLoading(true);
//     setStatus(null);
//     pushLog("AUTH.REGISTER ...... pending");

//     // Simulated request — replace with a real POST to /api/auth/register
//     await new Promise((r) => setTimeout(r, 900));

//     setLoading(false);
//     const ok = true; // placeholder for actual response check
//     if (ok) {
//       setStatus("success");
//       pushLog("AUTH.REGISTER ...... 201 created");
//     } else {
//       setStatus("error");
//       pushLog("AUTH.REGISTER ...... 409 exists");
//     }
//   }

//   return (
//     <form onSubmit={handleSubmit} noValidate>
//       <Field label="FULL NAME" error={errors.name}>
//         <input
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           placeholder="Ada Lovelace"
//           className={`${inputClass} ${errors.name ? "border-[#F98080]" : "border-[#20232F]"}`}
//         />
//       </Field>

//       <Field label="EMAIL" error={errors.email}>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="you@company.com"
//           className={`${inputClass} ${errors.email ? "border-[#F98080]" : "border-[#20232F]"}`}
//         />
//       </Field>

//       <Field label="PASSWORD" error={errors.password}>
//         <PasswordInput
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="At least 8 characters"
//           show={show}
//           setShow={setShow}
//           error={errors.password}
//         />
//         {password.length > 0 && (
//           <div className="flex items-center gap-1.5 mt-2">
//             {[0, 1, 2].map((i) => (
//               <div
//                 key={i}
//                 className={`h-[3px] flex-1 rounded-full ${
//                   i < strength.score
//                     ? strength.score === 1
//                       ? "bg-[#F98080]"
//                       : strength.score === 2
//                       ? "bg-[#F5C244]"
//                       : "bg-[#5EEAD4]"
//                     : "bg-[#20232F]"
//                 }`}
//               />
//             ))}
//             <span className="font-mono-ui text-[10.5px] text-[#565A6E] ml-1 whitespace-nowrap">
//               {strength.label}
//             </span>
//           </div>
//         )}
//       </Field>

//       <Field label="CONFIRM PASSWORD" error={errors.confirm}>
//         <PasswordInput
//           value={confirm}
//           onChange={(e) => setConfirm(e.target.value)}
//           placeholder="Repeat password"
//           show={showConfirm}
//           setShow={setShowConfirm}
//           error={errors.confirm}
//         />
//       </Field>

//       <SubmitButton label="Create account" loading={loading} />

//       <p className="font-sans-ui text-[12px] text-[#565A6E] mt-4 leading-relaxed">
//         By continuing you agree to the Terms of Service and Privacy Policy.
//       </p>

//       {status === "success" && (
//         <div className="flex items-center gap-1.5 mt-3 text-[#7FE7D4] text-[13px] font-sans-ui rise">
//           <Check size={14} /> Account created — check your email to verify.
//         </div>
//       )}
//       {status === "error" && (
//         <div className="flex items-center gap-1.5 mt-3 text-[#F98080] text-[13px] font-sans-ui rise">
//           <AlertCircle size={14} /> An account with that email already exists.
//         </div>
//       )}
//     </form>
//   );
// }

// function passwordStrength(pw) {
//   if (!pw) return { score: 0, label: "" };
//   let score = 0;
//   if (pw.length >= 8) score++;
//   if (/[A-Z]/.test(pw) && /[0-9]/.test(pw)) score++;
//   if (/[^A-Za-z0-9]/.test(pw) && pw.length >= 10) score++;
//   const labels = ["Weak", "Weak", "Okay", "Strong"];
//   return { score: Math.max(score, 1), label: labels[score] || "Weak" };
// }
