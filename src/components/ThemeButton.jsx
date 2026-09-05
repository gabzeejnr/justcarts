export default function ThemeButton({ type, disabled, value, loadingValue, onClick }) {
    return (
        <button type={type} disabled={disabled} className={`rounded-xl w-full py-3 ring-1 bg-primary ring-[#05FF05] text-white font-semibold
            ${disabled ? "cursor-not-allowed opacity-60" : "cursor-pointer"}`}
            onClick={onClick}
        >{disabled ? (loadingValue ?? "LOADING...") : value}</button>
    )
}