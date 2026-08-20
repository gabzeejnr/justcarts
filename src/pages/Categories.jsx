import { useEffect, useState } from "react";
import api from "../api/axios";
import { Link } from "react-router-dom";

export default function Categories() {

    const [data, setData] = useState(null);

    useEffect(() => {
        getData()
    }, [])

    async function getData() {
        try {
            const { data } = await api.get("/categories");
            console.log(data);
            setData(data.data);
        } catch (err) {
            console.error("Error here", err)
        }
    }
    return (
        <section>
            These are categories
            {data !== null &&
                data.map(dat => (
                    <Link to={`${dat}`}>
                        <p>{dat}</p>
                    </Link>
                ))}
        </section>
    )
}