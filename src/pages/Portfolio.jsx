import { useState } from "react";
import { Link } from "react-router-dom";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("Design");
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
                <img
                  src="/portfolioImg/baeminenglish.png"
                  alt="MNK Beauty World logo"
                  className="object-cover hover:scale-110 hover:object-center duration-500 ease-in-out"
                />
              </div>
            </Link>
            <div className="bg-[#f9c74f] rounded-3xl overflow-hidden shadow-sm h-full">
              <div className="h-full w-full">
                <a
                  href="https://uncle-taha.github.io/weatherly/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/portfolioImg/weatherly.png"
                    alt="Bee logo"
                    className="h-full w-full object-cover cursor-pointer hover:scale-110 hover:object-center duration-500 ease-in-out"
                  />
                </a>
              </div>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden shadow-sm h-full lg:row-span-2">
              <div className="h-full w-full">
                <a
                  href="https://qr-code-generator-chi-nine.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/portfolioImg/qrcodegenerator.png"
                    alt="AEOΛOS logo"
                    className="h-full w-full object-contain cursor-pointer hover:scale-110 hover:object-center duration-500 ease-in-out"
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
                  <img
                    src="/portfolioImg/flypan.png"
                    alt="Geometric logo"
                    width={150}
                    height={150}
                    className="h-full w-full object-contain cursor-pointer hover:scale-110 hover:object-center duration-500 ease-in-out"
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
              className="bg-white rounded-3xl overflow-hidden  cursor-pointer
              border-white/80 dark:bg-white/20 dark:shadow-lg shadow-black/4 backdrop-blur-[5.2px] border"
              onClick={() => openModal("/portfolioImg/design1.jpg")}
            >
              <div className="h-full w-full flex items-center justify-center ">
                <img src="/portfolioImg/design1.jpg" />
              </div>
            </div>
            <div
              className="bg-[#f9c74f] rounded-3xl overflow-hidden shadow-sm h-full cursor-pointer 
              border-white/80 dark:bg-white/20 dark:shadow-lg shadow-black/4 backdrop-blur-[5.2px] border"
              onClick={() => openModal("/portfolioImg/design2.jpg")}
            >
              <div className="h-full w-full flex  ">
                <img
                  src="/portfolioImg/design2.jpg"
                  className="object-cover "
                />
              </div>
            </div>
            <div
              className="bg-white rounded-3xl overflow-hidden shadow-sm h-full cursor-pointer
              border-white/80 dark:bg-white/20 dark:shadow-lg shadow-black/4 backdrop-blur-[5.2px] border"
              onClick={() => openModal("/portfolioImg/design3.jpg")}
            >
              <div className="h-full w-full flex  ">
                <img src="/portfolioImg/design3.jpg" className="object-cover" />
              </div>
            </div>
            <div
              className="bg-black rounded-3xl overflow-hidden shadow-sm h-full cursor-pointer
              border-white/80 dark:bg-white/20 dark:shadow-lg shadow-black/4 backdrop-blur-[5.2px] border"
              onClick={() => openModal("/portfolioImg/design4.png")}
            >
              <div className="h-full w-full flex  ">
                <img
                  src="/portfolioImg/design4.png"
                  className="object-cover "
                />
              </div>
            </div>
          </div>
        )}

        {activeTab === "My Gallery" && (
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:h-[524px]">
              <div
                className="relative bg-white rounded-3xl overflow-hidden shadow-sm lg:col-span-2 cursor-pointer
                          border-white/80 dark:bg-white/20 dark:shadow-lg shadow-black/4 backdrop-blur-[5.2px] border"
                onClick={() =>
                  openModal(
                    "/portfolioImg/comeon.JPG",
                    `Title: ${"\u00a0".repeat(10)}"You are so annoying Noona!"`,
                    `Name:  ${"\u00a0".repeat(2)}"Come On Bruh!"`,
                    "Come On"
                  )
                }
              >
                <div className="absolute top-2 right-2 bg-white/80 px-3 py-1 rounded-full text-sm font-medium shadow ">
                  ❤️{" "}
                  {(hardcodedLikes["Come On"] || 0) +
                    (likesMap["Come On"] || 0)}
                </div>
                <div className="h-full w-full flex items-center justify-center">
                  <img
                    src="/portfolioImg/comeon.JPG"
                    alt="You are so annoying Noona!"
                    className="object-cover w-full h-full transition-all duration-500 ease-in-out hover:scale-110 hover:object-center"
                  />
                </div>
              </div>

              <div
                className="relative  rounded-3xl overflow-hidden shadow-sm cursor-pointer
                border-white/80 dark:bg-white/20 dark:shadow-lg shadow-black/4 backdrop-blur-[5.2px] border"
                onClick={() =>
                  openModal(
                    "/portfolioImg/lovely.JPG",
                    `Title: ${"\u00a0".repeat(
                      10
                    )}"Pretending you are not taking my pic"`,
                    `Name:  ${"\u00a0".repeat(2)}"Lovely"`,
                    "Lovely"
                  )
                }
              >
                <div className="absolute top-2 right-2 bg-white/80 px-3 py-1 rounded-full text-sm font-medium shadow text-black">
                  ❤️{" "}
                  {(hardcodedLikes["Lovely"] || 0) + (likesMap["Lovely"] || 0)}
                </div>
                <div className="h-full w-full flex items-center justify-center ">
                  <img
                    src="/portfolioImg/lovely.JPG"
                    alt="Pretending you are not taking my pic"
                    className="object-cover w-full h-full transition-all duration-500 ease-in-out hover:scale-110 hover:object-center"
                  />
                </div>
              </div>

              <div
                className="relative bg-white rounded-3xl overflow-hidden shadow-sm cursor-pointer 
                border-white/80 dark:bg-white/20 dark:shadow-lg shadow-black/4 backdrop-blur-[5.2px] border"
                onClick={() =>
                  openModal(
                    "/portfolioImg/frog.JPG",
                    `Title: ${"\u00a0".repeat(
                      10
                    )}"Someone tell this Sun to shine at night"`,
                    `Name:  ${"\u00a0".repeat(2)}"Sunvasion"`,
                    "Sunvasion"
                  )
                }
              >
                <div className="absolute top-2 right-2 bg-white/80 px-3 py-1 rounded-full text-sm font-medium shadow text-black">
                  ❤️{" "}
                  {(hardcodedLikes["Sunvasion"] || 0) +
                    (likesMap["Sunvasion"] || 0)}
                </div>
                <div className="h-full w-full flex items-center justify-center ">
                  <img
                    src="/portfolioImg/frog.JPG"
                    alt="Someone tell this Sun to shine at night"
                    className="object-cover w-full h-full transition-all duration-500 ease-in-out hover:scale-110 hover:object-center"
                  />
                </div>
              </div>

              <div
                className="relative bg-white rounded-3xl overflow-hidden shadow-sm cursor-pointer
                border-white/80 dark:bg-white/20 dark:shadow-lg shadow-black/4 backdrop-blur-[5.2px] border"
                onClick={() =>
                  openModal(
                    "/portfolioImg/canihavesome.JPG",
                    `Title: ${"\u00a0".repeat(
                      1
                    )}"You made it for me, right? Noona"`,
                    `Name:  ${"\u00a0".repeat(2)}"Pawparazzi"`,
                    "Pawparazzi"
                  )
                }
              >
                <div className="absolute top-2 right-2 bg-white/80 px-3 py-1 rounded-full text-sm font-medium shadow text-black">
                  ❤️{" "}
                  {(hardcodedLikes["Pawparazzi"] || 0) +
                    (likesMap["Pawparazzi"] || 0)}
                </div>
                <div className="h-full w-full flex items-center justify-center ">
                  <img
                    src="/portfolioImg/canihavesome.JPG"
                    alt="You made it for me, right? Noona"
                    className="object-cover w-full h-full transition-all duration-500 ease-in-out hover:scale-110 hover:object-center"
                  />
                </div>
              </div>

              <div
                className="relative bg-white rounded-3xl overflow-hidden shadow-sm cursor-pointer
                border-white/80 dark:bg-white/20 dark:shadow-lg shadow-black/4 backdrop-blur-[5.2px] border"
                onClick={() =>
                  openModal(
                    "/portfolioImg/apocalipse.JPG",
                    `Title: ${"\u00a0".repeat(
                      1
                    )}"Apocalypse is here, I might starve to death"`,
                    `Name:  ${"\u00a0".repeat(2)}"Meowpocalypse"`,
                    "Meowpocalypse"
                  )
                }
              >
                <div className="absolute top-2 right-2 bg-white/80 px-3 py-1 rounded-full text-sm font-medium shadow text-black">
                  ❤️{" "}
                  {(hardcodedLikes["Meowpocalypse"] || 0) +
                    (likesMap["Meowpocalypse"] || 0)}
                </div>
                <div className="h-full w-full flex items-center justify-center ">
                  <img
                    src="/portfolioImg/apocalipse.JPG"
                    alt="Apocalypse is here, I might starve to death"
                    className="object-cover w-full h-full transition-all duration-500 ease-in-out hover:scale-110 hover:object-center"
                  />
                </div>
              </div>
              <div
                className="relative bg-white rounded-3xl overflow-hidden shadow-sm cursor-pointer lg:col-span-2
                border-white/80 dark:bg-white/20 dark:shadow-lg shadow-black/4 backdrop-blur-[5.2px] border"
                onClick={() =>
                  openModal(
                    "/portfolioImg/puma.JPG",
                    `Title: ${"\u00a0".repeat(1)}"Where is my PUMA deal?"`,
                    `Name:  ${"\u00a0".repeat(2)}"Pawma"`,
                    "Pawma"
                  )
                }
              >
                <div className="absolute top-2 right-2 bg-white/80 px-3 py-1 rounded-full text-sm font-medium shadow text-black">
                  ❤️ {(hardcodedLikes["Pawma"] || 0) + (likesMap["Pawma"] || 0)}
                </div>
                <div className="h-full w-full flex items-center justify-center ">
                  <img
                    src="/portfolioImg/puma.JPG"
                    alt="Where is my PUMA deal?"
                    className="object-cover w-full h-full transition-all duration-500 ease-in-out hover:scale-110 hover:object-center "
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {modal.open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-white/63 backdrop-blur-[30px] cursor-pointer "
          onClick={() => setModal({ ...modal, open: false })}
        >
          <div
            className={`bg-white rounded-3xl p-4 relative max-w-full max-h-full mx-auto border border-gray-300 dark:text-black 
        ${
          activeTab === "Design"
            ? "max-w-[90vw] max-h-[80vh] overflow-auto mt-[190px] mb-[50px]"
            : "max-w-[70vw] max-h-[50vh]"
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
              className={`w-full object-contain mb-4 rounded-xl ${
                activeTab === "Design"
                  ? "max-h-[1600px] max-w-[1200px] "
                  : "max-h-[600px]"
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
            <div className="text-left relative pl-4 ">
              <h2 className=" text-2xl font-bold ">{modal.title}</h2>
              <p className="text-lg text-gray-700 mb-6">{modal.alt}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
