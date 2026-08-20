import FooterLinks from "./FooterLinks";

const GTKU = [
    { title: "Company", link: "company" },
    { title: "About", link: "about" },
    { title: "Blog", link: "blog" },
    { title: "Help Center", link: "help" },
    { title: "Our Value", link: "values" }
];

const FC = [
    { title: "Payments", link: "payments" },
    { title: "Shipping", link: "shipping" },
    { title: "Product Returns", link: "product_returns" },
    { title: "FAQ", link: "faq" },
    { title: "Shop Checkout", link: "checkout" }
];

const BAS = [
    { title: "Shopper Opportunities", link: "shopper_opportunities" },
    { title: "Become a Shopper", link: "become_a_shopper" },
    { title: "Earnings", link: "earnings" },
    { title: "Ideas & Guides", link: "ideas&guides" },
    { title: "New Retailers", link: "new_retailers" }
]

const FCP = [
    { title: "Freshcart programs", link: "freshcart_programs" },
    { title: "Gift Cards", link: "gift_cards" },
    { title: "Promos & Coupons", link: "promos&coupons" },
    { title: "Freshcart Ads", link: "freshcart_ads" },
    { title: "Careers", link: "careers" }
]

export default function Footer() {
    return (
        <footer className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 bg-gray-200 p-4 pt-0 mt-auto">
            <FooterLinks title={"Get to know us"} array={GTKU} />
            <FooterLinks title={"For Consumers"} array={FC} />
            <FooterLinks title={"Become a Shopper"} array={BAS} />
            <FooterLinks title={"Freshcart Programs"} array={FCP} />
        </footer>
    )
}