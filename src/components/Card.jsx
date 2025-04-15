import { PenLine, MoveRight } from "lucide-react";
import { motion } from "framer-motion";
import "./Card.css";

export default function Card({
  cardLogo,
  cardTitle,
  cardParagraph,
  cardButton,
  cardImg,
  darkMode,
  reverseLayout, // when its false, image appear left side of card
}) {
  const mode =
    !darkMode &&
    (reverseLayout
      ? "md:flex-row-reverse bg-light-reverse"
      : "md:flex-row bg-light");

  return (
    <div
      className={`flex items-center justify-center px-4 sm:px-10  dark:bg-[#14121a] pb-18 ${
        darkMode
          ? "bg-[#14121a] text-white"
          : "bg-[#dfe4f2] text-black overflow-x-hidden"
      }`}
    >
      <div
        className={` ${mode}  w-full max-w-6xl rounded-3xl shadow-md p-6 md:p-12 flex gap-8 
          items-center flex-col lg:py-2 lg:px-20  dark:bg-white/20 dark:shadow-sm shadow-[#E6EBFF] 
          backdrop-blur-[5.2px] border border-white/80
         
        `}
      >
        {/* SVG/Image div - forced to top on mobile with order-1 */}
        <div className="w-full max-w-lg flex justify-center order-1 md:order-none my-10">
          <div className="w-full max-w-lg  flex justify-center bg-transparent ">
            {cardImg}
          </div>
        </div>

        {/* Text content div - forced below on mobile with order-2 */}
        <div className="flex-1 space-y-6 w-full order-2 md:order-none md:my-10">
          <div className="flex items-center gap-2">
            <PenLine className="h-5 w-5 text-indigo-500 dark:text-indigo-400" />
            <span className="text-indigo-500 font-medium dark:text-indigo-400">
              {cardLogo}
            </span>
          </div>

          <h1 className=" text-3xl md:text-5xl font-bold text-gray-800 leading-tight min-w-[250px] dark:text-gray-200 ">
            {cardTitle}
          </h1>

          <p className="text-base md:text-lg text-gray-600 max-w-lg min-w-[250px] dark:text-gray-300 ">
            {cardParagraph}
          </p>

          <div className="flex flex-row items-center pt-4 group cursor-pointer hover:text-blue-600">
            <button className="font-medium text-gray-800 hover:text-blue-600 cursor-pointer flex items-center dark:text-gray-200 dark:hover:text-indigo-400">
              {cardButton}
              <span className="ml-2 group-hover:translate-x-1 transition-transform">
                <MoveRight />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
