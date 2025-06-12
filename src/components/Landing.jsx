// import AnimatedShape from "../components/AnimatedShape";
import Button from "../components/Button";
import { MoveRight } from "lucide-react";
import { FaTelegram, FaLinkedin, FaGithub } from "react-icons/fa";
import portfolioImg from "../assets/portfolio.svg";
import { motion } from "framer-motion";
// import "./Landing.css";
import FloatingPaths from "./Floatingpaths";
import { Link } from "react-router-dom";
import backgroundImg from "/portfolioImg/background.png";

function Landing() {
  return (
    <div
      className="relative z-0 min-h-[calc(var(--vh,1vh)*100)] w-full overflow-hidden bg-[#dfe4f2] flex items-center justify-center py-12 lg:py-24 dark:bg-[#14121a]"
      style={{
        minHeight: "calc(var(--vh, 1vh) * 100)", // Fallback in case CSS doesn't apply
      }}
    >
      <div className="absolute inset-0 z-0 -top-80 -left-80 md:-top-40 md:-left-60 hidden sm:block">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl mx-auto px-4 sm:px-8 gap-12 lg:gap-24 stack-on-small">
        <div className="relative w-full lg:w-1/2 h-full flex items-center justify-center order-1 lg:order-2 max-w-full ">
          <div className="relative">
            <motion.img
              src={backgroundImg}
              initial={{ opacity: 0, scale: 0.9, y: -100 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="absolute scale-210 md:scale-250 z-0 left-32 -top-34 md:left-44 md:-top-48 lg:left-44 lg:-top-64 cursor-pointer"
            />
            <motion.img
              src={portfolioImg}
              alt="Portfolio"
              className="relative z-10 rounded-full h-[400px] w-full max-w-[350px] object-cover pointer-events-none 
                 md:translate-x-6 lg:translate-x-0 lg:-top-6 lg:-right-5 top-8
                 [@media(max-width:1280px)]:right-[6px] will-change-transform"
              initial={{ opacity: 0, scale: 0.9, y: -100, x: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: -100 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1 text-stack will-change-transform"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-primary pt-10">
            Hello!
          </h1>

          <div className="flex flex-wrap justify-center lg:justify-start items-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-4">
            <span className="mr-2 lg:mr-4">My name is</span>
            <button className="relative group">
              <span className="cursor-pointer font-semibold ">taha</span>
              <div
                className="absolute 
        lg:-top-[35px] lg:left-[0px]
        md:top-[0px] md:right-[-210px]
        w-max max-w-xs px-4 py-2 text-base sm:text-sm text-white bg-gray-800 rounded 
        opacity-0 group-hover:opacity-100 transition-opacity duration-700 shadow-lg hidden sm:block"
              >
                Yes, With a lowercase 't'
                <div className="hidden lg:block absolute top-[30px] left-4 w-3 h-3 bg-gray-800 rotate-45"></div>
              </div>
            </button>
          </div>

          <div className="mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
            Web Developer
          </div>

          <p className="text-base md:text-lg mt-6 max-w-xl lg:max-w-2xl px-10">
            I'm a Front-End Web Developer and UI/UX Designer, passionate about
            creating visually stunning and user-friendly digital experiences.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 mt-6 px-6 py-3 w-fit rounded-[70px] bg-white/20 shadow-lg backdrop-blur-[5.2px] border border-white/80">
            <Link to="/portfolio">
              <span className="hover:text-blue-600 text-center hidden sm:block cursor-pointer">
                Explore Projects
              </span>
            </Link>
            <Link to="/contact">
              <Button label="Ready to Collab?" icon={MoveRight} />
            </Link>
          </div>

          <div className="flex flex-row justify-center lg:justify-start space-x-6 text-3xl md:text-4xl mt-6 cursor-pointer z-10">
            <a
              href="https://github.com/uncle-taha"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="hover:text-[#4078c0] transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/taha-497a7820b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="hover:text-[#0a66c2] transition-colors" />
            </a>
            <a
              href="https://t.me/topchikimbu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegram className="hover:text-[#0088cc] transition-colors" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Landing;
