import UserProvider from "./context/UserContext.jsx";
import CartProvider from "./context/CartContext.jsx";
import RoutePage from "./routes/Routes.jsx";
import ThemeProvider from "./context/ThemeContext.jsx";

export default function App() {
    return (
        <UserProvider>
            <ThemeProvider>
                <CartProvider>
                    <RoutePage />
                </CartProvider>
            </ThemeProvider>
        </UserProvider>
    )
}