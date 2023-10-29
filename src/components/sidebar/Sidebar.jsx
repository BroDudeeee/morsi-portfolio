import "./Sidebar.css";
import menuImg from "../../assets/menu.png";
import closeImg from "../../assets/close.png";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useClickAway } from "react-use";

const links = ["Home", "Projects", "Contacts"];

const Sidebar = () => {
  const [isOpen, toggleOpen] = useState(false);

  const ref = useRef(null);

  useClickAway(ref, () => toggleOpen(false));

  const variants = {
    closed: {
      opacity: 0,
      x: "-100%",
      transition: {
        delay: 0.1,
        type: "tween",
        delayChildren: 0.5,
        stiffness: 50,
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.1,
        type: "tween",
        stiffness: 50,
        delayChildren: 0.5,
      },
    },
  };

  return (
    <motion.nav
      className="sidebar"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      ref={ref}
    >
      <section
        onClick={() => toggleOpen((prev) => !prev)}
        className={`toggleBtn ${isOpen && "open"}`}
      >
        <img src={isOpen ? closeImg : menuImg} alt="menu" />
      </section>
      <motion.section
        className="links"
        variants={variants}
        initial={closed}
        animate={isOpen ? "open" : "closed"}
      >
        <ul>
          {links.map((link, index) => (
            <motion.li
              key={index}
              variants={variants}
              whileHover={{
                scale: 1.08,
                transition: { duration: 0.3, type: "spring" },
              }}
              whileTap={{ scale: 1 }}
            >
              <a href={`#${link}`} onClick={() => toggleOpen(false)}>
                {link}
              </a>
            </motion.li>
          ))}
        </ul>
      </motion.section>
    </motion.nav>
  );
};

export default Sidebar;
