import abougBg from "../assets/aboutPage.png";
import Soccer from "../assets/personal/soccer.png";
import Tennis from "../assets/personal/tennis.png";
import CounterStrike from "../assets/personal/csgo.png";
import Reading from "../assets/personal/reading.png";
import Listening from "../assets/personal/music.png";
import Runnig from "../assets/personal/running.png";
import Chess from "../assets/personal/chess.png";
import { motion } from "framer-motion";
import LazyLoadImg from "../components/LazyLoadImg";

export default function About() {
  const categories = [
    {
      name: "Soccer",
      img: Soccer,
    },
    {
      name: "Table Tennis",
      img: Tennis,
    },
    {
      name: "Counter-Strike",
      img: CounterStrike,
    },
    {
      name: "Reading",
      img: Reading,
    },
    {
      name: "Listening to musics",
      img: Listening,
    },
    {
      name: "Running",
      img: Runnig,
    },
    {
      name: "Chess",
      img: Chess,
    },
  ];

  return (
    <>
      <div className="max-w-6xl bg-white h-full flex flex-col justify-center items-center m-auto my-30 rounded-[20px] border-white/80 dark:shadow-lg shadow-black/4 backdrop-blur-[5.2px] border dark:bg-gray-900 ">
        <div className="relative w-[90%] h-[600px] my-15">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <LazyLoadImg
              link={abougBg}
              name="Personal photo"
              className="w-full h-full object-cover rounded-[20px] border-white/80 dark:shadow-lg shadow-black/4 backdrop-blur-[5.2px] border will-change-transform"
            />
          </motion.div>

          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-start p-10 justify-start md:justify-center md:gap-40">
            <motion.h1
              initial={{ opacity: 0, scale: 0.8, x: -55 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl md:text-[64px] font-bold mb-4 break-words leading-tight  dark:text-black will-change-transform"
            >
              Igniting <br />
              Ideas <br />
              Everywhere
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, scale: 0.9, x: 95 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="hidden md:block text-lg text-white font-semibold will-change-transform"
            >
              Hi, I'm Ahadbek (you can call me taha). I'm a web developer with a
              background in Computer Science and a strong focus on design and
              user experience. I specialize in crafting user-friendly web
              experiences that balance clean design with solid code, blending
              formal education with hands-on experience. Beyond coding, I
              explore design trends, sketch UI ideas, and continuously learn to
              grow as a developer.
            </motion.p>
          </div>
        </div>
        <div className="block md:hidden mx-6  bg-gray-50 p-8 rounded-lg dark:bg-white/20 dark:text-white">
          <p className="  ">
            Hi, I'm Ahadbek (you can call me taha). I'm a web developer with a
            background in Computer Science and a strong focus on design and user
            experience. I specialize in crafting user-friendly web experiences
            that balance clean design with solid code, blending formal education
            with hands-on experience. Beyond coding, I explore design trends,
            sketch UI ideas, and continuously learn to grow as a developer.
          </p>
        </div>
        {/* skills expersitse */}

        <h2 className="text-2xl font-bold mb-6 flex flex-col justify-center items-center border-b-2 border-gray-300 pb-2">
          Skills & Expertise
        </h2>
        <section className="flex flex-wrap gap-6 justify-between px-10 md:px-18">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: -75 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="flex-1 min-w-[280px] rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:bg-white/20 will-change-transform"
          >
            <h3 className="mb-4 font-semibold">Frontend Development</h3>
            <div className="flex flex-wrap gap-2">
              <span className="badge">HTML</span>
              <span className="badge">CSS</span>
              <span className="badge">JavaScript</span>
              <span className="badge">React</span>
              <span className="badge">Tailwind CSS</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="flex-1 min-w-[280px] rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:bg-white/20 will-change-transform"
          >
            <h3 className="mb-4 font-semibold">UI/UX Design</h3>
            <div className="flex flex-wrap gap-2">
              <span className="badge">Figma</span>
              <span className="badge">Wireframing</span>
              <span className="badge">Prototyping</span>
              <span className="badge">Color Theory</span>
              <span className="badge">Typography</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 75 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="flex-1 min-w-[280px] rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:bg-white/20 will-change-transform"
          >
            <h3 className="mb-4 font-semibold">Tools & Technologies</h3>
            <div className="flex flex-wrap gap-2">
              <span className="badge">Git</span>
              <span className="badge">GitHub</span>
              <span className="badge">VS Code</span>
              <span className="badge">npm</span>
              <span className="badge">Responsive Design</span>
            </div>
          </motion.div>
        </section>

        {/* education */}

        <section className=" bg-white dark:bg-gray-900 px-10 md:px-18">
          <h2 className="text-2xl font-bold mb-6 flex flex-col justify-center items-center border-b-2 border-gray-300 pb-2">
            Education & Learning
          </h2>

          <div className="grid md:grid-cols-2 gap-6 ">
            {/* Web Development */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: -75 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-lg dark:bg-white/20 dark:text-white border-white/80 dark:shadow-lg shadow-black/4 backdrop-blur-[5.2px] border will-change-transform"
            >
              <h3 className="text-xl font-semibold mb-2">
                Web Development & Design
              </h3>
              <h4 className="text-lg text-gray-600 mb-4 dark:text-white">
                Online Courses & University Education
              </h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Completed comprehensive courses on HTML, CSS, and JavaScript
                </li>
                <li>Gained experience with React through practical projects</li>
                <li>Studied UI/UX design principles and best practices</li>
                <li>
                  Deepened knowledge of software development through university
                  studies
                </li>
                <li>
                  Taught myself design through constant practice and real-world
                  application
                </li>
              </ul>
            </motion.div>

            {/* Computer Science */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 75 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-lg dark:bg-white/20 dark:text-white border-white/80 dark:shadow-lg shadow-black/4 backdrop-blur-[5.2px] border will-change-transform"
            >
              <h3 className="text-xl font-semibold mb-2">
                Bachelor of Science in Computer Science
              </h3>
              <h4 className="text-lg text-gray-600 mb-4 dark:text-white">
                Korea University
              </h4>
              <p className="mb-4">
                Studied fundamental computer science concepts including
                algorithms, data structures, and software engineering
                principles, programming languages and user interface design.
              </p>

              <div className="mt-4">
                <h4 className="text-lg font-medium mb-2">Languages</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>English</li>
                  <li>Korean</li>
                  <li>Uzbek</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        {/* personal interests cicle stuff  */}

        <h2 className="text-2xl font-bold mb-6 flex flex-col justify-center items-center border-b-2 border-gray-300 pb-2 ">
          Personal Interests
        </h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="my-20 mx-3 will-change-transform"
        >
          <ul className="flex flex-wrap justify-center gap-6">
            {categories.map((cat, idx) => (
              <li key={idx} className="inline-block text-center">
                <a className="relative block w-[208px] h-[208px] rounded-full p-2 transition duration-300 group cursor-pointer">
                  <span className="absolute inset-0 border-[9px] border-[#BDCBD6] rounded-full transition-transform duration-400 group-hover:scale-0 z-10"></span>
                  <img
                    src={cat.img}
                    className={`rounded-full absolute top-[2px] left-[25px] w-[150px] h-[150px] object-contain dark:invert 
                        ${cat.name === "Table Tennis" ? "scale-60" : ""}
                         ${
                           cat.name === "Soccer"
                             ? "scale-[.8] top-[-20px]"
                             : "top-[15px]"
                         }
                        ${cat.name === "Running" ? "scale-80" : ""}`}
                  />
                  <h3 className="relative z-20 inline-block mt-[130px] px-2 py-1 bg-blue-100 text-blue-800 text-sm leading-5 shadow group-hover:opacity-0 group-hover:scale-150 transition-all duration-500">
                    {cat.name}
                  </h3>
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </>
  );
}
