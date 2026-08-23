import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../api/axios";
import { useCart } from "../context/CartContext";

export default function ProductPage() {

    // ========================================================================================= \\
    // STATES & VARIABLES =======================
    // ========================================================================================= \\

    const { id } = useParams();
    const { addToCart, increaseQuantity, decreaseQuantity, getQuantity } = useCart();
    const [product, setProduct] = useState(null)


    // ========================================================================================= \\
    // EFFECTS & FUNCTIONS ======================
    // ========================================================================================= \\
    useEffect(() => {
        getProduct(id);
    }, [id])

    async function getProduct(id) {
        try {
            const { data } = await api.get(`/products/${id}`);
            console.log(data);
            setProduct(data);
        } catch (err) {
            console.error("Error getting product data:", err);
        }
    }

    const price = product
        ? new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: product.currency || "USD",
        }).format(product.price)
        : null;

    return (
        product ? (
            <main className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 lg:px-10">
                <div className="mx-auto max-w-7xl">

                    <div className="mb-6 flex items-center gap-2 text-sm text-gray-500">
                        <span className="cursor-pointer hover:text-gray-900">
                            <Link to="/">Products</Link>
                        </span>
                        <span>/</span>
                        <Link to={`/categories/${product.category}`}>
                            <span className="capitalize">
                                {product.category}
                            </span>
                        </Link>
                        <span>/</span>
                        <span className="font-medium text-gray-900">
                            {product.name}
                        </span>
                    </div>

                    <section className="overflow-hidden rounded-3xl bg-white shadow-sm">
                        <div className="grid grid-cols-1 lg:grid-cols-2">

                            <div className="flex min-h-100 items-center justify-center p-6 sm:p-10 lg:min-h-162.5">
                                <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-2xl bg-white">
                                    <img src={product.image} alt={product.name}
                                        className="h-full max-h-150 w-full object-contain p-6 transition duration-500 hover:scale-105 sm:p-10" />
                                </div>
                            </div>

                            <div className="flex flex-col p-6 sm:p-10 lg:p-14">
                                <span className="mb-4 w-fit rounded-full bg-gray-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gray-600">
                                    {product.category}
                                </span>

                                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                                    {product.name}
                                </h1>

                                <div className="mt-5 flex items-center gap-3">
                                    <div className="flex items-center gap-1">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <span key={star} className={
                                                Number(product.rating) >= star
                                                    ? "text-yellow-400"
                                                    : "text-gray-300"
                                            }>★</span>
                                        ))}
                                    </div>

                                    <span className="text-sm text-gray-500">
                                        {Number(product.rating) > 0
                                            ? `${product.rating} / 5`
                                            : "No ratings yet"}
                                    </span>
                                </div>

                                <div className="mt-8">
                                    <p className="text-3xl font-bold text-gray-900">
                                        {price}
                                    </p>
                                </div>

                                <div className="mt-8 border-t border-gray-100 pt-8">
                                    <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-900">
                                        Description
                                    </h2>

                                    <p className="max-w-xl text-base leading-7 text-gray-600">
                                        {product.description}
                                    </p>
                                </div>

                                <div className="mt-8">
                                    <p className="mb-3 text-sm font-semibold text-gray-900">
                                        Quantity
                                    </p>

                                    <div className="flex w-fit items-center overflow-hidden rounded-xl border border-gray-200">
                                        <button onClick={() => decreaseQuantity(product)}
                                            className="flex h-11 w-11 items-center justify-center text-xl text-gray-600 transition hover:bg-gray-100">
                                            −</button>

                                        <span className="flex h-11 w-12 items-center justify-center border-x border-gray-200 text-sm font-semibold">
                                            {getQuantity(product)}
                                        </span>

                                        <button onClick={() => increaseQuantity(product)}
                                            className="flex h-11 w-11 items-center justify-center text-xl text-gray-600 transition hover:bg-gray-100">
                                            +
                                        </button>
                                    </div>
                                </div>

                                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                                    <button className="flex-1 rounded-xl bg-black px-6 py-4 font-semibold text-white transition hover:bg-gray-800 active:scale-[0.98]"
                                        onClick={() => addToCart(product)}>
                                        Add to Cart
                                    </button>

                                    <button className="flex-1 rounded-xl border border-gray-300 px-6 py-4 font-semibold text-gray-900 transition hover:bg-gray-50 active:scale-[0.98]">
                                        Buy Now
                                    </button>
                                </div>

                                {(product.availability ||
                                    product.shipping_info ||
                                    product.warranty_info ||
                                    product.return_policy ||
                                    product.minimum_orderquantity) && (
                                        <div className="mt-10 border-t border-gray-100 pt-8">
                                            <h2 className="mb-5 text-lg font-semibold text-gray-900">
                                                Product Information
                                            </h2>

                                            <div className="space-y-4">

                                                {product.availability && (
                                                    <div className="flex justify-between gap-5 border-b border-gray-100 pb-4">
                                                        <span className="text-sm text-gray-500">
                                                            Availability
                                                        </span>

                                                        <span className="text-right text-sm font-medium text-gray-900">
                                                            {product.availability}
                                                        </span>
                                                    </div>
                                                )}

                                                {product.shipping_info && (
                                                    <div className="flex justify-between gap-5 border-b border-gray-100 pb-4">
                                                        <span className="text-sm text-gray-500">
                                                            Shipping
                                                        </span>

                                                        <span className="text-right text-sm font-medium text-gray-900">
                                                            {product.shipping_info}
                                                        </span>
                                                    </div>
                                                )}

                                                {product.warranty_info && (
                                                    <div className="flex justify-between gap-5 border-b border-gray-100 pb-4">
                                                        <span className="text-sm text-gray-500">
                                                            Warranty
                                                        </span>

                                                        <span className="text-right text-sm font-medium text-gray-900">
                                                            {product.warranty_info}
                                                        </span>
                                                    </div>
                                                )}

                                                {product.return_policy && (
                                                    <div className="flex justify-between gap-5 border-b border-gray-100 pb-4">
                                                        <span className="text-sm text-gray-500">
                                                            Return Policy
                                                        </span>

                                                        <span className="text-right text-sm font-medium text-gray-900">
                                                            {product.return_policy}
                                                        </span>
                                                    </div>
                                                )}

                                                {product.minimum_orderquantity && (
                                                    <div className="flex justify-between gap-5">
                                                        <span className="text-sm text-gray-500">
                                                            Minimum Order
                                                        </span>

                                                        <span className="text-right text-sm font-medium text-gray-900">
                                                            {product.minimum_orderquantity}
                                                        </span>
                                                    </div>
                                                )}

                                            </div>
                                        </div>
                                    )}

                            </div>
                        </div>
                    </section>

                    <section className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">

                        <div className="rounded-2xl bg-white p-6 shadow-sm">
                            <div className="mb-3 text-2xl">🚚</div>
                            <h3 className="font-semibold text-gray-900">
                                Fast Delivery
                            </h3>
                            <p className="mt-1 text-sm leading-6 text-gray-500">
                                Get your order delivered quickly and securely.
                            </p>
                        </div>

                        <div className="rounded-2xl bg-white p-6 shadow-sm">
                            <div className="mb-3 text-2xl">🔒</div>
                            <h3 className="font-semibold text-gray-900">
                                Secure Payment
                            </h3>
                            <p className="mt-1 text-sm leading-6 text-gray-500">
                                Your payment information is kept safe and secure.
                            </p>
                        </div>

                        <div className="rounded-2xl bg-white p-6 shadow-sm">
                            <div className="mb-3 text-2xl">↩️</div>
                            <h3 className="font-semibold text-gray-900">
                                Easy Returns
                            </h3>
                            <p className="mt-1 text-sm leading-6 text-gray-500">
                                Simple and convenient returns when applicable.
                            </p>
                        </div>

                    </section>
                </div>
            </main>
        ) : (
            <p>Couldn't get product</p>
        )
    );
}