import { useState } from "react";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("Logos");
  const tabs = ["Logos", "Websites", "My Galley"];

  return (
    <div className="min-h-screen  p-6 pt-30">
      <h1 className="text-7xl font-bold text-center mb-16 bg-gradient-to-r from-purple-500 via-pink-400 to-pink-300 text-transparent bg-clip-text">
        Portfolio
      </h1>

      <div className="max-w-7xl flex flex-wrap justify-evenly mb-10 bg-[#f0f4fa] mx-auto rounded-3xl">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 min-w-[100px] text-center py-2 m-1 rounded-3xl cursor-pointer transition-all ${
              activeTab === tab
                ? "bg-[#dfe4f2] "
                : "bg-transparent hover:bg-white/50"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="max-w-7xl mx-auto">
        {activeTab === "Logos" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="col-span-full lg:col-span-2 lg:row-span-2 bg-white rounded-3xl overflow-hidden shadow-sm lg:h-[524px]">
              <div className="h-full w-full flex items-center justify-center p-8">
                <img
                  src="/placeholder.svg"
                  alt="MNK Beauty World logo"
                  width={300}
                  height={300}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="bg-[#f9c74f] rounded-3xl overflow-hidden shadow-sm h-full">
              <div className="h-full w-full flex items-center justify-center p-8">
                <img
                  src="/placeholder.svg"
                  alt="Bee logo"
                  width={150}
                  height={150}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm h-full">
              <div className="h-full w-full flex items-center justify-center p-8">
                <img
                  src="/placeholder.svg"
                  alt="AEOΛOS logo"
                  width={150}
                  height={150}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="bg-black rounded-3xl overflow-hidden shadow-sm h-full">
              <div className="h-full w-full flex items-center justify-center p-8">
                <img
                  src="/placeholder.svg"
                  alt="Geometric logo"
                  width={150}
                  height={150}
                  className="object-contain invert"
                />
              </div>
            </div>
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm h-full">
              <div className="h-full w-full flex items-center justify-center p-8">
                <img
                  src="/placeholder.svg"
                  alt="Blue bird logo"
                  width={150}
                  height={150}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        )}

        {activeTab === "Websites" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:h-[524px] ">
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm ">
              <div className="h-full w-full flex items-center justify-center p-8">
                <img
                  src="/placeholder.svg"
                  alt="MNK Beauty World logo"
                  width={300}
                  height={300}
                  className="object-contain "
                />
              </div>
            </div>
            <div className="bg-[#f9c74f] rounded-3xl overflow-hidden shadow-sm h-full">
              <div className="h-full w-full flex items-center justify-center p-8">
                <img
                  src="/placeholder.svg"
                  alt="Bee logo"
                  width={300}
                  height={300}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm h-full">
              <div className="h-full w-full flex items-center justify-center p-8">
                <img
                  src="/placeholder.svg"
                  alt="AEOΛOS logo"
                  width={300}
                  height={300}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="bg-black rounded-3xl overflow-hidden shadow-sm h-full">
              <div className="h-full w-full flex items-center justify-center p-8">
                <img
                  src="/placeholder.svg"
                  alt="Geometric logo"
                  width={300}
                  height={300}
                  className="object-contain invert"
                />
              </div>
            </div>
          </div>
        )}

        {/* {activeTab === "UI/UX" && (
          <div className="grid grid-cols-1 md:grid-cols-1  lg:grid-cols-2 gap-6 lg:h-[524px]">
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm ">
              <div className="h-full w-full flex items-center justify-center p-8">
                <img
                  src="/placeholder.svg"
                  alt="MNK Beauty World logo"
                  width={300}
                  height={300}
                  className="object-contain md:h-[300px]"
                />
              </div>
            </div>
            <div className="bg-[#f9c74f] rounded-3xl overflow-hidden shadow-sm h-full">
              <div className="h-full w-full flex items-center justify-center p-8">
                <img
                  src="/placeholder.svg"
                  alt="Bee logo"
                  width={300}
                  height={300}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        )} */}

        {activeTab === "My Galley" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:h-[524px]">
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm lg:col-span-2 ">
              <div className="h-full w-full flex items-center justify-center p-8">
                <img
                  src="/placeholder.svg"
                  alt="MNK Beauty World logo"
                  width={300}
                  height={300}
                  className="object-contain h-full max-h-[200px]"
                />
              </div>
            </div>

            <div className="bg-[#f9c74f] rounded-3xl overflow-hidden shadow-sm">
              <div className="h-full w-full flex items-center justify-center p-8">
                <img
                  src="/placeholder.svg"
                  alt="Bee logo"
                  width={300}
                  height={300}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm">
              <div className="h-full w-full flex items-center justify-center p-8">
                <img
                  src="/placeholder.svg"
                  alt="AEOΛOS logo"
                  width={300}
                  height={300}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="bg-black rounded-3xl overflow-hidden shadow-sm">
              <div className="h-full w-full flex items-center justify-center p-8">
                <img
                  src="/placeholder.svg"
                  alt="Geometric logo"
                  width={300}
                  height={300}
                  className="object-contain invert"
                />
              </div>
            </div>
            <div className="bg-black rounded-3xl overflow-hidden shadow-sm">
              <div className="h-full w-full flex items-center justify-center p-8">
                <img
                  src="/placeholder.svg"
                  alt="Geometric logo"
                  width={300}
                  height={300}
                  className="object-contain invert"
                />
              </div>
            </div>
            <div className="bg-black rounded-3xl overflow-hidden shadow-sm lg:col-span-2">
              <div className="h-full w-full flex items-center justify-center p-8">
                <img
                  src="/placeholder.svg"
                  alt="Geometric logo"
                  width={300}
                  height={300}
                  className="object-contain invert"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
