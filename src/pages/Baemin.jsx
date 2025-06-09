import { useState } from "react";
import { MoveLeft } from "lucide-react";
import { Link } from "react-router-dom";
import "../assets/fonts/fonts.css";

const translations = {
  en: {
    title1: "Baemin Delivery has two main problems!",
    pickup: "1. Pick up system",
    acceptance: "2. Order Acceptance rate",
    solution: "Solution!",
    solutionPickup: "1. QR Pick up system",
    solutionRemoveAcceptance: "2. Remove Acceptance rate",
    why: "Why?",
    p1: `1. Baemin uses 12 characters long unique order number to identify each order. Since all printers in the restaurants use default font, it is sometimes difficult to differentiate letters and numbers. For example:`,
    p2: `Characters like the number 0 often appear similar to the letters O and D, while the number 1 resembles the letter I. This visual ambiguity can confuse delivery riders and sometimes results in misdeliveries. One might argue,`,
    itelicP: `"Delivery riders should be more careful."`,
    p3: `While that's true in principle, during peak hours or in bad weather, such as heavy rain, it becomes significantly harder to concentrate. As a delivery rider myself, I've encountered this issue multiple times. In several cases, it led to customers becoming upset, and I not only lost valuable time but also had to pay double the delivery cost to resolve the mistake.`,
    p4: `Using QR codes for order pickup is better for everyone, including customers, riders, and restaurant owners. You might argue that Baemin already uses a QR system in its stores. That's true, but it should be implemented for all orders. Another concern could be,`,
    p4italic: `"Well, QR codes need to be stored in the backend, which takes up space and increases costs."`,
    p4cont: `In reality, there is no need to store QR codes in the database. The only requirement is to generate them on the client side, specifically within the restaurant's receipt system. Since the 12-digit order number is already stored in the database, all that's needed is a few lines of code to convert this number into a QR code and print it on the receipt. When scanned, the QR shows the order number, and if it matches the rider's order number, the pickup is successfully verified. I've even created a QR code generator that works without a database. You can check it out `,
    p4linkText: "here.",
    p5Title: `2. Why should we remove the acceptance rate from "My Page"?`,
    p5a: `Every time a driver receives a new order, there is approximately one minute to either accept or decline it. If riders don't want to take the order, they have two options:`,
    p5List1: `Decline the order, which affects their acceptance rate (배차 수락률)`,
    p5List2: `Wait one minute until the order disappears on its own`,
    p5b: `When drivers decline too many orders, it negatively affects their acceptance rate. A lower rate likely reduces the chances of receiving AI-recommended orders. Because of this, some drivers choose to wait out the timer rather than decline — just to avoid hurting their stats. This delay causes orders to reach customers later than they should.`,
    p5c: `During rainy weather or peak hours, the issue gets worse. If an order is shown to 10 drivers and none accept it, that order is already delayed by 10 minutes.`,
    p5d: `To improve this:`,
    p5List3: `Make it easy to decline orders`,
    p5List4: `Stop tracking or penalizing declined orders`,
    p5List5: `This allows drivers to decide faster, reducing wait time and improving delivery speed`,
    p5e: `Especially in winter or rainy weather, food is often ready for pickup, but if no driver wants to go, the food sits and gets cold.`,
    p5f: `Also, adding a `,
    p5fItalic: `"Revise Order"`,
    p5fCont: ` button would be helpful. If a driver declines by mistake, they should be able to undo that decision.`,
    p5g: `Not tracking declined orders may lead to quicker assignments and better service for everyone.`,
    footerNote:
      "※ This article uses Baemin's free to use font Baemin Hanna Pro",
    footerDate: "June, 2025",
    backTooltip: "back to Portfolio",
    language: "한국어",
  },
  ko: {
    title1: "배민 배달은 두 가지 주요 문제가 있습니다!",
    pickup: "1. 픽업 시스템",
    acceptance: "2. 주문 수락률",
    solution: "해결책!",
    solutionPickup: "1. QR 픽업 시스템",
    solutionRemoveAcceptance: "2. 수락률 제거",
    why: "왜?",
    p1: `1. 배민은 각 주문을 식별하기 위해 12자리의 고유 주문 번호를 사용합니다. 모든 식당 프린터는 기본 글꼴을 사용하기 때문에 문자와 숫자를 구분하기 어려운 경우가 있습니다. 예를 들어:`,
    p2: `숫자 0은 문자 O와 D와 비슷하게 보이고, 숫자 1은 문자 I과 닮아 시각적으로 혼동될 수 있습니다. 이는 배달 라이더에게 혼란을 주고 때로는 잘못된 배달로 이어질 수 있습니다. 어떤 사람들은 이렇게 말할 수도 있습니다.`,
    itelicP: `"배달 라이더가 더 주의해야 한다."`,
    p3: `원칙적으로는 맞지만, 피크 시간이나 악천후, 예를 들어 비가 많이 오는 날에는 집중하기가 훨씬 어렵습니다. 배달 라이더로서 저도 여러 번 이런 문제를 겪었고, 그 결과 고객이 화를 내는 경우가 있었으며, 시간도 많이 잃었고 실수를 해결하기 위해 배달비를 두 배로 내야 했습니다.`,
    p4: `QR 코드를 이용한 주문 픽업 시스템은 고객, 라이더, 식당 주인 모두에게 이롭습니다. 배민이 이미 매장에 QR 시스템을 사용하고 있다고 말할 수도 있지만, 모든 주문에 적용되어야 합니다. 또 다른 걱정은`,
    p4italic: `"QR 코드를 백엔드에 저장해야 해서 공간을 차지하고 비용이 증가한다는 점입니다."`,
    p4cont: `실제로는 데이터베이스에 QR 코드를 저장할 필요가 없습니다. 주문 번호 12자리가 이미 데이터베이스에 저장되어 있기 때문에, 식당 영수증 시스템 내에서 클라이언트 사이드에서 QR 코드를 생성하는 코드 몇 줄이면 충분합니다. 스캔하면 QR은 주문 번호를 보여주고, 라이더의 주문 번호와 일치하면 픽업이 성공적으로 확인됩니다. 저는 데이터베이스 없이 작동하는 QR 코드 생성기를 만들었으며, `,
    p4linkText: "여기서",
    p5Title: `"마이 페이지"에서 수락률을 왜 제거해야 할까요?`,
    p5a: `배달 라이더가 새 주문을 받으면 수락 또는 거절할 수 있는 시간이 약 1분 정도 주어집니다. 라이더가 주문을 받고 싶지 않으면 두 가지 선택지가 있습니다:`,
    p5List1: `주문을 거절하면 수락률에 영향을 줍니다 (배차 수락률)`,
    p5List2: `주문이 자동으로 사라질 때까지 1분 기다립니다`,
    p5b: `배달 라이더가 너무 많은 주문을 거절하면 수락률에 부정적인 영향이 생깁니다. 수락률이 낮으면 AI 추천 주문을 받을 가능성이 줄어듭니다. 때문에 일부 배달 라이더는 수락률을 깎이지 않으려고 일부러 시간을 기다립니다. 이로 인해 주문이 고객에게 늦게 도착하는 문제가 발생합니다.`,
    p5c: `비가 오거나 피크 시간에는 문제가 더 심해집니다. 주문이 10명의 배달 라이더에게 보여져도 아무도 수락하지 않으면 주문이 이미 10분 늦어진 것입니다.`,
    p5d: `개선을 위해 다음을 제안합니다:`,
    p5List3: `주문 거절을 쉽게 만들기`,
    p5List4: `거절한 주문에 대한 추적이나 페널티 중단`,
    p5List5: `배달 라이더가 빠르게 결정할 수 있어 대기 시간을 줄이고 배달 속도를 높임`,
    p5e: `특히 겨울이나 비오는 날에는 음식이 준비되어 있어도 라이더가 가고 싶어하지 않으면 음식이 식어버립니다.`,
    p5f: `또한, `,
    p5fItalic: `"주문 수정"`,
    p5fCont: ` 버튼을 추가하면 실수로 주문을 거절했을 때 되돌릴 수 있어 도움이 됩니다.`,
    p5g: `거절한 주문을 추적하지 않으면 더 빠른 배정과 모두를 위한 더 나은 서비스가 가능해집니다.`,
    footerNote: "※ 이 글은 배민 무료 폰트 배민 하나 프로를 사용합니다",
    footerDate: "2025년 6월",
    backTooltip: "포트폴리오로 돌아가기",
    language: "English",
  },
};

