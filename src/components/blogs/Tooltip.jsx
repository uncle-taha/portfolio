import { useState } from "react";
import CodeModal from "./CodeModal";

export default function Tooltip() {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const code = `
import { useState } from "react";

export default function Tooltip() {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  return (
    <div className="flex h-[400px] items-center justify-center bg-white rounded-2xl my-10">
      <div className="relative inline-flex items-center">
        <div
          className="flex items-center justify-center rounded-full bg-gray-800 text-white cursor-pointer px-4 py-2"
          onMouseEnter={() => setIsTooltipVisible(true)}
          onMouseLeave={() => setIsTooltipVisible(false)}
        >
          tooltip
        </div>

        {isTooltipVisible && (
          <div className="absolute left-full ml-2 w-64 rounded-lg bg-white p-4 shadow-lg z-50">
            <div className="space-y-2">
              <h4 className="font-medium">Rich tooltip</h4>
              <p className="text-sm text-gray-500">
                Your text goes here.
              </p>
              <div className="pt-2">
                <p className="text-sm font-medium">Action</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
`;

  return (
    <>
      <div className="flex h-[400px] items-center justify-center bg-white rounded-2xl my-10 dark:bg-white/20">
        <div className="relative inline-flex items-center">
          <div
            className="flex items-center justify-center rounded-full bg-gray-800 text-white cursor-pointer px-4 py-2"
            onMouseEnter={() => setIsTooltipVisible(true)}
            onMouseLeave={() => setIsTooltipVisible(false)}
          >
            tooltip
          </div>

          {isTooltipVisible && (
            <div className="absolute left-full ml-2 w-64 rounded-lg bg-white p-4 shadow-lg z-50 ">
              <div className="space-y-2">
                <h4 className="font-medium dark:text-black">Rich tooltip</h4>
                <p className="text-sm text-gray-500 dark:text-black">
                  Rich tooltips bring attention to a particular element or
                  feature that warrants the user's focus. It supports multiple
                  lines of informational text.
                </p>
                <div className="pt-2">
                  <p className="text-sm font-medium dark:text-black">Action</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <CodeModal codeString={code} />
    </>
  );
}
