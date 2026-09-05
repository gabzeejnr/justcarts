import UserProvider from "./context/UserContext.jsx";
import CartProvider from "./context/CartContext.jsx";
import RoutePage from "./routes/Routes.jsx";

export default function App() {
    return (
        <UserProvider>
            <CartProvider>
                <RoutePage />
            </CartProvider>
        </UserProvider>
    )
}