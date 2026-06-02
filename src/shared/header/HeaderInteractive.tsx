import PopupSearch from "@/shared/PopupSearch";
import { useHeaderInteractive, type UseHeaderInteractiveOptions } from "@/shared/hooks/useHeaderInteractive";

/**
 * Shared interactive layer for Header1, Header2, Header3: search popup, sticky menu, sidebar toggle.
 * One component + one hook = less duplicate code and a single code path for better tree-shaking and maintenance.
 */
export default function HeaderInteractive(props: UseHeaderInteractiveOptions = {}) {
    const { isSearchOpen, closeSearch } = useHeaderInteractive(props);

    return <PopupSearch open={isSearchOpen} onClose={closeSearch} />;
}
