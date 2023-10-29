import "./Hero.css";
import heroImg from "../../assets/hero.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero">
      <motion.section
        className="info"
        initial={{ x: "-200%" }}
        animate={{ x: "0" }}
        transition={{
          delay: "0.3",
          type: "spring",
          stiffness: 100,
          damping: 20,
        }}
      >
        <section>
          <h4 className="name">AHMED MORSI</h4>
          <h2 className="job">Fullstack web developer</h2>
        </section>
        <section className="btns">
          <a href="#Projects" className="worksBtn">
            See My Work
          </a>

          <a href="#Contacts" className="contactBtn">
            Contact Me
          </a>
        </section>
      </motion.section>
      <motion.section
        className="imgSection"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
      >
        <img src={heroImg} alt="ME" />
      </motion.section>
    </section>
  );
};

export default Hero;
