import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import api from "../api/axios";
import ProductHolder from "../components/ProductHolder";
import HomeCategory from "../components/Home/HomeCategory";
import Loader from "../components/Loader";

export default function Home() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [LoaderSize, setLoaderSize] = useState(90)

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            const code = Math.floor((Math.random() * 90) + 100)
            setLoaderSize(code)
        }, 1000);

        return () => clearInterval(interval)
    })

    async function getData() {
        try {
            setLoading(true);
            const { data } = await api.get("/products")
            setProducts(data);
        } catch (error) {
            console.error("Error sha")
        } finally {
            setTimeout(() => {
                setLoading(false)
            }, 3000);
        }
    }

    return (
        <main className="mb-10">
            {loading ? (
                <Loader width={LoaderSize} />
            ) : (products.length <= 0 ?
                (
                    <div className="h-screen grid place-items-center">
                        Error loading products... Please refresh and try again
                    </div>

                ) : (
                    <>
                        <Hero />
                        <HomeCategory name={"Groceries"} data={products} />
                        <HomeCategory name={"Shoes"} data={products} />
                    </>
                )
            )}
        </main>
    )
}