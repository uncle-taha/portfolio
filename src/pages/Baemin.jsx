import { useState } from "react";
import { MoveLeft } from "lucide-react";
import "../assets/fonts/fonts.css";
export default function Baemin() {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  return (
    <>
      <div className="flex flex-col justify-center items-center max-w-7xl bg-white rounded-2xl h-full m-auto my-30">
        <div className="h-[400px] w-full max-w-6xl mt-15 m-auto">
          <div className="relative bg-red-200 h-full rounded-2xl overflow-hidden">
            <div
              className="absolute top-6 left-10 transition-transform duration-300 hover:-translate-x-1 cursor-pointer z-10  p-1 rounded"
              onMouseEnter={() => setIsTooltipVisible(true)}
              onMouseLeave={() => setIsTooltipVisible(false)}
            >
              <MoveLeft className="text-white w-10 h-10" />

              {isTooltipVisible && (
                <div className="absolute top-8 -left-8 ml-2 w-40 rounded-lg  z-50">
                  <p className="text-sm text-white font-semibold">
                    back to Portfolio
                  </p>
                </div>
              )}
            </div>

            <img
              src="/portfolioImg/baeminenglish.png"
              className="w-full h-full object-cover object-[center_12%] rounded-2xl"
            />
          </div>
        </div>
        {/* end of image div */}
        {/* start of body */}
        <div
          style={{ fontFamily: "BaeminHannaPro" }}
          className="max-w-6xl mt-10"
        >
          <h1 className="text-6xl p-4">
            Baemin Delivery has two main problems!
          </h1>
          <span className="flex flex-row justify-evenly items-center text-4xl">
            <span>
              <p>1.Pick up system</p>
              <img
                src="/portfolioImg/pedalrate.jpeg"
                alt=""
                className="w-[400px]"
              />
            </span>{" "}
            <span>
              <p>2.Order Acceptance rate</p>
              <img
                src="/portfolioImg/pedalrate.jpeg"
                alt=""
                className="w-[400px]"
              />
            </span>
          </span>
        </div>
      </div>
    </>
  );
}
