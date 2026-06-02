import { useEffect } from "react";

type Props = {
  title: string;
  description?: string;
  favicon?: string;
};

export default function PageMeta({ title, description, favicon }: Props) {
  useEffect(() => {
    if (!favicon) return;
    const link: HTMLLinkElement =
      document.querySelector('link[rel="shortcut icon"]') ??
      document.querySelector('link[rel="icon"]') ??
      (() => {
        const el = document.createElement("link");
        el.rel = "shortcut icon";
        document.head.appendChild(el);
        return el;
      })();
    const prev = link.href;
    link.type = "image/png";
    link.href = favicon;
    return () => {
      link.href = prev;
    };
  }, [favicon]);

  return (
    <>
      <title>{title}</title>
      {description ? <meta name="description" content={description} /> : null}
    </>
  );
}
