import { SelectComponent } from "./Select";
import { useTheme } from "../../context/ThemeContext";
import api from "../../api/axios";
import { useEffect } from "react";

function Cards() {
    return (
        <div></div>
    )
}

function Account() {
    return (
        <div className="mb-20">
            <h1 className="font-bold text-lg">ACCOUNT</h1>
            <div className="flex flex-col mt-5">
                <span className="font-semibold">Profile</span>
                <span>Update your personal information</span>
            </div>
            <div className="flex flex-row-reverse">Edit Profile</div>
        </div>

    )
}

function Preferences() {

    const { setTheme } = useTheme();
    const notificationItems = [
        { label: "OFF", value: null },
        { label: "ON", value: "on" }

    ]
    const themeItems = [
        { label: "System Default", value: null },
        { label: "Light", value: "light" },
        { label: "Dark", value: "dark" }
    ]

    return (
        <div className="mb-20">
            <div>
                <h1 className="font-bold text-lg">PREFERENCES</h1>
                <div className="flex flex-col mt-5">
                    <span className="font-semibold">Notifications</span>
                    <div className="flex gap-5 items-center mb-3">
                        <span>Receive updates about orders and promotions</span>
                        <SelectComponent items={notificationItems} />
                    </div>
                </div>
            </div>
            <div className="mt-5">
                <div className="flex flex-col">
                    <span className="font-semibold">Appearance</span>
                    <div className="flex gap-5">
                        <span>Choose how JustCarts looks</span>
                        <SelectComponent title="Change Theme" items={themeItems} />
                    </div>
                </div>
            </div>
        </div>
    )
}

function DangerZone() {

    useEffect(() => {

    }, [])

    async function logOut() {
        try {
            await axios.get("/log-out")
        } catch (err) {
            console.error("Can't log out... Try again.")
        }
    }
    return (
        <div>
            <h1 className="font-bold text-destructive text-lg">DANGER ZONE</h1>
            <div className="mt-5">
                <span className="font-semibold text-destructive">Log Out</span>
                <div className="flex gap-5">Sign out of your JustCarts account on this device.
                    <button className="text-logout cursor-pointer text-sm w-18 rounded-xl h-fit py-2 px-2 bg-mild-destructive">Log Out</button>
                </div>
            </div>
        </div>
    )
}

export default function Wrapper() {
    return (
        <>
            <Account />
            <Preferences />
            <DangerZone />
        </>
    )
}