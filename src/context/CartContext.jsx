import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext(null);

export default function CartProvider({ children }) {
    return (
        <CartContext>
            {children}
        </CartContext>
    )
}

export function useCart() {
    const context = useContext(CartContext);
    if (!context) throw new Error("useCart must be used in a CartProvider");
    return context
}