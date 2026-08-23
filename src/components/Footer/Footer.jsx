import FooterLinks from "./FooterLinks";
import api from "../../api/axios"
import { useEffect, useState } from "react";
import { listCategories } from "../../api/category";
import { editNames } from "../../utils/functions";

const GTKU = [
    "Get to know us",
    [
        { title: "Company", link: "company" },
        { title: "About", link: "about" },
        { title: "Blog", link: "blog" },
        { title: "Help Center", link: "help" },
        { title: "Our Value", link: "values" }
    ]
];

const FC = [
    "For Consumers",
    [
        { title: "Payments", link: "payments" },
        { title: "Shipping", link: "shipping" },
        { title: "Product Returns", link: "product_returns" },
        { title: "FAQ", link: "faq" },
        { title: "Shop Checkout", link: "checkout" }
    ]
];

const BAS = [
    "Become a Shopper",
    [
        { title: "Shopper Opportunities", link: "shopper_opportunities" },
        { title: "Become a Shopper", link: "become_a_shopper" },
        { title: "Earnings", link: "earnings" },
        { title: "Ideas & Guides", link: "ideas&guides" },
        { title: "New Retailers", link: "new_retailers" }
    ]
];

const FCP = [
    "Freshcart Programs",
    [
        { title: "Freshcart programs", link: "freshcart_programs" },
        { title: "Gift Cards", link: "gift_cards" },
        { title: "Promos & Coupons", link: "promos&coupons" },
        { title: "Freshcart Ads", link: "freshcart_ads" },
        { title: "Careers", link: "careers" }
    ]
];


export default function Footer() {
    const [categories, setcategories] = useState([]);
    const footerjoin = [categories, GTKU, FC, BAS, FCP];

    useEffect(() => {
        getCategories();
    }, []);

    async function getCategories() {
        try {
            const data = await listCategories()
            const arr = [];
            const arrangement = data.map(d => {
                arr.push({
                    title: editNames(d),
                    link: `/categories/${d}`
                });
            });
            setcategories(["Categories", arr])
        } catch (err) {
            console.error("Error at:", err);
        }
    }
    return (
        <footer className="footer grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 bg-gray-200 p-4 pt-0 mt-auto">
            {footerjoin.map(foot => (
                (foot[0] && foot[1]) &&
                <FooterLinks key={foot[0]} title={foot[0]} array={foot[1]} />
            ))}
        </footer>
    )
}