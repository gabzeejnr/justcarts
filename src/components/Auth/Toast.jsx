export default function Toast({ toast }) {
    return (
        toast && <div className={`text-sm border px-2 py-3 rounded-xl ${toast.type === "success" ? "bg-green-100 border-green-200 text-green-500" : "bg-red-100 border-red-200 text-red-500"}`}>
            {toast.text}
        </div>
    )
}