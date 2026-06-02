import React, { useState, useCallback, useRef, useEffect } from "react";

interface TabItem {
  id: string;
  title: React.ReactNode;
  content: React.ReactNode;
  navItemClassName?: string;
  linkClassName?: string;
  paneClassName?: string;
}

interface TabsProps {
  tabs: TabItem[];
  defaultActiveId?: string;
  navClassName?: string;
  paneClassName?: string;
}

const combineClassNames = (...classes: Array<string | undefined | false>) =>
  classes.filter(Boolean).join(" ");

const Tabs: React.FC<TabsProps> = ({
  tabs,
  defaultActiveId,
  navClassName = "nav nav-tabs d-flex flex-row flex-wrap ps-0 mt-0 mb-4",
  paneClassName = "tab-content",
}) => {
  const [activeId, setActiveId] = useState<string>(defaultActiveId ?? tabs[0]?.id ?? "");
  const tabRefs = useRef<Array<HTMLAnchorElement | null>>([]);

  const showTab = useCallback(
    (id: string) => {
      if (id === activeId) return;
      setActiveId(id);
    },
    [activeId],
  );

  useEffect(() => {
    const idx = tabs.findIndex((t) => t.id === activeId);
    const link = tabRefs.current[idx];
    if (link) {
      const ev = new Event("shown.bs.tab");
      link.dispatchEvent(ev);
    }
  }, [activeId, tabs]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLAnchorElement>, index: number) => {
    switch (e.key) {
      case "Enter":
      case " ": {
        e.preventDefault();
        showTab(tabs[index].id);
        break;
      }
      case "ArrowRight":
      case "ArrowLeft": {
        e.preventDefault();
        const dir = e.key === "ArrowRight" ? 1 : -1;
        const nextIndex = (index + dir + tabs.length) % tabs.length;
        tabRefs.current[nextIndex]?.focus();
        break;
      }
    }
  };

  return (
    <>
      <ul className={navClassName} role="tablist">
        {tabs.map((tab, idx) => (
          <li key={tab.id} className={combineClassNames("nav-item", tab.navItemClassName)}>
            <h4 className="mb-0">
              <a
                href={`#${tab.id}`}
                className={combineClassNames(
                  "nav-link",
                  tab.linkClassName,
                  activeId === tab.id && "active",
                )}
                role="tab"
                aria-selected={activeId === tab.id}
                ref={(el) => {
                  tabRefs.current[idx] = el;
                }}
                onClick={(e) => {
                  e.preventDefault();
                  showTab(tab.id);
                }}
                onKeyDown={(e) => handleKeyDown(e, idx)}
              >
                {tab.title}
              </a>
            </h4>
          </li>
        ))}
      </ul>

      <div className={paneClassName}>
        {tabs.map((tab) => (
          <div
            key={tab.id}
            id={tab.id}
            className={combineClassNames(
              "tab-pane",
              "fade",
              tab.paneClassName,
              activeId === tab.id && "show active",
            )}
            role="tabpanel"
          >
            {tab.content}
          </div>
        ))}
      </div>
    </>
  );
};

export default Tabs;
