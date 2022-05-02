import styles from "./VisuallyHidden.module.scss";

export default function VisuallyHidden({ as: As, children }) {
  return <As className={styles.visuallyHidden}>{children}</As>;
}
