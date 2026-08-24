export default function Toast({ toast }) {
    return (
        toast && <div className={`text-sm border px-2 py-3 rounded-xl ${toast.type === "success" ? "bg-green-200 border-green-400 text-green-500" : "bg-red-200 border-red-400 text-red-500"}`}>
            {toast.text}
        </div>
    )
}