import type { ReactNode } from "react";

/**
 * Wrapper for Footer Fixed Bottom reveal effect.
 * Renders .footer-placeholder and .footer-fixed-bottom .at-footer-area
 * so SmoothScrollEffect can run the GSAP timeline (main pulls up, footer scales in).
 *
 * Usage: wrap your footer content inside, and ensure SmoothScrollEffect is mounted (e.g. in layout).
 *
 * <FooterFixedBottom>
 *   <div className="at-footer-area">
 *     ... your footer content ...
 *   </div>
 * </FooterFixedBottom>
 *
 * Or use the inner class on your root:
 * <FooterFixedBottom>
 *   <YourFooterComponent />  // YourFooterComponent root should have class "at-footer-area"
 * </FooterFixedBottom>
 */
export default function FooterFixedBottom({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="footer-placeholder" aria-hidden="true" />
      <div className="footer-fixed-bottom">
        <div className="at-footer-area">{children}</div>
      </div>
    </>
  );
}
