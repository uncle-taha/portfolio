import { Mail } from "lucide-react";
import Title from "./Title";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="w-full max-w-6xl mx-auto px-10 pb-20 pt-16 md:px-10 lg:px-0"
    >
      <Title
        title="Let’s build something cool"
        paragraph="Reach out if you have design ideas or want to collaborate — I’d love to chat."
      />
      <div
        className="rounded-3xl bg-gradient-to-r from-indigo-500 via-indigo-400 to-purple-400 p-16 md:p-20 
                      flex flex-col md:flex-row items-center justify-between "
      >
        <div className="text-white w-full text-center md:text-left ">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Your Success Starts Here
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            We&apos;re here to convert your ideas into beautiful designs.
            <br />
            Reach out and Let&apos;s Begin!
          </p>
        </div>

        <div className="mt-8 md:mt-0">
          <Link to="/contact">
            <div className="p-1.5 rounded-full border-2 border-white">
              <button
                className="min-w-[187px] bg-white text-gray-800 hover:bg-black/60 hover:text-white transition-colors rounded-full 
            py-4 px-8 flex items-center gap-2 font-medium cursor-pointer "
              >
                Get In Touch <Mail className="ml-1" size={20} />
              </button>
            </div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
