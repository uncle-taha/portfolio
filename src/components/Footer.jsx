import Button from "../components/Button";
import { Link } from "react-router-dom";

function Footer({ darkMode }) {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Blog", href: "/blogpage" },
  ];

  return (
    <div>
      <section
        className={`py-10 sm:pt-16 lg:pt-24 rounded-t-[50px] ${
          darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
        }`}
      >
        <div className="max-w-7xl px-4 mx-auto sm:px-6 md:px-18 lg:px-18">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between">
            {/* Left Side */}
            <div className="text-center md:text-left w-full md:w-auto">
              <p className="text-4xl font-semibold">_taha</p>
              <p className="text-lg leading-relaxed mt-7 ">
                Hands-on graphic design solutions that <br />
                connect with your target audience
              </p>
              <Link to="/contact">
                <div className="flex justify-center md:justify-start mt-6">
                  <Button label="Contact" classname="px-10 w-auto" />
                </div>
              </Link>
            </div>

            {/* Right Side */}
            <div className="grid grid-cols-2  md:grid-cols-2 md:gap-30 mt-10 md:mt-0 w-full md:w-auto px-auto">
              {/* Menu */}
              <div className="text-center md:text-left">
                <p className="text-lg font-semibold tracking-widest uppercase text-gray-400">
                  Menu
                </p>
                <ul className="mt-6 space-y-4">
                  {navItems.map(({ label, href }) => (
                    <li key={label}>
                      <a
                        href={href}
                        className="flex justify-center md:justify-start md:text-lg transition-all duration-200 hover:text-blue-600"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social */}
              <div className="text-center md:text-left">
                <p className="text-lg font-semibold tracking-widest uppercase text-gray-400">
                  Social
                </p>
                <ul className="mt-6 space-y-4">
                  {[
                    {
                      name: "GitHub",
                      link: "https://github.com/uncle-taha",
                    },
                    {
                      name: "LinkedIn",
                      link: "https://www.linkedin.com/in/taha-497a7820b/",
                    },
                    { name: "Telegram", link: "https://t.me/topchikimbu" },
                    {
                      name: "Instagram",
                    },
                  ].map(({ name, link }) => (
                    <li key={name}>
                      <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex justify-center md:justify-start transition-all duration-200 hover:text-blue-600 md:text-lg"
                      >
                        {name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <hr className="mt-10 mb-10 border-gray-200 dark:border-gray-700" />

          <div className="flex justify-between items-center">
            <p className="text-sm text-center md:text-left text-gray-600 dark:text-gray-400">
              © <span>{new Date().getFullYear()}</span> Created by _taha
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
