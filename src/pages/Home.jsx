import { useState, useEffect } from "react";
import Landing from "../components/Landing";
import Carousel from "../components/Carousel";
import Title from "../components/Title";
import Card from "../components/Card";
import FAQSection from "../components/Faq";
import GetInTouch from "../components/GetInTouch";
import RecentWork from "../components/RecentWork";
import SmallScreens from "../components/SmallScreens";
import cardOne from "../assets/card1.png";
import cardTwo from "../assets/card2.png";

// import "./Home.css";
function Home() {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1230);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1230);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Landing />
      <Title
        title="Areas of Expertise"
        paragraph="The Tools & Technologies That Power My Work."
      />
      <Carousel />

      {isLargeScreen ? <RecentWork /> : <SmallScreens />}

      <Title
        title="Your Ideal Partner in Design & Development"
        paragraph="Bringing creativity and functionality together to craft seamless digital experiences tailored to your needs."
        className="mx-10 mt-15"
      />
      <Card
        cardLogo="Brand Identity"
        cardTitle="Build a Strong Brand Identity"
        cardParagraph="We blend creativity and strategy to create brands that leave a long lasting impressions on your audience"
        cardButton="Become memorable bow"
        reverseLayout={true}
        cardImg={
          <img
            src={cardTwo}
            className="w-[600px] h-[450px] -py-[10px] -my-[20px]  md:-mr-[70px]  object-cover object-center å"
          />
        }
      />
      <Card
        cardLogo="Web Design"
        cardTitle="Bringing Your Vision to the Web"
        cardParagraph="Building visually stunning and reliable website with robust functionality, great SEO, and high page speed scores"
        cardButton="Get Notified Online"
        reverseLayout={false}
        cardImg={<img src={cardOne} className="w-full h-auto" />}
      />

      <FAQSection />
      <GetInTouch />
    </>
  );
}

export default Home;
