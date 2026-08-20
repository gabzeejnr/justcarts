import { getRates } from "../services/currencies";

export async function formatCurrency(amount) {
    const response = await getRates();
    const converted = amount * response;
    const formatted = new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN"
    }).format(converted);
    return formatted;
}