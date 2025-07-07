import { useState } from "react";
import { Link } from "react-router-dom";
import LazyLoadImg from "../components/LazyLoadImg";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("Websites");
  const [modal, setModal] = useState({
    open: false,
    src: "",
    alt: "",
    title: "",
    likes: 0,
  });

  const [likesMap, setLikesMap] = useState({});
  const tabs = ["Websites", "Design", "My Gallery"];

  const openModal = (src, alt, title, key) => {
    setModal({
      open: true,
      src,
      alt,
      title,
      key,
    });
  };

  const handleLike = () => {
    const current = likesMap[modal.key] || 0;
    const updatedLikes = current + 1;
    setLikesMap({ ...likesMap, [modal.key]: updatedLikes });
  };

  //  ({hardcodedLikes[modal.key] + modal.likes})
  const hardcodedLikes = {
    "Come On": 19,
    Lovely: 17,
    Sunvasion: 25,
    Pawparazzi: 13,
    Meowpocalypse: 17,
    Pawma: 31,
  };

  return (
    <div className="min-h-screen p-6 pt-30">
      <h1 className="text-7xl font-bold text-center mb-16 bg-gradient-to-r from-purple-500 via-pink-400 to-pink-300 text-transparent bg-clip-text">
        Portfolio
      </h1>

      <div className="max-w-7xl flex flex-wrap justify-evenly mb-10 bg-[#f0f4fa] mx-auto rounded-3xl dark:text-white border-white/80 dark:bg-white/20 dark:shadow-lg shadow-black/4 backdrop-blur-[5.2px] border">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 min-w-[100px] text-center py-2 m-1 rounded-3xl cursor-pointer transition-all ${
              activeTab === tab
                ? "bg-[#dfe4f2] text-black"
                : "bg-transparent hover:bg-white/50 "
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="max-w-7xl mx-auto">
        {activeTab === "Websites" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              to="/portfolio/baemin"
              className="col-span-full lg:col-span-2 lg:row-span-2 bg-white rounded-3xl overflow-hidden shadow-sm lg:h-[524px] cursor-pointer"
            >
              <div className="h-full w-full flex  ">
                <LazyLoadImg
                  link="/portfolioImg/baeminenglish.png"
                  name="Baemin"
                  className="object-cover hover:scale-110 hover:object-center duration-500 ease-in-out w-full h-full"
                />
              </div>
            </Link>
            <div className=" rounded-3xl overflow-hidden shadow-sm max-h-[400px] md:max-h-full">
              <div className="h-full w-full">
                <a
                  href="https://uncle-taha.github.io/weatherly/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full w-full"
                >
                  <LazyLoadImg
                    link="/portfolioImg/weatherly.png"
                    name="Location checker app"
                    className="object-cover cursor-pointer hover:scale-110 hover:object-center duration-500 ease-in-out  h-full"
                  />
                </a>
              </div>
            </div>

            <div className=" rounded-3xl overflow-hidden shadow-sm h-full lg:row-span-2">
              <div className="h-full w-full">
                <a
                  href="https://qr-code-generator-chi-nine.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LazyLoadImg
                    link="/portfolioImg/qrcodegenerator.png"
                    name="QR code generator"
                    className="object-fit hover:scale-110 hover:object-center duration-500 ease-in-out w-full h-full"
                  />
                </a>
              </div>
            </div>
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm h-full md:col-span-2 lg:col-span-1">
              <div className="h-full w-full ">
                <a
                  href="https://flying-pan.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LazyLoadImg
                    link="/portfolioImg/flypan.png"
                    name="Flying pan"
                    className="object-contain cursor-pointer hover:scale-110 hover:object-center duration-500 ease-in-out w-full h-full "
                  />
                </a>
              </div>
            </div>
          </div>
        )}

        {activeTab === "Design" && (
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:h-[524px]
          "
          >
            <div
              className=" rounded-3xl overflow-hidden cursor-pointer
                         border-white/80 dark:bg-white/20 dark:shadow-lg shadow-black/4 backdrop-blur-[5.2px] border"
              onClick={() => openModal("/portfolioImg/design1.jpg")}
            >
              <div className="h-full w-full flex items-center justify-center">
                <LazyLoadImg
                  link="/portfolioImg/design1.jpg"
                  name="Design 1"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div
              className=" rounded-3xl overflow-hidden cursor-pointer
                         border-white/80 dark:bg-white/20 dark:shadow-lg shadow-black/4 backdrop-blur-[5.2px] border"
              onClick={() => openModal("/portfolioImg/design2.jpg")}
            >
              <div className="h-full w-full flex items-center justify-center">
                <LazyLoadImg
                  link="/portfolioImg/design2.jpg"
                  name="Design 1"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div
              className=" rounded-3xl overflow-hidden cursor-pointer
                         border-white/80 dark:bg-white/20 dark:shadow-lg shadow-black/4 backdrop-blur-[5.2px] border"
              onClick={() => openModal("/portfolioImg/design3.jpg")}
            >
              <div className="h-full w-full flex items-center justify-center">
                <LazyLoadImg
                  link="/portfolioImg/design3.jpg"
                  name="Design 1"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div
              className=" rounded-3xl overflow-hidden cursor-pointer
                         border-white/80 dark:bg-white/20 dark:shadow-lg shadow-black/4 backdrop-blur-[5.2px] border"
              onClick={() => openModal("/portfolioImg/design4.png")}
            >
              <div className="h-full w-full flex items-center justify-center">
                <LazyLoadImg
                  link="/portfolioImg/design4.png"
                  name="Design 1"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        )}

        {activeTab === "My Gallery" && (
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:h-[524px]">
              <div
                className=" max-h-[400px] relative bg-white rounded-3xl overflow-hidden shadow-sm lg:col-span-2 cursor-pointer
                border-white/80 dark:bg-white/20 dark:shadow-lg shadow-black/4 backdrop-blur-[5.2px] border "
                onClick={() =>
                  openModal(
                    "/portfolioImg/comeon00.jpg",
                    `Title: "You are so annoying Noona!"`,
                    `Name:  "Come On Bruh!"`,
                    "Come On"
                  )
                }
              >
                <div className="absolute top-2 right-2 bg-white/80 px-3 py-1 rounded-full text-sm font-medium shadow z-10 ">
                  ❤️{" "}
                  {(hardcodedLikes["Come On"] || 0) +
                    (likesMap["Come On"] || 0)}
                </div>
                <div className="h-full w-full flex items-center justify-center  ">
                  <div className=" transition-all duration-500 ease-in-out hover:scale-110">
                    <LazyLoadImg
                      link="/portfolioImg/comeon00.jpg"
                      name="You are so annoying Noona!"
                      className="object-cover w-full h-full  md:scale-190 lg:scale-100  "
                    />
                  </div>
                </div>
              </div>

              <div
                className="max-h-[400px] relative bg-white rounded-3xl overflow-hidden shadow-sm cursor-pointer
                border-white/80 dark:bg-white/20 dark:shadow-lg shadow-black/4 backdrop-blur-[5.2px] border"
                onClick={() =>
                  openModal(
                    "/portfolioImg/lovely00.jpg",
                    `Title: "Pretending you are not taking my pic"`,
                    `Name:  "Lovely"`,
                    "Lovely"
                  )
                }
              >
                <div className="absolute top-2 right-2 bg-white/80 px-3 py-1 rounded-full text-sm font-medium shadow text-black z-10">
                  ❤️{" "}
                  {(hardcodedLikes["Lovely"] || 0) + (likesMap["Lovely"] || 0)}
                </div>
                <div className="h-full w-full flex items-center justify-center">
                  <div className=" transition-all duration-500 ease-in-out hover:scale-110">
                    <LazyLoadImg
                      link="/portfolioImg/lovely00.jpg"
                      name="Pretending you are not taking my pic"
                      className="object-cover w-full h-full md:scale-110 lg:scale-100 "
                    />
                  </div>
                </div>
              </div>

              <div
                className="max-h-[400px] relative bg-white rounded-3xl overflow-hidden shadow-sm cursor-pointer 
                border-white/80 dark:bg-white/20 dark:shadow-lg shadow-black/4 backdrop-blur-[5.2px] border"
                onClick={() =>
                  openModal(
                    "/portfolioImg/frog00.jpg",
                    `Title: "Someone tell this Sun to shine at night"`,
                    `Name:  "Sunvasion"`,
                    "Sunvasion"
                  )
                }
              >
                <div className="absolute top-2 right-2 bg-white/80 px-3 py-1 rounded-full text-sm font-medium shadow text-black z-10">
                  ❤️{" "}
                  {(hardcodedLikes["Sunvasion"] || 0) +
                    (likesMap["Sunvasion"] || 0)}
                </div>
                <div className="h-full w-full flex items-center justify-center">
                  <div className=" transition-all duration-500 ease-in-out hover:scale-110">
                    <LazyLoadImg
                      link="/portfolioImg/frog00.jpg"
                      name="Someone tell this Sun to shine at night"
                      className="object-cover w-full h-full "
                    />
                  </div>
                </div>
              </div>

              <div
                className="max-h-[400px] relative bg-white rounded-3xl overflow-hidden shadow-sm cursor-pointer
                border-white/80 dark:bg-white/20 dark:shadow-lg shadow-black/4 backdrop-blur-[5.2px] border"
                onClick={() =>
                  openModal(
                    "/portfolioImg/canihavesome00.jpg",
                    `Title: "You made it for me, right? Noona"`,
                    `Name:  "Pawparazzi"`,
                    "Pawparazzi"
                  )
                }
              >
                <div className="absolute top-2 right-2 bg-white/80 px-3 py-1 rounded-full text-sm font-medium shadow text-black z-10">
                  ❤️{" "}
                  {(hardcodedLikes["Pawparazzi"] || 0) +
                    (likesMap["Pawparazzi"] || 0)}
                </div>
                <div className="h-full w-full flex items-center justify-center ">
                  <div className=" transition-all duration-500 ease-in-out hover:scale-110 ">
                    <LazyLoadImg
                      link="/portfolioImg/canihavesome00.jpg"
                      name="You made it for me, right? Noona"
                      className="object-cover w-full h-full lg:scale-100 "
                    />
                  </div>
                </div>
              </div>

              <div
                className="max-h-[400px] relative bg-white rounded-3xl overflow-hidden shadow-sm cursor-pointer
                border-white/80 dark:bg-white/20 dark:shadow-lg shadow-black/4 backdrop-blur-[5.2px] border"
                onClick={() =>
                  openModal(
                    "/portfolioImg/apocalipse00.jpg",
                    `Title: "I might starve to death"`,
                    `Name:  "Meowpocalypse"`,
                    "Meowpocalypse"
                  )
                }
              >
                <div className="absolute top-2 right-2 bg-white/80 px-3 py-1 rounded-full text-sm font-medium shadow text-black z-10">
                  ❤️{" "}
                  {(hardcodedLikes["Meowpocalypse"] || 0) +
                    (likesMap["Meowpocalypse"] || 0)}
                </div>
                <div className="h-full w-full flex items-center justify-center">
                  <div className=" transition-all duration-500 ease-in-out hover:scale-110">
                    <LazyLoadImg
                      link="/portfolioImg/apocalipse00.jpg"
                      name="Apocalypse is here, I might starve to death"
                      className="object-cover w-full h-full "
                    />
                  </div>
                </div>
              </div>

              <div
                className="max-h-[400px] relative bg-white rounded-3xl overflow-hidden shadow-sm cursor-pointer lg:col-span-2
                border-white/80 dark:bg-white/20 dark:shadow-lg shadow-black/4 backdrop-blur-[5.2px] border"
                onClick={() =>
                  openModal(
                    "/portfolioImg/puma00.jpg",
                    `Title: "Where is my PUMA deal?"`,
                    `Name:  "Pawma"`,
                    "Pawma"
                  )
                }
              >
                <div className="absolute top-2 right-2 bg-white/80 px-3 py-1 rounded-full text-sm font-medium shadow text-black z-10">
                  ❤️ {(hardcodedLikes["Pawma"] || 0) + (likesMap["Pawma"] || 0)}
                </div>
                <div className="h-full w-full flex items-center justify-center">
                  <div className=" transition-all duration-500 ease-in-out hover:scale-110">
                    <LazyLoadImg
                      link="/portfolioImg/puma00.jpg"
                      name="Where is my PUMA deal?"
                      className="object-cover w-full h-full scale-110 md:scale-160 lg:scale-100"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {modal.open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-white/63 backdrop-blur-[30px] cursor-pointer  py-20"
          onClick={() => setModal({ ...modal, open: false })}
        >
          <div
            className={`bg-white rounded-3xl p-4 relative max-w-full max-h-full mx-auto border border-gray-300 dark:text-black 
        ${
          activeTab === "Design"
            ? "max-w-[90vw] max-h-[80vh] overflow-auto mt-[190px] mb-[50px]"
            : "max-w-[70vw] max-h-[60vh]"
        }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-10 right-10">
              <button
                className={`absolute top-2 right-2 text-2xl font-bold cursor-pointer ${
                  activeTab === "Design"
                    ? "text-red-500 -top-2 -right-2"
                    : "text-white"
                }`}
                onClick={() => setModal({ ...modal, open: false })}
              >
                ✕
              </button>
            </div>

            <img
              src={modal.src}
              alt={modal.alt}
              className={`object-contain mb-4 rounded-xl ${
                activeTab === "Design"
                  ? "max-h-[1600px] max-w-[1200px] "
                  : "max-h-[400px] min-w-full object-cover "
              }`}
            />
            {activeTab !== "Design" && (
              <div className="absolute top-10 left-10">
                <button
                  className="bg-purple-500 text-white px-4 py-2 rounded-full cursor-pointer"
                  onClick={handleLike}
                >
                  🤍 (
                  {(hardcodedLikes[modal.key] || 0) +
                    (likesMap[modal.key] || 0)}
                  )
                </button>
              </div>
            )}
            <div className="relative flex flex-col justify-end">
              <h2 className="sm:text-xl md:text-2xl font-bold break-words ">
                {modal.title}
              </h2>
              <p className="sm:text-sm md:text-lg text-gray-700 mb-2 break-words">
                {modal.alt}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
