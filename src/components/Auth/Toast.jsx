export default function Toast({ toast }) {
    return (
        toast && <div className={`text-sm border px-2 py-3 rounded-xl ${toast.type === "success" ? "bg-green-200 border-green-500 text-green-700" : "bg-red-200 border-red-500 text-red-700"}`}>
            {toast.text}
        </div>
    )
}