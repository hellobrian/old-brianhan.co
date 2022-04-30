// packages
import useDelayedRender from "use-delayed-render";

// components
import MenuIcon from "components/Icons/MenuIcon";
import CloseIcon from "components/Icons/CloseIcon";

// hooks
import useToggle from "hooks/useToggle/useToggle";

import styles from "./MenuButton.module.scss";

export default function MenuButton({ active }) {
  const { isOpen, open, close, toggle } = useToggle();

  const { mounted, rendered } = useDelayedRender(isOpen, {
    enterDelay: 200,
    exitDelay: 200,
  });

  console.log({ active, mounted, rendered });

  return (
    <button type="button" onClick={toggle}>
      {isOpen ? (
        <CloseIcon className={rendered ? styles.fadeIn : styles.fadeOut} />
      ) : (
        <MenuIcon className={rendered ? styles.fadeIn : styles.fadeOut} />
      )}
    </button>
  );
}
