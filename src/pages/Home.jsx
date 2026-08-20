import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import api from "../api/axios";
import ProductHolder from "../components/ProductHolder";
import HomeCategory from "../components/Home/HomeCategory";

export default function Home() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getData();
    }, [])

    async function getData() {
        try {
            const { data } = await api.get("/products")
            setProducts(data)
            console.log(data);
        } catch (error) {
            console.error("Error sha")
        }
    }

    return (
        <main className="mb-10">
            <Hero />
            <HomeCategory name={"Groceries"}>
                {products.filter(p => p.category === "groceries").map(prod => (
                    <Link to={`/products/${prod.id}`}>
                        <ProductHolder data={prod} />
                    </Link>
                ))}
            </HomeCategory>
            <HomeCategory name="Shoes">
                {products.filter(p => p.category === "shoes").map(prod => (
                    <Link to={`/products/${prod.id}`}>
                        <ProductHolder data={prod} />
                    </Link>
                ))}
            </HomeCategory>
        </main>
    )
}