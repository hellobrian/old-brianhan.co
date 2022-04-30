// packages
import { motion } from "framer-motion";

// components
import MenuIcon from "components/Icons/MenuIcon";
import CloseIcon from "components/Icons/CloseIcon";

// hooks
import useToggle from "hooks/useToggle/useToggle";

export default function MenuButton() {
  const { isOpen, open, close, toggle } = useToggle();

  return (
    <motion.button
      type="button"
      onClick={toggle}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </motion.button>
  );
}
