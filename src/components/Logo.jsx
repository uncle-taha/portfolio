import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Logo.css";

const Logo = ({ className }) => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const logoShown = localStorage.getItem("logoAnimationShown");

    if (!logoShown) {
      setIsAnimated(true);
      localStorage.setItem("logoAnimationShown", "true");
    }
  }, []);

  return (
    <>
      <Link to="/">
        <div
          className={`logo ${className} ${isAnimated ? "animate-logo" : ""}`}
        >
          <span className="letter">t</span>
          <span className="letter">a</span>
          <span className="letter">h</span>
          <span className="letter">a</span>
          <span className="underscore">_</span>
        </div>
      </Link>
    </>
  );
};

export default Logo;
