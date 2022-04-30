// components
import MenuIcon from "components/Icons/MenuIcon";
import CloseIcon from "components/Icons/CloseIcon";

// hooks
import useToggle from "hooks/useToggle/useToggle";

import styles from "./MenuButton.module.scss";

export default function MenuButton({ active }) {
  const { isOpen, open, close, toggle } = useToggle();

  return (
    <button type="button" onClick={toggle}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </button>
  );
}
