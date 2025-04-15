import AnimatedShape from "../components/AnimatedShape";
import Button from "../components/Button";
import { MoveRight } from "lucide-react";
import { FaTelegram, FaLinkedin, FaGithub } from "react-icons/fa";
import portfolioImg from "../assets/portfolio.svg";
import "./Landing.css";

function Landing() {
  return (
    <div className="min-h-screen w-full bg-[#dfe4f2] flex items-center justify-center py-12 lg:py-24 dark:bg-[#14121a]">
      <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl mx-auto px-4 sm:px-8 gap-12 lg:gap-24 stack-on-small">
        {/* Image/Shape Section - Now comes first on mobile (order-1) */}
        <div className="relative w-full lg:w-1/2 h-full flex items-center justify-center order-1 lg:order-2 ">
          <div className="animated-shape hidden md:block absolute inset-0 z-0 w-full h-full overflow-visible  ">
            <AnimatedShape
              className="absolute w-[120%] h-[120%] -left-10 -top-10 lg:w-[160%] lg:h-[210%] lg:-left-0 lg:-top-70 
            cursor-pointer lg-only-shape-position md-only-shape-position sm-shape 
            "
            />
          </div>
          <img
            src={portfolioImg}
            alt="Portfolio"
            className="relative z-10 rounded-full h-[400px] w-full max-w-[350px] object-cover pointer-events-none 
                        md:translate-x-6 lg:translate-x-0 lg:-top-6 lg:-right-5 
            [@media(max-width:1280px)]:right-[6px] 
            "
          />
        </div>

        {/* Text Content Section - Now comes second on mobile (order-2) */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1 text-stack">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-primary">
            Hello!
          </h1>

          <div className="flex flex-wrap justify-center lg:justify-start items-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-4">
            <span className="mr-2 lg:mr-4 ">My name is</span>
            <button className="relative group">
              <span className="cursor-pointer font-semibold">taha</span>
              <div className="absolute left-1/2 lg:left-full top-full mt-2 w-max max-w-xs px-4 py-2 text-base sm:text-sm text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg transform -translate-x-1/2 lg:translate-x-0 lg:ml-2 hidden sm:block">
                Yes, it's 'taha' with a lowercase 't'
              </div>
            </button>
          </div>

          <div className="mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
            Web Developer
          </div>

          <p className="text-base md:text-lg mt-6 max-w-xl lg:max-w-2xl">
            I'm a Front-End Web Developer and UI/UX Designer, passionate about
            creating visually stunning and user-friendly digital experiences.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 mt-6 px-6 py-3 w-fit rounded-[70px] bg-white/20 shadow-lg backdrop-blur-[5.2px] border border-white/80">
            <span className="hover:text-blue-600 text-center hidden sm:block cursor-pointer">
              Explore Projects
            </span>
            <Button label="Ready to Collab?" icon={MoveRight} />
          </div>

          <div className="flex flex-row justify-center lg:justify-start space-x-6 text-3xl md:text-4xl mt-6 cursor-pointer">
            <FaGithub className="hover:text-[#4078c0] transition-colors" />
            <FaLinkedin className="hover:text-[#0a66c2] transition-colors" />
            <FaTelegram className="hover:text-[#0088cc] transition-colors" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
