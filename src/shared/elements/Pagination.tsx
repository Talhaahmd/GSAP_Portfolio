import { MouseEvent } from "react";

interface PaginationProps {
  classList?: string;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  /** Optional base path for links (e.g. "/archive-1"). If not set, uses "#" with onClick only. */
  basePath?: string;
}

export default function Pagination({
  classList = "",
  currentPage,
  totalPages,
  onPageChange,
  basePath = "#",
}: PaginationProps) {
  const getPageItems = (): (number | string)[] => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    if (currentPage <= 3) {
      return [1, 2, 3, "...", totalPages];
    }
    if (currentPage >= totalPages - 2) {
      return [1, "...", totalPages - 2, totalPages - 1, totalPages];
    }
    return [1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages];
  };

  const handlePrev = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  const handlePageClick = (e: MouseEvent<HTMLAnchorElement>, page: number) => {
    e.preventDefault();
    if (page !== currentPage) onPageChange(page);
  };

  const pageItems = getPageItems();

  return (
    <div className={`${classList} col-lg-6 col-md-8 mx-auto`}>
      <nav className="w-100">
        <ul className="pagination gap-2 justify-content-center">
          <li className="page-item me-auto">
            <a
              href={currentPage > 1 ? `${basePath}?page=${currentPage - 1}` : "#"}
              onClick={handlePrev}
              aria-label="Previous"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="13"
                viewBox="0 0 14 13"
                fill="none"
              >
                <path
                  d="M3.19036 5.64852H13.3333V7.31518H3.19036L7.66033 11.7851L6.48183 12.9636L0 6.48185L6.48183 0L7.66033 1.17851L3.19036 5.64852Z"
                  fill="currentColor"
                />
              </svg>
              <span className="text-uppercase"> Prev</span>
            </a>
          </li>

          {pageItems.map((item, idx) =>
            typeof item === "number" ? (
              <li
                key={item}
                className={`page-item${item === totalPages && totalPages > 4 ? " d-none d-md-block" : ""}`}
              >
                <h6 className="mb-0">
                  <a
                    className={`pagination_item${item === currentPage ? " current" : ""}`}
                    href={basePath === "#" ? "#" : `${basePath}?page=${item}`}
                    onClick={(e) => handlePageClick(e, item)}
                  >
                    {" "}
                    {item}{" "}
                  </a>
                </h6>
              </li>
            ) : (
              <li key={`ellipsis-${idx}`} className="page-item">
                <h6 className="mb-0">
                  <a className="pagination_item" href="#" onClick={(e) => e.preventDefault()}>
                    {" "}
                    ...{" "}
                  </a>
                </h6>
              </li>
            )
          )}

          <li className="page-item ms-auto">
            <a
              href={
                currentPage < totalPages
                  ? `${basePath}?page=${currentPage + 1}`
                  : "#"
              }
              onClick={handleNext}
              aria-label="Next"
            >
              <span className="text-uppercase">Next</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
              >
                <path
                  d="M12.5 6.5L17.2143 11L12.5 15.5"
                  stroke="currentColor"
                  strokeWidth="1.28571"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.9999 11H4.78564"
                  stroke="currentColor"
                  strokeWidth="1.28571"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
