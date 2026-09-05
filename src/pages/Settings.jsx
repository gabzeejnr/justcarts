import Wrapper from "../components/Settings/Account";

export default function Settings() {
    return (
        <section className="min-h-screen p-10">
            <div className="flex flex-col gap-2">
                <h1 className="font-bold text-2xl">Settings</h1>
                <span className="tracking-[1px] font-medium">Manage your account and preferences</span>
            </div>
            <div className="py-10 pl-10">
                <Wrapper />
            </div>
        </section>
    )
}


/* 
Settings

Account
  Gabriel Dodowei
  email@example.com

Preferences
  Theme       [Dark/Light]

Security
  Change password
  Log out
*/