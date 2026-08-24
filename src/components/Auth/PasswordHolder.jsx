import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function PasswordHolder({
    id,
    label,
    value,
    labelStyle,
    required,
    onChange,
    ...props
}) {

    const [isClosed, setIsClosed] = useState(true);

    return (
        <div>
            <label htmlFor="password" className={labelStyle}>{label}</label>
            <div className="relative">
                <input type={isClosed ? "password" : "text"} id={id} value={value} placeholder={isClosed ? "••••••" : "password"} required={required}
                    onChange={onChange} {...props} />
                <button onClick={() => setIsClosed(prev => !prev)} type="button"
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400 hover:text-black">
                    {isClosed ? <EyeOff /> : <Eye />}
                </button>
            </div>
        </div>
    )
}