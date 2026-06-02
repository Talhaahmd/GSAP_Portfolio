import { useMemo, useState, type ReactNode } from "react";

export type FilterValue = "all" | "design" | "photography" | "marketing";
export type SortValue = "latest" | "oldest" | "most-popular";

export type PortfolioFilterSortItem = {
    category: FilterValue;
    [key: string]: unknown;
};

export type LoadMoreProps = {
    hasMore: boolean;
    onLoadMore: () => void;
};

const INITIAL_PAGE_SIZE = 4;
const LOAD_MORE_SIZE = 4;

const FILTER_OPTIONS: { value: FilterValue; label: string }[] = [
    { value: "all", label: "All Work" },
    { value: "design", label: "UI / UX Design" },
    { value: "photography", label: "Photography" },
    { value: "marketing", label: "Digital Marketing" },
];

type PortfolioFilterSortProps<T extends PortfolioFilterSortItem> = {
    items: T[];
    children: (visibleItems: T[], loadMoreProps: LoadMoreProps) => ReactNode;
    /** When false, only load-more logic is used (no filter/sort bar). Default true. */
    showFilterSortBar?: boolean;
    /** Optional: extra class for the filter column (e.g. "col-lg-8 mx-auto" for centered layout) */
    filterColumnClassName?: string;
    /** Optional: extra class for the filter flex wrapper (e.g. "justify-content-center") */
    filterFlexClassName?: string;
    /** Optional: render an empty column before the filter column (e.g. "col-2") */
    leadingColumnClassName?: string;
};

export default function PortfolioFilterSort<T extends PortfolioFilterSortItem>({
    items,
    children,
    showFilterSortBar = true,
    filterColumnClassName = "col-lg-8",
    filterFlexClassName = "",
    leadingColumnClassName,
}: PortfolioFilterSortProps<T>) {
    const [activeFilter, setActiveFilter] = useState<FilterValue>("all");
    const [sortBy, setSortBy] = useState<SortValue>("latest");
    const [visibleCount, setVisibleCount] = useState(INITIAL_PAGE_SIZE);

    const filteredAndSortedItems = useMemo(() => {
        if (!showFilterSortBar) return items;
        let result = items.filter(
            (item) => activeFilter === "all" || item.category === activeFilter
        );
        if (sortBy === "oldest") {
            result = [...result].reverse();
        }
        if (sortBy === "most-popular") {
            // Placeholder: keep order or apply custom logic later
            result = [...result];
        }
        return result;
    }, [items, activeFilter, sortBy, showFilterSortBar]);

    const visibleItems = useMemo(
        () => filteredAndSortedItems.slice(0, visibleCount),
        [filteredAndSortedItems, visibleCount]
    );

    const hasMore = visibleCount < filteredAndSortedItems.length;

    const onLoadMore = () => {
        setVisibleCount((prev) => Math.min(prev + LOAD_MORE_SIZE, filteredAndSortedItems.length));
    };

    const resetVisibleCount = () => {
        if (showFilterSortBar) setVisibleCount(INITIAL_PAGE_SIZE);
    };

    return (
        <>
            {showFilterSortBar && (
            <div className="row align-items-center">
                {leadingColumnClassName ? (
                    <div className={leadingColumnClassName} />
                ) : null}
                <div className={filterColumnClassName}>
                    <div className={`filter-portfolio d-flex flex-wrap align-items-center gap-2 ${filterFlexClassName}`.trim()}>
                        {FILTER_OPTIONS.map(({ value, label }) => (
                            <button
                                key={value}
                                type="button"
                                className={`at-btn filter-btn btn-sm ${activeFilter === value ? "active" : ""}`}
                                data-filter={value}
                                onClick={() => {
                                    setActiveFilter(value);
                                    resetVisibleCount();
                                }}
                            >
                                {label}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="col-lg-2 ms-auto text-end mt-lg-0 mt-3">
                    <div className="d-flex justify-content-end">
                        <select
                            className="nice-select border-0"
                            value={sortBy}
                            onChange={(e) => {
                                setSortBy(e.target.value as SortValue);
                                resetVisibleCount();
                            }}
                            aria-label="Select sort order"
                        >
                            <option className="option" value="latest">
                                Latest
                            </option>
                            <option className="option" value="oldest">
                                Oldest
                            </option>
                            <option className="option" value="most-popular">
                                Most Popular
                            </option>
                        </select>
                    </div>
                </div>
                <div className="col-12 pb-30" />
            </div>
            )}
            {children(visibleItems, { hasMore, onLoadMore })}
        </>
    );
}
