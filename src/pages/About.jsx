import { Download } from "lucide-react";

import portfolioImg from "../assets/portfolio.svg";
import university from "../assets/university.png";
import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      <div className="container max-w-6xl mx-auto px-4 py-12 md:py-20 pt-32">
        <div className="grid -gap-2 md:grid-cols-2 md:gap-16 lg:gap-16">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: -100 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-start mt-20 md:sticky md:top-50 md:self-start"
          >
            <div className="relative mb-6   overflow-hidden rounded-full bg-gray-100 shadow-lg">
              <img
                src={portfolioImg}
                alt="Profile picture"
                className="h-[300px] w-[300px] "
              />
            </div>

            <a href="#" className="mt-6 ">
              <button className="flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700 cursor-pointer">
                <Download className="h-4 w-4" />
                Download Resume
              </button>
            </a>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8 mt-30 px-6 text-center md:text-left "
          >
            {/* Header */}
            <div>
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                Abdusalomov Ahadbek
              </h1>
              <p className="mt-2 text-xl">Front-End Web Developer & Designer</p>
            </div>

            <hr className="border-t border-gray-200" />

            {/* About Section */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold">About Me</h2>
              <div className="space-y-4 text-base md:text-lg mt-6 max-w-xl lg:max-w-2xl">
                <p>
                  Hi, I'm Ahadbek (you can call me taha, with a lowercase "t").
                  I'm a web developer with a strong foundation in design and
                  user experience. I hold a degree in Computer Science, which
                  gave me a solid understanding of software development and
                  design principles. Since graduating, I’ve continued to enhance
                  my skills through practical experience and ongoing learning.
                </p>
                <p>
                  My web development journey began well before my portfolio.
                  Over the years, I’ve worked on various projects, from simple
                  websites to more complex applications, combining hands-on
                  experience with my formal education in front-end development
                  and design.
                </p>
                <p>
                  Outside of coding, I follow the latest design trends, read
                  industry blogs, and sketch UI concepts for future projects.
                  I’m always eager to learn new technologies and improve my
                  skills through real-world applications.
                </p>
              </div>
            </section>

            {/* Skills Section */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold">Skills & Expertise</h2>

              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:bg-white/20">
                <h3 className="mb-4 font-semibold">Frontend Development</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800">
                    HTML
                  </span>
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800">
                    CSS
                  </span>
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800">
                    JavaScript
                  </span>
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800">
                    React
                  </span>
                  {/* <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800">
                  Next.js
                </span> */}
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800">
                    Tailwind CSS
                  </span>
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800">
                    Responsive Design
                  </span>
                </div>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:bg-white/20">
                <h3 className="mb-4 font-semibold">UI/UX Design</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800">
                    Figma
                  </span>

                  <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800">
                    Wireframing
                  </span>
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800">
                    Prototyping
                  </span>
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800">
                    Color Theory
                  </span>
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800">
                    Typography
                  </span>
                </div>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:bg-white/20">
                <h3 className="mb-4 font-semibold">Tools & Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800">
                    Git
                  </span>
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800">
                    GitHub
                  </span>
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800">
                    VS Code
                  </span>
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800">
                    npm
                  </span>
                </div>
              </div>
            </section>

            {/* Education Section */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold">Education & Learning</h2>

              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:bg-white/20 dark:text-white">
                <div className="flex flex-col justify-between gap-2 sm:flex-row ">
                  <div>
                    <h3 className="font-semibold">Web Development & Design</h3>
                    <p className="text-gray-500 dark:text-white">
                      Online Courses & University Education
                    </p>
                  </div>
                </div>
                <ul className="mt-4 list-inside list-disc space-y-2 text-gray-500 dark:text-white">
                  <li>
                    Completed comprehensive courses on HTML, CSS, and JavaScript
                  </li>
                  <li>
                    Gained experience with React through project-based tutorials
                  </li>
                  <li>Studied UI/UX design principles and best practices</li>
                  <li>
                    Deepened knowledge of software development through
                    university studies
                  </li>
                </ul>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:bg-white/20">
                <div className="flex flex-col justify-between gap-2 sm:flex-row">
                  <div>
                    <h3 className="font-semibold dark:text-white">
                      Bachelor of Science in Computer Science
                    </h3>
                    <span className="flex items-center gap-2 dark:text-white">
                      Korea University
                      <img
                        src={university}
                        alt="Korea University"
                        className="h-8 bg-transparent"
                      />
                    </span>
                  </div>
                </div>
                <p className="mt-4 text-gray-500 dark:text-white">
                  Studied fundamental computer science concepts including
                  algorithms, data structures, and software engineering
                  principles. Focused on web technologies and user interface
                  design.
                </p>
              </div>
            </section>

            {/* Personal Interests */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold">Personal Interests</h2>
              <div className="">
                <p>
                  Outside of web development, I enjoy playing soccer, table
                  tennis, playing Counter Strike online game. I'm also
                  passionate about continuous learning and regularly take online
                  courses to expand my knowledge in various fields.
                </p>
              </div>
            </section>

            {/* Contact */}
            <section className="space-y-4 ">
              <h2 className="text-2xl font-bold">Contact</h2>
              <div className="grid gap-4 sm:grid-cols-2 ">
                <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:bg-white/20">
                  <h3 className="font-medium">Email</h3>
                  <p className="text-gray-500 dark:text-white">
                    taxa.king95@mail.ru
                  </p>
                </div>
                <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:bg-white/20">
                  <h3 className="font-medium">Location</h3>
                  <p className="text-gray-500 dark:text-white">
                    Seoul, South Korea
                  </p>
                </div>
              </div>
            </section>
          </motion.div>
        </div>
      </div>
    </>
  );
}
