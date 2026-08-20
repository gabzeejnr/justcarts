import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/axios";
import ProductHolder from "../components/ProductHolder"

export default function Category() {

    const { category } = useParams();
    const [categoryData, setCategoryData] = useState(null);

    useEffect(() => {
        getData(category)
    }, [category]);

    async function getData(category) {
        try {
            const { data } = await api.get(`/categories/${category}`);
            console.log(data)
            setCategoryData(data);
        } catch (err) {
            console.error("Categorical error", err)
        }
    }


    return (
        <section>
            {!categoryData ? (
                <p>No data fetched</p>
            ) : (
            <div>
                This category is {category}
                {categoryData.map(cat => (
                    <ProductHolder data={cat} />
                ))}
            </div>
            )}
        </section>
    )
}