export default function CartProductHolder({ product }) {

    const price = product
        ? new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: product.currency || "USD",
        }).format(product.price)
        : null;

    return (
        product && (
            <div className="h-30 flex justify-center">
                <div className="image_holder border w-1/5">
                    <img src={product.image} alt={product.name} className="w-full" />
                </div>
                <div className="product_details border min-w-3/5 max-w-4/5 flex flex-col justify-between">
                    <span className="font-semibold text-gray-900 flex justify-between">{product.name}
                        <span className="pr-4 text-black text-xl">{price}</span>
                    </span>
                    <div>
                        {product.quantity}
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
        )
    )
}