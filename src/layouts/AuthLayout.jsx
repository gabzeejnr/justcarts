import { Outlet } from "react-router-dom";
import FormCard from "../components/Auth/FormCard";

export default function AuthLayout() {
    return (
        <FormCard>
            <Outlet />
        </FormCard>
    )
}