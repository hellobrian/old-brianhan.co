// packages
import { motion, AnimatePresence } from "framer-motion";

// components
import MenuButton from "components/MenuButton/MenuButton";
import AppLink from "components/AppLink/AppLink";

// hooks
import useToggle from "hooks/useToggle/useToggle";

// images
import svg from "./layered-waves-haikei.svg";

const NAV_LINKS = [
  { name: "home", href: "/" },
  { name: "blog", href: "/blog" },
];

function NavMenu({ isOpen = false, toggle = () => {} }) {
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

  const backgroundImage = `url("data:image/svg+xml,%3Csvg id='visual' viewBox='0 0 600 900' width='600' height='900' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1'%3E%3Crect x='0' y='0' width='600' height='900' fill='%23001220'%3E%3C/rect%3E%3Cpath d='M0 597L16.7 590.3C33.3 583.7 66.7 570.3 100 564.8C133.3 559.3 166.7 561.7 200 558.8C233.3 556 266.7 548 300 560.2C333.3 572.3 366.7 604.7 400 614.7C433.3 624.7 466.7 612.3 500 606C533.3 599.7 566.7 599.3 583.3 599.2L600 599L600 901L583.3 901C566.7 901 533.3 901 500 901C466.7 901 433.3 901 400 901C366.7 901 333.3 901 300 901C266.7 901 233.3 901 200 901C166.7 901 133.3 901 100 901C66.7 901 33.3 901 16.7 901L0 901Z' fill='%23ffc0cb'%3E%3C/path%3E%3Cpath d='M0 666L16.7 667.7C33.3 669.3 66.7 672.7 100 669.8C133.3 667 166.7 658 200 658.8C233.3 659.7 266.7 670.3 300 671.7C333.3 673 366.7 665 400 662.8C433.3 660.7 466.7 664.3 500 678.5C533.3 692.7 566.7 717.3 583.3 729.7L600 742L600 901L583.3 901C566.7 901 533.3 901 500 901C466.7 901 433.3 901 400 901C366.7 901 333.3 901 300 901C266.7 901 233.3 901 200 901C166.7 901 133.3 901 100 901C66.7 901 33.3 901 16.7 901L0 901Z' fill='%23e67a96'%3E%3C/path%3E%3Cpath d='M0 753L16.7 760.7C33.3 768.3 66.7 783.7 100 795.7C133.3 807.7 166.7 816.3 200 808.2C233.3 800 266.7 775 300 775.8C333.3 776.7 366.7 803.3 400 802.7C433.3 802 466.7 774 500 768.8C533.3 763.7 566.7 781.3 583.3 790.2L600 799L600 901L583.3 901C566.7 901 533.3 901 500 901C466.7 901 433.3 901 400 901C366.7 901 333.3 901 300 901C266.7 901 233.3 901 200 901C166.7 901 133.3 901 100 901C66.7 901 33.3 901 16.7 901L0 901Z' fill='%23c62368'%3E%3C/path%3E%3C/svg%3E")`;

  return (
    <>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.ul
            variants={container}
            initial="hidden"
            animate="show"
            exit="hidden"
            style={{
              position: "relative",
              height: "calc(100vh - 88px)",
              listStyleType: "none",
              margin: 0,
              padding: "0 32px",
              backgroundColor: "var(--color-navy)",
            }}
          >
            {NAV_LINKS.map((navLink) => (
              <motion.li
                key={navLink.name}
                variants={item}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8 }}
                style={{ marginBottom: "1rem", width: "min-content" }}
              >
                <AppLink
                  href={navLink.href}
                  onClick={toggle}
                  style={{
                    textDecoration: "none",
                    fontSize: "1.4rem",
                    fontFamily: "var(--space-grotesk)",
                    fontWeight: 500,
                    color: "white",
                  }}
                >
                  {navLink.name}
                </AppLink>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </>
  );
}

export default function Nav() {
  const { toggle, isOpen } = useToggle(false);

  return (
    <>
      <nav>
        <MenuButton isOpen={isOpen} onClick={toggle} />
      </nav>
      <NavMenu isOpen={isOpen} toggle={toggle} />

      <style jsx>
        {`
          nav {
            background: var(--color-navy);
            display: flex;
            padding: 32px;
          }
        `}
      </style>
    </>
  );
}
