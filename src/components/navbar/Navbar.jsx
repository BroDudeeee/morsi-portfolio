import "./Navbar.css";
import blogImg from "../../assets/blogging.png";
import githubImg from "../../assets/github.png";
import linkedinImg from "../../assets/linkedin.png";
import { motion } from "framer-motion";

const Navbar = () => {
  const variants = {
    closed: { opacity: 0 },
    open: {
      opacity: 1,
      transition: { delay: 0.3, ease: "linear", stiffness: "100" },
    },
  };

  return (
    <header className="header">
      <motion.nav variants={variants} initial="closed" animate="open">
        <a href="/">
          <h3>Ahmed Morsi</h3>
        </a>

        <ul>
          <li>
            <a href="#" target="_blank">
              <img src={blogImg} alt="blog" />
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              <img src={linkedinImg} alt="blog" />
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              <img src={githubImg} alt="blog" />
            </a>
          </li>
        </ul>
      </motion.nav>
    </header>
  );
};

export default Navbar;
