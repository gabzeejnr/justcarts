import { Link } from "react-router-dom";
import ProductHolder from "../ProductHolder";

export default function HomeCategory({ name, data }) {
    return (
        name && (
            <div className="mb-10">
                <div className="flex items-center justify-between pr-6">
                    <Link to={`/categories/${name.toLowerCase()}`}
                        className="sm:block font-semibold text-2xl ml-3 mt-4 mb-6 sm:pointer-events-none">{name}</Link>
                    <Link to={`/categories/${name.toLowerCase()}`}
                        className="hidden sm:block">
                        <span>{">>"}</span>
                    </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-6">{
                    data.filter(p => p.category.includes(name.toLowerCase()))
                        .map(dat => (
                            <Link to={`/products/${dat.id}`}>
                                <ProductHolder key={dat.id} data={dat} />
                            </Link>
                        ))
                }</div>
            </div>
        )
    )
}