import { useState } from "react";
import api from "../../api/axios"
import { X } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import styles from "./Header.module.scss";

export default function SearchBar({ ...props }) {

    const [query, setQuery] = useState("");

/*     async function handleSubmit(e) {
        e.preventDefault();

        try {
            const { data } = await api.get("/query/")
        } catch (err) {
            console.error("Couldn't send query", err)
        }
    } */

    return (
        <div {...props}>
            <form>
                <label for="searchProducts" class="invisible hidden">Search</label>
                <input class="border border-gray-300 text-gray-900 rounded-lg focus:shadow-[0_0_0_.25rem_rgba(10,173,10,.25)] focus:ring-green-600 focus:ring-0 focus:border-green-600 block p-2 px-3 disabled:opacity-50 disabled:pointer-events-none w-full text-base"
                    type="search" placeholder="Search for products" id="searchProducts"
                    value={query} onChange={(e) => setQuery(e.target.value)} />
                <button type="button" className={`${styles["search-btn"]} ${"hidden md:block absolute right-0 -top-1/15 p-3"}`}
                >
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </form>
        </div>
    )
}