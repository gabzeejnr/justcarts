import { X } from "lucide-react";
import { useState } from "react";

export default function SearchBar({ ...props }) {

    const [query, setQuery] = useState("");
    return (
        <div {...props}>
            <label for="searchProducts" class="invisible hidden">Search</label>
            <input class="border border-gray-300 text-gray-900 rounded-lg focus:shadow-[0_0_0_.25rem_rgba(10,173,10,.25)] focus:ring-green-600 focus:ring-0 focus:border-green-600 block p-2 px-3 disabled:opacity-50 disabled:pointer-events-none w-full text-base" type="search"
                placeholder="Search for products" id="searchProducts"
                value={query} onChange={(e) => setQuery(e.target.value)} />
            <button type="button" className="absolute right-0 top-0 p-3">
            </button>
        </div>
    )
}