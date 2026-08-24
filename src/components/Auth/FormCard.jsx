import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FormCard({ children }) {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 select-none"
            draggable={false}>
            <div className="w-full max-w-md">
                <div className="text-center mb-5">
                    <h1 className="text-2xl font-bold">IT'S JUST CARTS {""}
                        <FontAwesomeIcon icon={faCartShopping} color="#0AAD0A" />
                    </h1>
                </div>
                <div className="bg-white rounded-2xl p-6 sm:p-3 shadow-sm">
                    {children}
                </div>
            </div>
        </div>
    )
}