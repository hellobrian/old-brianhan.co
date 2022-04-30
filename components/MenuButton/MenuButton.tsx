// packages
import { motion, HTMLMotionProps } from "framer-motion";

// components
import MenuIcon from "components/Icons/MenuIcon";
import CloseIcon from "components/Icons/CloseIcon";

// https://www.carlrippon.com/Different-ways-to-strongly-type-function-component-props-with-typescript/
// https://github.com/framer/motion/issues/665#issuecomment-783401005
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
      whileTap={{ scale: 0.9 }}
      {...props}
    >
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </motion.button>
  );
}
