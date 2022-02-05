import { useState } from "react";
import { Outlet } from "remix";

import styles from "~/styles/blog.css";
import darkModeStyles from "~/styles/blog-dark-mode.css";

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
    {
      rel: "stylesheet",
      href: darkModeStyles,
    },
  ];
}

function useDarkMode() {
  const [darkMode, setDarkMode] = useState(false);
  const toggle = () => setDarkMode(!darkMode);
  const classList = darkMode ? "isDark" : "";

  return { darkMode, toggle, classList };
}

export default function Blog() {
  const { darkMode, toggle, classList } = useDarkMode();

  return (
    <div className={classList}>
      <div>
        Blog
        <button type="button" onClick={toggle} style={{ position: "fixed" }}>
          dark mode: {darkMode ? "On" : "Off"}
        </button>
      </div>

      <Outlet />
    </div>
  );
}
