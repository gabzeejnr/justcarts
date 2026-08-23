import { useState } from "react";

export default function InputHolder({ id, label, type, value, placeholder, onChange, required }) {

    const labelStyle = "block text-sm font-medium text-gray-700 mb-1"
    const inputStyle = "w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-black focus:ring-1 focus:ring-black";


    return (
        <div>
            <label htmlFor={id} className={labelStyle}>{label}</label>
            <input type={type} id={id} placeholder={placeholder} className={inputStyle} required={required}
                value={value} onChange={onChange} />
        </div>
    )
}