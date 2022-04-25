import BaseHead from "components/BaseHead";

export default function Base({ children }) {
  return (
    <>
      <BaseHead />
      <main>{children}</main>
    </>
  );
}
