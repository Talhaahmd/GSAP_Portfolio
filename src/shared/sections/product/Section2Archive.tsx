import { useMemo, useState } from "react";
import ProductCard from "@/shared/cards/ProductCard";

export type NewArrivalItem = {
    category: string;
    classList: string;
    link: string;
    img: string;
    brand: string;
    title: string;
    price: string;
};

const SORT_OPTIONS = [
    { value: "1", label: "Latest" },
    { value: "2", label: "Oldest" },
    { value: "3", label: "Most Popular" },
];

const parsePrice = (price: string) => {
    const parsed = parseFloat(price.replace(/[^0-9.]/g, ""));
    return Number.isNaN(parsed) ? 0 : parsed;
};

interface Section2ArchiveProps {
    items: NewArrivalItem[];
}

export default function Section2Archive({ items }: Section2ArchiveProps) {
    const [filter, setFilter] = useState<"all" | "woman" | "man">("all");
    const [sortValue, setSortValue] = useState("1");

    const filteredAndSorted = useMemo(() => {
        const filtered =
            filter === "all"
                ? items
                : items.filter((item) => item.category === filter);

        const sorted = filtered.slice();

        switch (sortValue) {
            case "2":
                // Oldest: reverse order
                sorted.reverse();
                break;
            case "3":
                // Most Popular: by price descending
                sorted.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
                break;
            default:
                // Latest: keep original order
                break;
        }

        return sorted;
    }, [items, filter, sortValue]);

    return (
        <>
            <div className="row align-items-end">
                <div className="col-lg-4 mb-lg-0 mb-3">
                    <h2>New Arrivals</h2>
                    <p className="fz-font-lg neutral-900 mb-0">Discover the latest ready-to-wear dresses.</p>
                </div>
                <div className="col-lg-8 ms-auto">
                    <div className="d-flex flex-wrap justify-content-end gap-4">
                        <div className="filter-portfolio d-flex flex-wrap align-items-center justify-content-lg-end gap-2">
                            <button
                                type="button"
                                className={`at-btn filter-btn btn-sm ${filter === "all" ? "active" : ""}`}
                                data-filter="all"
                                onClick={() => setFilter("all")}
                            >
                                All
                            </button>
                            <button
                                type="button"
                                className={`at-btn filter-btn btn-sm ${filter === "woman" ? "active" : ""}`}
                                data-filter="woman"
                                onClick={() => setFilter("woman")}
                            >
                                Woman
                            </button>
                            <button
                                type="button"
                                className={`at-btn filter-btn btn-sm ${filter === "man" ? "active" : ""}`}
                                data-filter="man"
                                onClick={() => setFilter("man")}
                            >
                                Man
                            </button>
                        </div>
                        <select
                            className="nice-select border-0"
                            value={sortValue}
                            onChange={(e) => setSortValue(e.target.value)}
                            aria-label="Select sort order"
                        >
                            {SORT_OPTIONS.map((opt) => (
                                <option key={opt.value} value={opt.value}>
                                    {opt.label}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="col-12 pb-50" />
            </div>
            <div className="row">
                {filteredAndSorted.map((item, idx) => (
                    <div key={`new-arrival-${idx}-${item.title}`} className={item.classList}>
                        <ProductCard
                            link={item.link}
                            img={item.img}
                            title={item.title}
                            brand={item.brand}
                            price={item.price}
                            category={item.category}
                            className="mb-30"
                        />
                    </div>
                ))}
            </div>
        </>
    );
}
