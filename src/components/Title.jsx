import { motion } from "framer-motion";
function Title({ title, paragraph, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={`flex flex-col items-center justify-center  px-6 pb-18 sm:px-0 text-center space-y-4 ${className}`}
    >
      <div
        className="w-24 h-1 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400"
        aria-hidden="true"
      />
      <div className=" space-y-2">
        <h2 className="text-4xl">{title}</h2>
        <p className="text-lg">{paragraph}</p>
      </div>
    </motion.div>
  );
}

export default Title;
