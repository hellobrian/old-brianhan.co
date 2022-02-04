import { Outlet } from "remix";

import styles from "~/styles/blog.css";

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}

export default function Blog() {
  return (
    <>
      <div>Blog</div>

      <Outlet />
    </>
  );
}
