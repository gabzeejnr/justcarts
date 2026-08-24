import CartProductHolder from "../components/Cart/CartProductHolder";
import { useCart } from "../context/CartContext";

export default function Cart() {

    const { cart } = useCart();
    
    return (
        <section className="min-h-screen flex flex-col gap-4">
            {cart.map(c => (
                <CartProductHolder product={c} />
            ))}
        </section>
    )
}