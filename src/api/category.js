import api from "./axios";

export async function listCategories() {
    try {
        const { data } = await api.get("/category");
        return data;
    } catch (err) {
        console.error("Categorical error", err)
    }
}