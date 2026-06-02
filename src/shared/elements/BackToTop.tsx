import { useBackToTop } from "@/shared/hooks/useBackToTop";

export default function BackToTop() {
  const { isVisible, scrollToTop } = useBackToTop();

  return (
    <div className={`back-to-top-wrapper ${isVisible ? "back-to-top-btn-show" : ""}`}>
      <button type="button" className="back-to-top-btn" onClick={scrollToTop} aria-label="Back to top">
        <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path
            d="M11 6L6 1L1 6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}

