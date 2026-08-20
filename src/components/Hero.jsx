export default function Hero() {
    return (
        <section className="hero flex lg:h-screen p-5 md:p-10 md:pt-10">
            <div className="w-1/2 flex flex-col self-center gap-4">
                <div className="flex flex-col gap-5">
                    <div className="bg-yellow-400 text-xl w-fit px-2 py-1 rounded-xl font-semibold">Free shipping orders over $100</div>
                    <div className="big-text text-5xl font-semibold lg:max-w-2/3">Free Shipping on orders over <span className="text-green-500 font-bold">$100</span></div>
                    <div className="subtitle text-[#1b1b1b] text-lg font-semibold">Free shipping to First-Time customers only, After promotions and discounts are applied.</div>
                </div>
                <button type="button" className="w-fit p-2 rounded-xl bg-[#110e0e] text-white font-semibold cursor-pointer">Shop Now &ensp; &rarr;</button>
            </div>
        </section>
    )
}