import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import { User } from "lucide-react";

function AccountDropDown({ setIsToggled }) {
    const { user } = useUser();
    const items = [
        {
            name: user.name
        },
        {
            name: "Settings",
            link: "/settings"
        }
    ];

    return (
        <div className="flex flex-col absolute font-semibold top-18 px-3 w-40 text-center bg-[#0AAD0A]">
            {items.map(i => {
                const t = i.name === "Settings"
                    ? <NavLink to={i.link} className="w-full py-2"
                        onClick={() => setIsToggled(prev => !prev)}>{i.name}</NavLink>
                    : <span className="py-2">{i.name}</span>
                return t
            })}
        </div>
    )
}

export default function Account() {

    const { user } = useUser();
    const [isToggled, setIsToggled] = useState(false);

    return (
        <>
            <div className="hidden md:block cursor-pointer gap-2 px-3 py-2 bg-[#0AAD0A] rounded-sm">
                <button type="button" className="flex cursor-pointer items-center gap-3"
                    onClick={() => setIsToggled(prev => !prev)}>
                    <span className="inline-flex items-center gap-2">
                        <div className="bg-white rounded-[50%] h-7 w-7 flex items-center justify-center"><User /></div>
                        {user.name}</span>
                    <span className="text-white">{isToggled ? <>&#x25B2;</> : <>&#9660;</>
                    }</span>
                </button>
            </div>
            {isToggled && <AccountDropDown setIsToggled={setIsToggled} />}
        </>
    )
}