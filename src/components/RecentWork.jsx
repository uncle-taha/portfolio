import "./RecentWork.css";
import { CircleArrowUp } from "lucide-react";
import Title from "../components/Title";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function RecentWork() {
  return (
    <>
      <Title
        title="Recent Work"
        paragraph="Dive into my latest graphic and web design projects and case studies, showcasing my unique expertise and creative process."
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="parent-div  will-change-transform "
      >
        <div className="container-div  dark:bg-gray-900">
          <div className="div-1 rounded-3xl object-cover dark:bg-gray-900 "></div>
          <Link to="/portfolio/baemin">
            <div class="div-2 cursor-pointer "></div>
          </Link>
          <div class="div-3 "></div>
          <div class="div-4 "></div>
          <div class="div-7 "></div>
          <div class="div-5 "></div>
          <a
            href="https://flying-pan.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="div-6 cursor-pointer"></div>
          </a>
          <a
            href="https://qr-code-generator-chi-nine.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="div-8 cursor-pointer "></div>
          </a>
          <Link to="/portfolio/">
            <div class="div-9 cursor-pointer"></div>
          </Link>
          <div class="div-10 "></div>
          <div class="div-11 ">
            <Link to="/portfolio/baemin">
              <CircleArrowUp className="rotate-45 h-11 w-11 cursor-pointer hover:text-green-600 transition-transform duration-200 hover:rotate-90 " />
            </Link>
          </div>
          <div class="div-12 "></div>
          <div class="div-13 "></div>
          <div class="div-14  ">
            <a
              href="https://flying-pan.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CircleArrowUp className="rotate-45 h-11 w-11 cursor-pointer hover:text-green-600 transition-transform duration-200 hover:rotate-90" />
            </a>
          </div>
          <div class="div-15 ">
            <a
              href="https://qr-code-generator-chi-nine.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CircleArrowUp className="rotate-45 h-11 w-11 cursor-pointer hover:text-green-600 transition-transform duration-200 hover:rotate-90" />
            </a>
          </div>
          <div class="div-16 "></div>
          <div class="div-17 "></div>
          <div class="div-18 ">
            <Link to="/portfolio">
              <CircleArrowUp className="rotate-45 h-11 w-11 cursor-pointer hover:text-green-600 transition-transform duration-200 hover:rotate-90" />
            </Link>
          </div>
          <div class="div-19 "></div>
          <div class="div-20 "></div>
        </div>
      </motion.div>
    </>
  );
}

export default RecentWork;
