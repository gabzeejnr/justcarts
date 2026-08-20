import api from "./axios"

export async function getData() {
    try {
        const { data } = await api.get("/products")
        return data
    } catch (error) {
        console.error("Error sha", error)
    }
}

export async function getProduct(id) {
    try {
        const { data } = await api.get(`/products/${id}`);
        return data
    } catch (err) {
        console.error("Error getting product data:", err);
    }
}