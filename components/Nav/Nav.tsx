import { useEffect, useMemo } from "react";

// components
import MenuButton from "components/MenuButton/MenuButton";
import NavMenu from "./NavMenu";

// hooks
import useToggle from "hooks/useToggle/useToggle";
import useMediaQuery from "hooks/useMediaQuery";

// styles
import styles from "./Nav.module.scss";

export default function Nav() {
  const { toggle, close, isOpen } = useToggle(false);
  const isMobile = useMediaQuery("(max-width: 672px)");
  useEffect(() => {
    if (!isMobile) {
      close();
    }
  }, [isMobile, close]);

  return (
    <>
      <nav className={styles.nav}>
        {isMobile && <MenuButton isOpen={isOpen} onClick={toggle} />}
      </nav>
      {isMobile && <NavMenu isOpen={isOpen} toggle={toggle} />}
    </>
  );
}
