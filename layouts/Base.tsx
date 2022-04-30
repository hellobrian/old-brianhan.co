// components
import BaseHead from "components/BaseHead";
import Nav from "components/Nav/Nav";

export default function Base({ children }) {
  return (
    <>
      <BaseHead />
      <div className="page">
        <Nav />
        <main>{children}</main>
      </div>
      <style jsx>{`
        .page {
          display: grid;
        }
      `}</style>
    </>
  );
}
