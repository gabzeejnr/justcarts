import fallBack from "../assets/refresh-cw.svg"
import styles from "./ComponentStyle.module.scss";

export default function ProductHolder({ data }) {

    const price = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: data.currency
    }).format(data.price)

    return (
        <div className={`${styles.wrapper} flex flex-col border rounded-2xl h-80 overflow-hidden transition-all duration-1000`}>
            <div className={`${styles["image-holder"]} h-4/5 w-full`}>
                <img src={data.image_url ? data.image_url : fallBack} alt={data.name}
                    className="w-full h-full block object-cover object-center" />
            </div>
            <div className="h-1/5 bg-gray-200 pl-4 flex flex-col gap-1">
                <div className="font-semibold">{data.name}</div>
                <div className="font-semibold">{price}</div>
            </div>
        </div>
    )
}