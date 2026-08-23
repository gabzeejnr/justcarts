import CartProvider from "./context/CartContext.jsx";
import RoutePage from "./routes/Routes.jsx";

export default function App() {
    return (
        <CartProvider>
            <RoutePage />
        </CartProvider>
    )
}