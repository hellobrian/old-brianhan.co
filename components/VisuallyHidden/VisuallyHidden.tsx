import styles from "./VisuallyHidden.module.scss";

export default function VisuallyHidden({ as: As, children }) {
  return (
    <>
      <As className="visually-hidden">{children}</As>

      <style jsx>{`
        .visually-hidden:not(:focus):not(:active) {
          clip: rect(0 0 0 0);
          clip-path: inset(50%);
          height: 1px;
          overflow: hidden;
          position: absolute;
          white-space: nowrap;
          width: 1px;
        }
      `}</style>
    </>
  );
}
