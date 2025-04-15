import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Title from "./Title";
import university from "../assets/university.png";
export default function FAQSection() {
  const faqs = [
    {
      question: "Where did you study?",
      answer: (
        <span className="flex items-center gap-2">
          Korea University
          <img
            src={university}
            alt="Korea University"
            className="h-10 bg-transparent"
          />
        </span>
      ),
    },
    {
      question: "Do you work remotely?",
      answer:
        "Yes, I'm open to working in fully remote, on-site, or hybrid environment",
    },
    {
      question: "What is your major??",
      answer: "Computer Science.",
    },
    {
      question: "What languages do you speak?",
      answer: "English, Korean, Uzbek",
    },
    {
      question: "Are you available for work?",
      answer: "Yes, open to full-time.",
    },
    {
      question: "Have you worked on real-world projects?",
      answer:
        "Yes, I've worked on several personal and group projects—feel free to explore my work in the 'Projects' section above.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Split FAQs into two columns
  const leftColumnFAQs = faqs.filter((_, index) => index % 2 === 0);
  const rightColumnFAQs = faqs.filter((_, index) => index % 2 !== 0);

  return (
    <div className="w-full bg-[#E9ECF5] pb-30 pt-20 sm:pb-20 sm:pt-15  dark:bg-[#14121a]">
      <Title
        title="Get Quick Answers"
        paragraph="Find fast answers to your most common questions about me."
      />
      <div className="max-w-6xl mx-auto  bg-[#E9ECF5] px-8 md:px-10 lg:px-0 dark:bg-[#14121a] ">
        <div className="flex flex-col  md:flex-row gap-4">
          {/* Left Column */}
          <div className="flex-1 space-y-4 ">
            {leftColumnFAQs.map((faq, index) => {
              const originalIndex = index * 2;
              return (
                <FAQItem
                  key={originalIndex}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === originalIndex}
                  onClick={() => toggleFAQ(originalIndex)}
                />
              );
            })}
          </div>

          {/* Right Column */}
          <div className="flex-1 space-y-4">
            {rightColumnFAQs.map((faq, index) => {
              const originalIndex = index * 2 + 1;
              return (
                <FAQItem
                  key={originalIndex}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === originalIndex}
                  onClick={() => toggleFAQ(originalIndex)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function FAQItem({ question, answer, isOpen, onClick }) {
  return (
    <motion.div
      layout // Smoothly animates height changes
      className={`border border-gray-200 p-6 rounded-lg shadow-sm  bg-[#F8F9FE] cursor-pointer ${
        isOpen ? "bg-[#F8F9FE]" : "hover:bg-[#F8F9FE]"
      } transition-colors hover:text-blue-600 dark:bg-white/20 dark:hover:bg-white/90`}
      initial={{ borderRadius: 8 }}
    >
      <motion.button
        layout
        className="flex justify-between items-center w-full text-left font-medium text-lg cursor-pointer py-0"
        onClick={onClick}
      >
        <motion.span className="flex-1" layout>
          {question}
        </motion.span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="h-5 w-5" />
        </motion.span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="mt-2 text-gray-600 overflow-hidden"
          >
            {answer}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
