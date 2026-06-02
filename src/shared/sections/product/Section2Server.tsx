import Section1Archive from "./Section2Archive";
import cardShopData from "@/data/cardShop.json";

type NewArrivalsData = {
    NewArrivals?: Array<{
        category: string;
        classList: string;
        link: string;
        img: string;
        brand: string;
        title: string;
        price: string;
    }>;
};

const data = cardShopData as NewArrivalsData;

export default function Section1Server() {
    const items = data.NewArrivals ?? [];

    return (
        <section className="sec-2-shop-archive-1 overflow-hidden pt-60">
            <div className="container">
                <Section1Archive items={items} />
            </div>
        </section>
    );
}
