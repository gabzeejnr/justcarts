import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import SearchBar from "./SearchBar";
import { brandLogo, brandName } from "../../data/companyData";
import { Heart, ShoppingBag, ShoppingCart, User } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Header() {

    // ============================================================================================
    // STATES & VARIABLES =======================
    // ============================================================================================

    const { cart } = useCart();
    const navigate = useNavigate();
    const [userModal, setUserModal] = useState(false);
    const [likeCount, setLikeCount] = useState(Number(1));


    // ============================================================================================
    // EFFECTS & FUNCTIONS ======================
    // ============================================================================================

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setLikeCount(prev => {
    //             return prev + 1
    //         })
    //     }, 1000);

    //     return () => clearInterval(interval)
    // }, [])

    return (
        <header className="header flex sticky top-0 z-9999 border-b border-b-gray-400 justify-between items-center py-4 pl-6 pr-4 backdrop-blur-xl">
            <div className="left_items flex items-center gap-4 w-2/4">
                <Link to="/">
                    <img src={brandLogo} alt={brandName} />
                </Link>
                <SearchBar className="search_form_wrapper hidden sm:block relative w-2/3" />
            </div>
            <div className="right_items flex items-center gap-4">
                <button className="relative">
                    <div className="bg-[#0AAD0A] h-4 text-xs px-1 rounded-4xl text-white
                        absolute -top-2 left-1/2">{likeCount}</div>
                    <Heart />
                </button>
                <button>
                    <User />
                </button>
                <button className="relative cursor-pointer"
                    onClick={() => navigate("/cart")}>
                    <div className={`bg-[#0AAD0A] h-4 text-xs px-1 rounded-4xl text-white
                        absolute -top-2 left-1/2 `}>{cart.length}</div>
                    <ShoppingBag />
                </button>
                <button className="md:hidden text-2xl">
                    <FontAwesomeIcon icon={faBars} />
                </button>
            </div>
        </header>
    )
}