import { Link } from "react-router-dom";

export default function FooterLinks({ title, array }) {
    return (
        (title && array) && (
            <div className="block flex-col gap-2 mt-6">
                <h1 className="font-semibold mb-4">{title}</h1>
                <div className="flex flex-col w-fit gap-2">
                    {array.map((arr, index) => (
                        <Link to={arr.link}
                        className="w-fit font-semibold text-gray-400 hover:text-green-500 focus:text-green-500">{arr.title}</Link>
                    ))}
                </div>
            </div>
        )
    )
}