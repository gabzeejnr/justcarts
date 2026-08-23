import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext(null);


export default function CartProvider({ children }) {

    // ========================================================================================= \\
    // STATES & VARIABLES =======================
    // ========================================================================================= \\

    const [cart, setCart] = useState([]);
    const [showCart, setShowCart] = useState(false);


    // ========================================================================================= \\
    // EFFECTS & FUNCTIONS ======================
    // ========================================================================================= \\

    useEffect(() => {
        const savedCart = localStorage.getItem("cart");
        if (savedCart) setCart(JSON.parse(savedCart));
    }, []);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    function getQuantity(product) {
        const exists = cart.find(item => item.id === product.id)
        if (!exists) return 0;
        return exists.quantity;
    }
    function addToCart(product) {
       increaseQuantity(product)
    }
    function increaseQuantity(product) {

        setCart(prev => {
            const exists = prev.find(item => item.id === product.id);
            if (!exists) {
                return [...prev,
                {
                    ...product,
                    quantity: 1
                }]
            }
            if (exists && exists.quantity === 100) return prev;
            else {
                return prev.map(item => item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
                )
            }
        })
    }
    function decreaseQuantity(product) {
        setCart(prev => {
            const exists = prev.find(item => item.id === product.id);
            if (!exists) return prev;
            if (exists.quantity === 1) return prev.filter(item => item.id !== product.id);
            return [...prev, { ...product, quantity: (product.quantity - 1) }]
        })
    }
    function removeFromCart(product) {
        setCart(prev => {
            const exists = prev.find(item => item.id === product.id);
            if (!exists) return [];
            return prev.filter(item => item.id !== product.id);
        })
    }
    function clearCart() {
        setCart([]);
    }
    function toggleCart() {
        setCart(prev => !prev)
    }


    // CART VALUE ===============================

    const value = {
        cart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        clearCart,
        getQuantity
    }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}


export function useCart() {
    const context = useContext(CartContext);
    if (!context) throw new Error("useCart must be used in a CartProvider");
    return context
}