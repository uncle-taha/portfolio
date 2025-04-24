import { CircleArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import Title from "../components/Title";
import pic1 from "../assets/pic1.png";
import pic2 from "../assets/pic2.png";
import pic3 from "../assets/pic3.png";
import pic4 from "../assets/pic4.png";

function SmallScreens() {
  return (
    <>
      <Title
        title="Recent Work"
        paragraph="Explore my latest graphic and web design work, crafted to inspire and showcase my unique expertise."
        className="px-10 md:px-10 -mb-10"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className=" flex items-center justify-center px-4 py-2 md:px-10 mb-10 "
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:grid-cols-2 sm:gap-6 w-full max-w-6xl bg-white p-10 rounded-3xl dark:bg-gray-900 dark:shadow-lg shadow-black/4 backdrop-blur-[5.2px] dark:border">
          {/* Top left */}
          <div
            className="group relative col-span-1 md:col-span-8 aspect-square md:aspect-[2/1]  rounded-[34px] bg-left-top bg-cover bg-no-repeat cursor-pointer overflow-hidden"
            style={{ backgroundImage: `url(${pic1})` }}
          >
            <div className="absolute inset-0 bg-white/20 opacity-0 md:group-hover:opacity-100 rounded-[34px] transition-opacity duration-300 ease-in-out pointer-events-none z-10" />
            <span className="absolute left-16 w-10 h-10 bg-transparent rounded-tl-[24px] [box-shadow:-20px_-20px_0_white] dark:[box-shadow:-20px_-20px_0_#111827] "></span>
            <span className="absolute top-16 w-10 h-10 bg-transparent rounded-tl-[24px] [box-shadow:-20px_-20px_0_white] dark:[box-shadow:-20px_-20px_0_#111827]"></span>
            <CircleArrowUp className="relative z-20 rotate-45 h-14 w-14 cursor-pointer hover:text-green-600 transition-transform duration-200 hover:rotate-90 bg-white dark:bg-gray-900 ring-11 md:ring-10 ring-white rounded-[50px] dark:ring-[#111827]" />
          </div>

          {/* Top right */}
          <div
            className="group relative col-span-1 md:col-span-4 aspect-square bg-[#5271b8] rounded-[34px] bg-left-top bg-cover bg-no-repeat cursor-pointer "
            style={{ backgroundImage: `url(${pic2})` }}
          >
            <div className="absolute inset-0 bg-white/20 opacity-0 md:group-hover:opacity-100 rounded-[34px] transition-opacity duration-300 ease-in-out pointer-events-none z-10" />
            <span className="absolute left-16 w-10 h-10 bg-transparent rounded-tl-[24px] [box-shadow:-20px_-20px_0_white] dark:[box-shadow:-20px_-20px_0_#111827] "></span>
            <span className="absolute top-16 w-10 h-10 bg-transparent rounded-tl-[24px] [box-shadow:-20px_-20px_0_white] dark:[box-shadow:-20px_-20px_0_#111827]"></span>
            <CircleArrowUp className="rotate-45 h-14 w-14 cursor-pointer hover:text-green-600 transition-transform duration-200 hover:rotate-90 bg-white dark:bg-gray-900 ring-11 md:ring-10 ring-white rounded-[50px] dark:ring-[#111827]" />
          </div>

          {/* Bottom left */}
          <div
            className="group relative col-span-1 md:col-span-5 aspect-square md:aspect-auto bg-[#5271b8] rounded-[34px] bg-left-top bg-cover bg-no-repeat cursor-pointer"
            style={{ backgroundImage: `url(${pic3})` }}
          >
            <div className="absolute inset-0 bg-white/20 opacity-0 md:group-hover:opacity-100 rounded-[34px] transition-opacity duration-300 ease-in-out pointer-events-none z-10" />
            <span className="absolute left-16 w-10 h-10 bg-transparent rounded-tl-[24px] [box-shadow:-20px_-20px_0_white] dark:[box-shadow:-20px_-20px_0_#111827] "></span>
            <span className="absolute top-16 w-10 h-10 bg-transparent rounded-tl-[24px] [box-shadow:-20px_-20px_0_white] dark:[box-shadow:-20px_-20px_0_#111827]"></span>
            <CircleArrowUp className="rotate-45 h-14 w-14 cursor-pointer hover:text-green-600 transition-transform duration-200 hover:rotate-90 bg-white dark:bg-gray-900 ring-11 md:ring-10 ring-white rounded-[50px] dark:ring-[#111827]" />
          </div>

          {/* Bottom right */}
          <div
            className="group relative col-span-1 md:col-span-7 aspect-square md:aspect-[2/1] bg-[#5271b8] rounded-[34px] bg-left-top bg-cover bg-no-repeat cursor-pointer"
            style={{ backgroundImage: `url(${pic4})` }}
          >
            <div className="absolute inset-0 bg-white/20 opacity-0 md:group-hover:opacity-100 rounded-[34px] transition-opacity duration-300 ease-in-out pointer-events-none z-10" />
            <span className="absolute left-16 w-10 h-10 bg-transparent rounded-tl-[24px] [box-shadow:-20px_-20px_0_white] dark:[box-shadow:-20px_-20px_0_#111827] "></span>
            <span className="absolute top-16 w-10 h-10 bg-transparent rounded-tl-[24px] [box-shadow:-20px_-20px_0_white] dark:[box-shadow:-20px_-20px_0_#111827]"></span>
            <CircleArrowUp className="rotate-45 h-14 w-14 cursor-pointer hover:text-green-600 transition-transform duration-200 hover:rotate-90 bg-white dark:bg-gray-900 ring-11 md:ring-10 ring-white rounded-[50px] dark:ring-[#111827]" />
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default SmallScreens;
