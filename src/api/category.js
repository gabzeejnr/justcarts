import api from "./axios";

export async function listCategories() {
    try {
        const { data } = await api.get("/categories");
        return data.data;
    } catch (err) {
        console.error("Categorical error", err)
    }
}