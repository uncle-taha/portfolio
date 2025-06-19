import { useState } from "react";
import { createPortal } from "react-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import materialDark from "react-syntax-highlighter/dist/cjs/styles/prism/material-dark";

export default function CodeModal({ codeString }) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeString).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  const modal = (
    <div
      className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-10  py-10 "
      onClick={() => setOpen(false)}
    >
      <div
        className="bg-white h-[70%] md:h-[95%] max-w-6xl  rounded shadow-lg relative flex flex-col p-4 overflow-hidden "
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex-1 overflow-y-auto ">
          <SyntaxHighlighter
            language="jsx"
            style={materialDark}
            customStyle={{
              minHeight: "100%",
              overflowY: "auto",
              borderRadius: "6px",
            }}
          >
            {codeString}
          </SyntaxHighlighter>
        </div>
        <div className="flex justify-end gap-2 mt-3">
          <button
            onClick={handleCopy}
            className="bg-gray-700 text-white px-3 py-1 rounded"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
          <button
            onClick={() => setOpen(false)}
            className="bg-red-600 text-white px-3 py-1 rounded cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="text-center mt-4 max-w-6xl mx-auto">
        <button
          onClick={() => setOpen(true)}
          className="bg-blue-600 text-white py-2 rounded-lg cursor-pointer w-full text-lg hover:bg-blue-500"
        >
          Get the source code
        </button>
      </div>

      {open && createPortal(modal, document.body)}

      <hr className="mt-20 border-t-[2px] border-gray-400 w-full max-w-6xl mx-auto" />
    </>
  );
}
