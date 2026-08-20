import { Link } from "react-router-dom";
import { brandLogo, brandName } from "../../data/companyData";
import { Heart, ListEnd, ShoppingBag, ShoppingCart, User } from "lucide-react";
import SearchBar from "./SearchBar";
import { useState } from "react";

export default function Header() {

    const [userModal, setUserModal] = useState(false);
    const [likeCount, setLikeCount] = useState(10);

    return (
        <header className="flex sticky top-0 z-9999 border-b border-b-gray-400 justify-between items-center py-4 pl-6 pr-4 backdrop-blur-xl">
            <div className="flex items-center gap-4 w-2/4">
                <Link to="/">
                    <img src={brandLogo} alt={brandName} />
                </Link>
                <SearchBar className="relative w-2/3" />
            </div>
            <div className="flex items-center gap-4">
                <button className="relative">
                    <div className="bg-green-600 h-4 text-xs px-1 rounded-4xl text-white
                        absolute -top-2 left-1/2">{likeCount}</div>
                    <Heart />
                </button>
                <button>
                    <User />
                </button>
                <button>
                    <ShoppingBag />
                </button>
                <button className="md:hidden">
                    <ListEnd />
                </button>
            </div>
        </header>
    )
}