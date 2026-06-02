import { Children, isValidElement, ReactNode } from "react";

/**
 * Renders text by word and by character: each word is wrapped in a span so
 * the line never breaks in the middle of a word; inside each word, characters
 * are wrapped as split-char for CSS/JS reveal animations.
 */
export default function RevealText({ children }: { children: ReactNode }) {
  function renderStringAsWordsAndChars(text: string, keyPrefix: string, keyStart: { current: number }) {
    const out: ReactNode[] = [];
    const tokens = text.split(/(\s+)/);

    tokens.forEach((token) => {
      if (/^\s+$/.test(token)) {
        for (let s = 0; s < token.length; s++) {
          out.push(
            <span key={`${keyPrefix}-${keyStart.current++}`} className="split-char" style={{ display: "inline-block" }}>
              {"\u00A0"}
            </span>,
          );
        }
      } else {
        out.push(
          <span
            key={`${keyPrefix}-${keyStart.current++}`}
            className="split-word"
            style={{ whiteSpace: "nowrap", display: "inline-block" }}
          >
            {[...token].map((char) => (
              <span
                key={`${keyPrefix}-${keyStart.current++}`}
                className="split-char"
                style={{ display: "inline-block" }}
              >
                {char}
              </span>
            ))}
          </span>,
        );
      }
    });
    return out;
  }

  function renderContent(node: ReactNode, keyPrefix: string): ReactNode[] {
    const out: ReactNode[] = [];
    const keyStart = { current: 0 };
    Children.forEach(node, (child) => {
      if (typeof child === "string") {
        out.push(...renderStringAsWordsAndChars(child, keyPrefix, keyStart));
        return;
      }
      if (isValidElement(child) && child.type === "br") {
        out.push(<br key={`${keyPrefix}-${keyStart.current++}`} />);
        return;
      }
      if (isValidElement(child)) {
        const nestedChildren = (child.props as { children?: ReactNode }).children;
        if (nestedChildren != null) {
          out.push(
            <span key={`${keyPrefix}-${keyStart.current++}`} style={{ display: "inline-block" }}>
              {renderContent(nestedChildren, `${keyPrefix}-${keyStart.current}`)}
            </span>,
          );
          return;
        }
      }
      out.push(child);
    });
    return out;
  }

  return <>{renderContent(children, "r")}</>;
}

