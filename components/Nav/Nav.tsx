// packages
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

// components
import MenuButton from "components/MenuButton/MenuButton";

// hooks
import useToggle from "hooks/useToggle/useToggle";

const NAV_LINKS = [
  { name: "home", href: "/" },
  { name: "blog", href: "/blog" },
];

export default function Nav() {
  const { toggle, isOpen } = useToggle(false);

  return (
    <>
      <nav>
        <MenuButton isOpen={isOpen} onClick={toggle} />
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {NAV_LINKS.map((item, index) => (
              <motion.li
                key={item.name}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Link href={item.href}>
                  <a onClick={toggle}>{item.name}</a>
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      <style jsx>
        {`
          nav {
            background: pink;
            display: flex;
            padding: 32px;
          }

          ul {
            background: teal;
            list-style-type: none;
            margin: 0;
            padding: 0 32px;
            height: calc(100vh - 88px);
            width: 100%;
          }

          a {
            text-decoration: none;
            color: black;
            font-size: 1.2rem;
          }
        `}
      </style>
    </>
  );
}
