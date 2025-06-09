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
          className="flex flex-col items-center text-center max-w-6xl mt-10"
        >
          <h1 className="text-6xl p-4 ">
            Baemin Delivery has two main problems!
          </h1>{" "}
          <div className="w-full flex justify-center  py-10">
            <div className="flex flex-row gap-20 text-4xl">
              <div className="flex flex-col items-center text-center max-w-[400px]">
                <p className="mb-4">1. Pick up system</p>
                <img
                  src="/portfolioImg/pickup.png"
                  alt="Pick up system"
                  className="w-[350px] h-auto"
                />
              </div>
              <div className="flex flex-col items-center text-center max-w-[400px]">
                <p className="mb-4">2. Order Acceptance rate</p>
                <img
                  src="/portfolioImg/pedalrate.jpeg"
                  alt="Order Acceptance rate"
                  className="w-[350px] h-auto"
                />
              </div>
            </div>
          </div>
          <h1 className="text-6xl p-4">Solution!</h1>
          <div className="w-full flex justify-center  py-10">
            <div className="flex flex-row gap-20 justify-center text-4xl">
              <div className="flex flex-col items-center text-center max-w-[400px]">
                <p className="mb-4">1. QR Pick up system</p>
                <img
                  src="/portfolioImg/qrpuckip.png"
                  alt="QR Pick up system"
                  className="w-[310px] h-auto"
                />
              </div>
              <div className="flex flex-col items-center text-center max-w-[400px] pl-8">
                <p className="mb-4 whitespace-nowrap">
                  2. Remove Acceptance rate
                </p>
                <img
                  src="/portfolioImg/norate.png"
                  alt="Remove Order Acceptance rate"
                  className="w-[350px] h-auto"
                />
              </div>
            </div>
          </div>
          <h1 className="text-6xl p-4">Why?</h1>
          <div className="w-full flex flex-col  py-10">
            <p className="text-2xl">
              1. Baemin uses 12 characters long unique order number to identify
              each order. Since all printers in the restaurants use default
              font, it is sometimes difficult to differenciate letters and
              numbers. For example:
            </p>
            <div className="flex flex-col items-center text-center  pl-8">
              <img
                src="/portfolioImg/example.png"
                alt="Remove Order Acceptance rate"
                className="max-w-[800px] h-auto"
              />
            </div>
            <p className="text-2xl">
              Characters like the number 0 often appear similar to the letters O
              and D, while the number 1 resembles the letter L. This visual
              ambiguity can confuse delivery riders and sometimes results in
              misdeliveries. One might argue,{" "}
              <span className="italic">
                “Delivery riders should be more careful.”
              </span>{" "}
              While that's true in principle, during peak hours or in bad
              weather, such as heavy rain, it becomes significantly harder to
              concentrate. As a delivery rider myself, I’ve encountered this
              issue multiple times. In several cases, it led to customers
              becoming upset, and I not only lost valuable time but also had to
              pay double the delivery cost to resolve the mistake.
            </p>{" "}
            <br />
            <p className="text-2xl">
              Using QR codes for order pickup is better for everyone, including
              customers, riders, and restaurant owners. You might argue that
              Baemin already uses a QR system in its stores. That’s true, but it
              should be implemented for all orders. Another concern could be,
              <span className="italic">
                "Well, QR codes need to be stored in the backend, which takes up
                space and increases costs."{" "}
              </span>
              In reality, there is no need to store QR codes in the database.
              The only requirement is to generate them on the client side,
              specifically within the restaurant's receipt system. Since the
              12-digit order number is already stored in the database, all
              that’s needed is a few lines of code to convert this number into a
              QR code and print it on the receipt. When scanned, the QR shows
              the order number, and if it matches the rider’s order number, the
              pickup is successfully verified. I’ve even created a QR code
              generator that works without a database. You can check it out
              &nbsp;
              <a
                href="https://qr-code-generator-chi-nine.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2BC1BC] hover:underline"
              >
                here.
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
