// packages
import { motion, AnimatePresence } from "framer-motion";

// components
import AppLink from "components/AppLink/AppLink";

// styles
import styles from "./NavMenu.module.scss";

// constants
const NAV_LINKS = [
  { name: "home", href: "/" },
  { name: "blog", href: "/blog" },
];

const container = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: -10 },
  show: { opacity: 1, x: 0 },
};

export default function NavMenu({ isOpen = false, toggle = () => {} }) {
  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.ul
          className={styles.container}
          variants={container}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          {NAV_LINKS.map((navLink) => (
            <motion.li
              key={navLink.name}
              className={styles.item}
              variants={item}
            >
              <AppLink
                className={styles.appLink}
                href={navLink.href}
                onClick={toggle}
              >
                {navLink.name}
              </AppLink>
            </motion.li>
          ))}
        </motion.ul>
      )}
    </AnimatePresence>
  );
}
