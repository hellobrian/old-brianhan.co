// components
import MenuButton from "components/MenuButton/MenuButton";
import NavMenu from "./NavMenu";

// hooks
import useToggle from "hooks/useToggle/useToggle";

// styles
import styles from "./Nav.module.scss";

export default function Nav() {
  const { toggle, isOpen } = useToggle(false);

  return (
    <>
      <nav className={styles.nav}>
        <MenuButton isOpen={isOpen} onClick={toggle} />
      </nav>
      <NavMenu isOpen={isOpen} toggle={toggle} />
    </>
  );
}
