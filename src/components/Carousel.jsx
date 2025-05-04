import { useState, useEffect, useRef } from "react";
import {
  FileIcon,
  FileCodeIcon,
  FileJsonIcon,
  Atom,
  Palette,
} from "lucide-react";
import { SiFigma, SiTailwindcss } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

export default function TechCarousel({ darkMode }) {
  const [isHovering, setIsHovering] = useState(false); // Tracks hover state
  const containerRef = useRef(null); // Ref for the scrolling container
  const positionRef = useRef(0); // Stores scroll position
  const animationRef = useRef(null); // Stores animation frame ID

  // List of technologies with corresponding icons, using Tailwind for styling
  const technologies = [
    { name: "Figma", icon: <SiFigma className="w-12 h-12 text-gray-600" /> },
    { name: "HTML", icon: <FileIcon className="w-12 h-12 text-orange-600" /> },
    { name: "CSS", icon: <FileCodeIcon className="w-12 h-12 text-blue-500" /> },
    {
      name: "Tailwind",
      icon: <SiTailwindcss className="w-12 h-12 text-blue-500" />,
    },
    {
      name: "Javascript",
      icon: <FileJsonIcon className="w-12 h-12 text-yellow-500" />,
    },
    { name: "React", icon: <Atom className="w-12 h-12 text-cyan-500" /> },
    { name: "Design", icon: <Palette className="w-12 h-12 text-pink-500" /> },
    {
      name: "Framer Motion",
      icon: <TbBrandFramerMotion className="w-12 h-12   text-purple-500 " />,
    },
  ];

  // Duplicates list for seamless looping
  const loopedTechnologies = [
    ...technologies,
    ...technologies,
    ...technologies,
    ...technologies,
    ...technologies,
    ...technologies,
  ];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const singleSetWidth = technologies.length * 180; // Approximate width of one set

    const animate = () => {
      if (!container) return;

      positionRef.current += isHovering ? 0.5 : 1; // Adjust speed on hover
      if (positionRef.current >= singleSetWidth) positionRef.current = 0; // Reset if overflow

      container.style.transform = `translateX(-${positionRef.current}px)`; // Move items
      animationRef.current = requestAnimationFrame(animate); // Loop animation
    };

    animationRef.current = requestAnimationFrame(animate); // Start animation
    return () => cancelAnimationFrame(animationRef.current); // Cleanup
  }, [isHovering, technologies.length]);

  return (
    <div
      className={`relative w-full overflow-hidden bg-[#dfe4f2] pb-22 pt-4 cursor-pointer dark:bg-[#14121A] ${
        darkMode ? "bg-[#14121A] text-white" : "bg-[#dfe4f2] text-black"
      }`}
    >
      <div
        className="absolute inset-0 z-10 pointer-events-none [background-image:linear-gradient(to_right,#dfe4f2_0%,transparent_20%,transparent_80%,#dfe4f2_100%)] 
      dark:[background-image:linear-gradient(to_right,#14121A_0%,transparent_20%,transparent_80%,#14121A_100%)]"
      ></div>

      <div
        className="relative flex justify-center"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div ref={containerRef} className="flex will-change-transform px-40">
          {loopedTechnologies.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white rounded-2xl shadow-sm p-6 mx-2 min-w-[150px] md:min-w-[210px] md:h-[120px]
                 border-white/80 dark:bg-white/20 dark:shadow-lg shadow-black/4 backdrop-blur-[5.2px] border dark:text-white"
            >
              {tech.icon}
              <span className="font-bold text-lg mt-2">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
