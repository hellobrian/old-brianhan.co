// packages
import { motion, HTMLMotionProps } from "framer-motion";

// components
import MenuIcon from "components/Icons/MenuIcon";
import CloseIcon from "components/Icons/CloseIcon";

// types
type MenuButtonProps = HTMLMotionProps<"button"> & {
  isOpen?: boolean;
  onClick?: () => void;
};

export default function MenuButton({
  isOpen = false,
  onClick = () => {},
  ...props
}: MenuButtonProps) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9, opacity: 0.5 }}
      style={{ color: "var(--color-white)" }}
      {...props}
    >
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </motion.button>
  );
}
