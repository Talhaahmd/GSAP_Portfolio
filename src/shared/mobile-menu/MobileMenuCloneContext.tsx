import { createContext, type ReactNode, type RefObject, useContext, useRef } from "react";

type MobileMenuCloneContextValue = {
  menuSourceRef: RefObject<HTMLUListElement | null>;
  offcanvasRootRef: RefObject<HTMLDivElement | null>;
};

const MobileMenuCloneContext = createContext<MobileMenuCloneContextValue | null>(null);

export function MobileMenuCloneProvider({ children }: { children: ReactNode }) {
  const menuSourceRef = useRef<HTMLUListElement>(null);
  const offcanvasRootRef = useRef<HTMLDivElement>(null);
  const value: MobileMenuCloneContextValue = { menuSourceRef, offcanvasRootRef };
  return <MobileMenuCloneContext.Provider value={value}>{children}</MobileMenuCloneContext.Provider>;
}

export function useMobileMenuCloneRefs() {
  const ctx = useContext(MobileMenuCloneContext);
  if (!ctx) throw new Error("useMobileMenuCloneRefs must be used within MobileMenuCloneProvider");
  return ctx;
}

/** Root desktop menu list; ref is used by MenuClone instead of document.querySelector. */
export function MainMenuRootList({ children }: { children: ReactNode }) {
  const { menuSourceRef } = useMobileMenuCloneRefs();
  return <ul ref={menuSourceRef}>{children}</ul>;
}

/** Scopes offcanvas menu queries to this subtree for MenuClone. */
export function OffcanvasMenuMount({ children }: { children: ReactNode }) {
  const { offcanvasRootRef } = useMobileMenuCloneRefs();
  return (
    <div ref={offcanvasRootRef} style={{ display: "contents" }}>
      {children}
    </div>
  );
}

