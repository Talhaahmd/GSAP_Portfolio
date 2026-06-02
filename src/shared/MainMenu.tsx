import { NavLink } from "react-router-dom";
import { MainMenuRootList } from "@/shared/mobile-menu/MobileMenuCloneContext";

type Item = { to: string; label: string };

const MENU_LINKS: Item[] = [
  { to: "/index-16", label: "Home" },
  { to: "/about-3", label: "About Me" },
  { to: "/services-2", label: "Services" },
  { to: "/portfolio-3", label: "Portfolio" },
  { to: "/archive-4", label: "Blog" },
  { to: "/contact-2", label: "Contact" },
];

function LinkSwap({ label }: { label: string }) {
  return (
    <span className="at-link-swap">
      <span className="text-1">{label}</span>
      <span className="text-2">{label}</span>
    </span>
  );
}

function MenuLink({ to, label }: Item) {
  return (
    <NavLink to={to} className={({ isActive }) => (isActive ? "active" : undefined)}>
      <LinkSwap label={label} />
    </NavLink>
  );
}

export default function MainMenu() {
  return (
    <MainMenuRootList>
      {MENU_LINKS.map((item) => (
        <li key={item.label}>
          <MenuLink to={item.to} label={item.label} />
        </li>
      ))}
    </MainMenuRootList>
  );
}