import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar({ children, darkMode, toggleDarkMode }) {
  // burger toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleBurger = () => setIsMenuOpen(!isMenuOpen);

  // Track window width to automatically close menu on larger screens
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (windowWidth > 768) setIsMenuOpen(false);
  }, [windowWidth]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 navbar w-full h-16 flex items-center px-4 z-[9999] ${
          darkMode
            ? "bg-gray/53 backdrop-blur-[9.2px] text-white"
            : "bg-white/63 backdrop-blur-[9.2px] text-black"
        }`}
      >
        <div className="fixed left-10 cursor-pointer">{children}</div>
        <div className=" flex items-center ml-auto mr-10 w-full justify-end text-xl ">
          <ul className="hidden md:flex cursor-pointer gap-2 sm:gap-4 md:gap-8 lg:gap-12 ">
            <li className="py-1 relative group">
              <Link to="/">Home</Link>
            </li>
            <li className="py-1 relative group">
              <Link to="/about">About</Link>
            </li>
            <li className="py-1 relative group">
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li className="py-1 relative group">Services</li>
            <li className=" dark:text-[#0088cc] m-0 p-0">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        {/* Burger Icon */}
        <div className="md:hidden flex items-center mr-2">
          <button onClick={toggleBurger}>
            {!isMenuOpen ? (
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            ) : (
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Dark Mode Toggle */}
      <div
        className="flex flex-col fixed bottom-10 right-10 p-4 border rounded-lg 
  transition-all duration-300 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 z-[999]"
      >
        <span
          onClick={toggleDarkMode}
          className="cursor-pointer p-1 relative flex items-center justify-center w-w h-2"
        >
          <div
            className={`transition-opacity duration-300 absolute ${
              darkMode ? "opacity-100" : "opacity-0"
            } flex items-center justify-center`}
          >
            <Moon />
          </div>
          <div
            className={`transition-opacity duration-300 absolute ${
              darkMode ? "opacity-0" : "opacity-100"
            } flex items-center justify-center`}
          >
            <Sun />
          </div>
        </span>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <>
          <div className="fixed top-16 w-full h-full bg-[#dfe4f2]/100 blur-sm"></div>
          <ul
            className="flex flex-col justify-center items-center gap-8 bg-white m-6 p-8 text-lg 
            rounded-[10px] z-50 fixed top-10 left-0 right-0 cursor-pointer md:hidden"
          >
            <li className="w-full py-2 rounded-2xl hover:bg-[#dfe4f2] text-center">
              Home
            </li>
            <li className="w-full py-2 rounded-2xl hover:bg-[#dfe4f2] text-center">
              About
            </li>
            <li className="w-full py-2 rounded-2xl hover:bg-[#dfe4f2] text-center">
              Portfolio
            </li>
            <li className="w-full py-2 rounded-2xl hover:bg-[#dfe4f2] text-center">
              Services
            </li>
            <li className="w-full py-2 rounded-2xl hover:bg-[#dfe4f2] text-center ">
              Contact
            </li>
          </ul>
        </>
      )}
    </>
  );
}

export default Navbar;
