function Cards() {
    return (
        <div></div>
    )
}

function Account() {
    return (
        <div className="mb-10">
            <h1 className="font-bold text-lg">ACCOUNT</h1>
            <div className="flex flex-col mt-5">
                <span>Profile</span>
                <span>Update your personal information</span>
            </div>
            <div className="flex flex-row-reverse">Edit Profile</div>
        </div>

    )
}

function Preferences() {
    return (
        <div className="mb-10">
            <div>
                <h1 className="font-bold text-lg">PREFERENCES</h1>
                <div className="flex flex-col mt-5">
                    <div className="flex gap-5">
                        <span>Notifications</span>
                        <select name="notifications" className="border-2  border-[#0AAD0A] px-2">
                            <option value="off" className="hover:bg-[#0AAD0A]">OFF</option>
                            <option value="on">ON</option>
                        </select>
                    </div>
                    <span>Receive updates about orders and promotions</span>
                </div>
            </div>
            <div className="mt-5">
                <div className="flex flex-col">
                    <span>Appearance</span>
                    <div className="flex gap-5">
                        <span>Choose how JustCarts looks</span>
                        <select name="theme" className="border-2  border-[#0AAD0A] px-2">
                            <option value="system" className="hover:bg-[#0AAD0A]">System</option>
                            <option value="light">Light</option>
                            <option value="dark">Dark</option>
                        </select>
                    </div>
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
        </>
    )
}