import "./Home.css";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Hero from "../../components/hero/Hero";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div>
      <Sidebar />
      <Navbar />
      <Hero />
    </motion.div>
  );
};

export default Home;
