import "./RecentWork.css";
import { CircleArrowUp } from "lucide-react";
import Title from "../components/Title";

function RecentWork() {
  return (
    <>
      <Title
        title="Recent Work"
        paragraph="Dive into my latest graphic and web design projects and case studies, showcasing my unique expertise and creative process."
      />
      <div className="parent-div   ">
        <div className="container-div  dark:bg-gray-900">
          <div className="div-1 rounded-3xl object-cover dark:bg-gray-900 "></div>
          <div class="div-2 cursor-pointer "></div>
          <div class="div-3 "></div>
          <div class="div-4 "></div>
          <div class="div-7 "></div>
          <div class="div-5 "></div>
          <div class="div-6 cursor-pointer"></div>
          <div class="div-8 cursor-pointer "></div>
          <div class="div-9 cursor-pointer"></div>
          <div class="div-10 "></div>
          <div class="div-11 ">
            <CircleArrowUp className="rotate-45 h-11 w-11 cursor-pointer hover:text-green-600 transition-transform duration-200 hover:rotate-90 " />
          </div>
          <div class="div-12 "></div>
          <div class="div-13 "></div>
          <div class="div-14  ">
            <CircleArrowUp className="rotate-45 h-11 w-11 cursor-pointer hover:text-green-600 transition-transform duration-200 hover:rotate-90" />
          </div>
          <div class="div-15 ">
            <CircleArrowUp className="rotate-45 h-11 w-11 cursor-pointer hover:text-green-600 transition-transform duration-200 hover:rotate-90" />
          </div>
          <div class="div-16 "></div>
          <div class="div-17 "></div>
          <div class="div-18 ">
            <CircleArrowUp className="rotate-45 h-11 w-11 cursor-pointer hover:text-green-600 transition-transform duration-200 hover:rotate-90" />
          </div>
          <div class="div-19 "></div>
          <div class="div-20 "></div>
        </div>
      </div>
    </>
  );
}

export default RecentWork;
