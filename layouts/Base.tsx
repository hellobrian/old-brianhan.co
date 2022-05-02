import { useEffect } from "react";
// components
import BaseHead from "components/BaseHead";
import Nav from "components/Nav/Nav";

export default function Base({ children }) {
  return (
    <>
      <BaseHead />
      <div className="page">
        <nav>
          <Nav />
        </nav>
        <main>
          <div>{children}</div>
        </main>
      </div>
      <style jsx>{`
        .page {
          display: grid;
          grid-template-rows: var(--nav-height) 1fr;
          height: 100vh;
        }

        .page > nav {
          grid-row-start: 1;
        }

        .page > main {
          grid-row-start: 2;
        }
      `}</style>
    </>
  );
}
