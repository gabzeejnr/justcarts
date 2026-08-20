import { Link } from "react-router-dom"

export default function HomeCategory({ name, category, children }) {
    return (
        name && (
            <div className="mb-10">
                <div className="flex items-center justify-between pr-6">
                    <h1 className="font-semibold text-2xl ml-3 mt-4 mb-6">{name}</h1>
                    <Link to={`categories/${name.toLowerCase()}`}>
                        <span>{">>"}</span>
                    </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-6">{children}</div>
            </div>
        )
    )
}