export default function Baemin() {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const [language, setLanguage] = useState("en");
  const t = translations[language];

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "ko" : "en"));
  };

  return (
    <>
      <div
        className="flex flex-col justify-center items-center max-w-7xl bg-white rounded-2xl h-full m-auto my-30 px-2
      border-white/80 dark:bg-white/20 dark:shadow-lg shadow-black/4 backdrop-blur-[5.2px] border dark:text-white"
      >
        <div className="h-[400px] w-full max-w-6xl mt-15 m-auto">
          <div className="relative h-full rounded-2xl overflow-hidden">
            <Link to="/portfolio">
              <div
                className="absolute sm:top-6 sm:left-10 bottom-4 left-1/2 sm:bottom-auto sm:translate-x-0 -translate-x-1/2 transition-transform duration-300 hover:-translate-x-1 cursor-pointer z-10 p-1 rounded"
                onMouseEnter={() => setIsTooltipVisible(true)}
                onMouseLeave={() => setIsTooltipVisible(false)}
              >
                <MoveLeft className="text-white w-10 h-10" />

                {isTooltipVisible && (
                  <div className="absolute sm:top-8 sm:-left-8 top-full left-1/2 -translate-x-1/2 sm:translate-x-0 mt-2 w-40 rounded-lg z-50">
                    <p className="text-sm text-white font-semibold text-center sm:text-left">
                      {t.backTooltip}
                    </p>
                  </div>
                )}
              </div>
            </Link>

            <img
              src="/portfolioImg/baeminenglish.png"
              className="w-full h-full object-cover object-[center_12%] rounded-2xl"
            />

            {/* Language toggle button */}
            <button
              onClick={toggleLanguage}
              className="absolute top-6 right-10 bg-white/90 dark:bg-black/70 text-black dark:text-white px-4 py-2 rounded-lg z-10 hover:bg-white dark:hover:bg-black transition-colors"
            >
              {t.language}
            </button>
          </div>
        </div>

        {/* end of image div */}
        {/* start of body */}
        <div
          style={{ fontFamily: "BaeminHannaPro" }}
          className="flex flex-col items-start text-left w-full px-4 sm:px-6 lg:px-8 mx-auto"
        >
          <h1 className="text-4xl sm:text-6xl p-4 w-full text-center">
            {t.title1}
          </h1>

          <div className="w-full px-4 flex flex-col md:flex-row justify-center py-10 gap-10 md:gap-20 m-auto">
            <div className="flex flex-col w-full md:w-auto items-center md:items-start text-center md:text-left">
              <p className="mb-4 text-4xl">{t.pickup}</p>
              <img
                src="/portfolioImg/pickup.png"
                alt="Pick up system"
                className="w-full max-w-[350px] h-auto"
              />
            </div>
            <div className="flex flex-col w-full md:w-auto items-center md:items-start text-center md:text-left">
              <p className="mb-4 text-4xl">{t.acceptance}</p>
              <img
                src="/portfolioImg/pedalrate.jpeg"
                alt="Order Acceptance rate"
                className="w-full max-w-[350px] h-auto"
              />
            </div>
          </div>

          <h1 className="text-4xl sm:text-6xl p-4 w-full text-center">
            {t.solution}
          </h1>

          <div className="w-full px-4 flex flex-col md:flex-row justify-center py-10 gap-10 md:gap-20">
            <div className="flex flex-col w-full md:w-auto items-center md:items-start text-center md:text-left">
              <p className="mb-4 text-4xl">{t.solutionPickup}</p>
              <img
                src="/portfolioImg/qrpuckip.png"
                alt="QR Pick up system"
                className="w-full max-w-[310px] h-auto"
              />
            </div>
            <div className="flex flex-col w-full md:w-auto items-center md:items-start text-center md:text-left">
              <p className="mb-4 text-4xl">{t.solutionRemoveAcceptance}</p>
              <img
                src="/portfolioImg/norate.png"
                alt="Remove Order Acceptance rate"
                className="w-full max-w-[350px] h-auto"
              />
            </div>
          </div>

          <h1 className="text-4xl sm:text-6xl p-4 w-full text-center">
            {t.why}
          </h1>
          <div className="w-full flex flex-col py-10 space-y-6 px-4">
            <p className="text-2xl w-full whitespace-pre-line">{t.p1}</p>
            <div className="flex justify-center w-full">
              <img
                src="/portfolioImg/example.png"
                alt="Example"
                className="max-w-full h-auto rounded-2xl"
              />
            </div>
            <p className="text-2xl w-full whitespace-pre-line">
              {t.p2} <span className="italic">{t.itelicP}</span> {t.p3}
            </p>
            <p className="text-2xl w-full whitespace-pre-line">
              {t.p4} <span className="italic">{t.p4italic}</span> {t.p4cont}
              <a
                href="https://qr-code-generator-chi-nine.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2BC1BC] hover:underline text-3xl"
              >
                {t.p4linkText}
              </a>
            </p>

            <div className="text-2xl space-y-4 w-full">
              <p>
                <strong>{t.p5Title}</strong>
              </p>
              <p className="whitespace-pre-line">{t.p5a}</p>
              <ol className="list-decimal list-inside ml-6 space-y-1">
                <li className="whitespace-pre-line">{t.p5List1}</li>
                <li className="whitespace-pre-line">{t.p5List2}</li>
              </ol>
              <p className="whitespace-pre-line">{t.p5b}</p>
              <p className="whitespace-pre-line">{t.p5c}</p>
              <p className="whitespace-pre-line">{t.p5d}</p>
              <ul className="list-disc list-inside ml-6 space-y-1">
                <li className="whitespace-pre-line">{t.p5List3}</li>
                <li className="whitespace-pre-line">{t.p5List4}</li>
                <li className="whitespace-pre-line">{t.p5List5}</li>
              </ul>
              <p className="whitespace-pre-line">{t.p5e}</p>
              <p className="whitespace-pre-line">
                {t.p5f}
                <span className="italic">{t.p5fItalic}</span>
                {t.p5fCont}
              </p>
              <p className="whitespace-pre-line">{t.p5g}</p>
            </div>
          </div>
          <div className="w-full flex justify-start text-gray-500 py-4 gap-4 pb-4 px-4">
            <p>
              <span style={{ fontFamily: "sans-serif" }}>※</span> {t.footerNote}
            </p>
            <p>{t.footerDate}</p>
          </div>
        </div>
      </div>
    </>
  );
}
