import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Logo from "../components/Logo";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import Landing from "../components/Landing";

function MainLayout() {
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const isDark = savedTheme === "dark";
    document.documentElement.classList.toggle("dark", isDark);
    setDarkMode(isDark);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle("dark", newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  // Instead of conditional rendering, always render Landing but hide/show via CSS
  const isHome = location.pathname === "/";

  return (
    <>
      <ScrollToTop />
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}>
        <Logo className="mr-auto" />
      </Navbar>

      {/* Keep Landing mounted, hide with CSS */}
      <div style={{ display: isHome ? "block" : "none" }}>
        <Landing />
      </div>

      <main className="flex-grow relative z-10">
        <Outlet />
      </main>

      <Footer darkMode={darkMode} />
    </>
  );
}

export default MainLayout;
