import { Link } from "react-router-dom";

export default function FooterLinks({ title, array }) {
    return (
        (title && array) && (
            array.length <= 0 ? null
                : array.length > 5 ? (
                    <div className={`border block flex-col gap-2 mt-6
                ${Math.ceil(array.length / 5) > 3 ? "col-span-4" : Math.ceil(array.length / 5) > 2 ? "col-span-3" : Math.ceil(array.length / 5) > 1 ? "col-span-2" : ""}`}>
                        {console.log(Math.ceil(array.length / 5))}
                        <h1 className="font-semibold mb-4">{title}</h1>
                        <div className="flex flex-col w-fit gap-2">
                            {array.map((arr, index) => (
                                <Link to={arr.link}
                                    className="w-fit font-semibold text-gray-400 hover:text-green-500 focus:text-green-500">{arr.title}</Link>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="block flex-col gap-2 mt-6">
                        <h1 className="font-semibold mb-4">{title}</h1>
                        <div className="flex flex-col w-fit gap-2">
                            {array.map((arr, index) => (
                                <Link to={arr.link} key={arr.link}
                                    className="w-fit font-semibold text-gray-400 hover:text-green-500 focus:text-green-500">{arr.title}</Link>
                            ))}
                        </div>
                    </div>
                )
        )
    )
}