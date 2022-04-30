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
        <main>{children}</main>
      </div>
      <style jsx>{`
        .page {
          display: grid;
          grid-template-rows: 88px 1fr;
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
