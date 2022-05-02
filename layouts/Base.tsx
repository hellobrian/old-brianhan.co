// components
import BaseHead from "components/BaseHead";
import Nav from "components/Nav/Nav";

// styles
import styles from "./Base.module.scss";

export default function Base({ children }) {
  return (
    <>
      <BaseHead />
      <div className={styles.page}>
        <nav>
          <Nav />
        </nav>
        <main>
          <div>{children}</div>
        </main>
      </div>
    </>
  );
}
