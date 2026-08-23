import loader from "../assets/SVG/follow-square-circles.svg";

export default function Loader({ width }) {
    return (
        <div className="grid place-items-center h-screen select-none"
            draggable={false}>
            <img src={loader} alt="Infinite loader SVG" loading="lazy"
                width={width} className="transition-all duration-200" />
        </div>
    )
}