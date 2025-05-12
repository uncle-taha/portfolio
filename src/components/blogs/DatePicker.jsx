import { useState, useEffect } from "react";
import CodeModal from "./CodeModal";
import { ChevronLeft, ChevronRight, Edit2 } from "lucide-react";
import {
  format,
  addMonths,
  subMonths,
  setDate,
  getDate,
  getMonth,
  getYear,
  getDaysInMonth,
} from "date-fns";

export default function DatePicker({ initialDate = new Date(), onDateChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(initialDate);
  const [currentMonth, setCurrentMonth] = useState(initialDate);
  const [highlightedDate, setHighlightedDate] = useState(5); // Day 5 is highlighted

  useEffect(() => {
    if (onDateChange) {
      onDateChange(selectedDate);
    }
  }, [selectedDate, onDateChange]);

  const handleDateSelect = (day) => {
    const newDate = setDate(currentMonth, day);
    setSelectedDate(newDate);
  };

  const handlePreviousMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const toggleCalendar = () => {
    setIsOpen(!isOpen);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  const handleOk = () => {
    setIsOpen(false);
    if (onDateChange) {
      onDateChange(selectedDate);
    }
  };

  const renderCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentMonth);
    const days = [];

    const firstDayOfMonth = new Date(
      getYear(currentMonth),
      getMonth(currentMonth),
      1
    ).getDay();

    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="h-8 w-8"></div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const isSelected =
        getDate(selectedDate) === day &&
        getMonth(selectedDate) === getMonth(currentMonth) &&
        getYear(selectedDate) === getYear(currentMonth);

      const isHighlighted = day === highlightedDate && !isSelected;

      days.push(
        <button
          key={day}
          onClick={() => handleDateSelect(day)}
          className={`h-8 w-8 rounded-full flex items-center justify-center text-sm
            ${isSelected ? "bg-purple-600 text-white" : ""}
            ${isHighlighted ? "border border-purple-600 text-black" : ""}
            hover:bg-gray-100 transition-colors  cursor-pointer`}
        >
          {day}
        </button>
      );
    }

    return days;
  };

  const code = `
  import { useState, useEffect } from "react";
  import { ChevronLeft, ChevronRight, Edit2 } from "lucide-react";
  import {
    format,
    addMonths,
    subMonths,
    setDate,
    getDate,
    getMonth,
    getYear,
    getDaysInMonth,
  } from "date-fns";

  export default function DatePicker({ initialDate = new Date(), onDateChange }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState(initialDate);
    const [currentMonth, setCurrentMonth] = useState(initialDate);
    const [highlightedDate, setHighlightedDate] = useState(5); // Day 5 is highlighted

    useEffect(() => {
      if (onDateChange) {
        onDateChange(selectedDate);
      }
    }, [selectedDate, onDateChange]);

    const handleDateSelect = (day) => {
      const newDate = setDate(currentMonth, day);
      setSelectedDate(newDate);
    };

    const handlePreviousMonth = () => {
      setCurrentMonth(subMonths(currentMonth, 1));
    };

    const handleNextMonth = () => {
      setCurrentMonth(addMonths(currentMonth, 1));
    };

    const toggleCalendar = () => {
      setIsOpen(!isOpen);
    };

    const handleCancel = () => {
      setIsOpen(false);
    };

    const handleOk = () => {
      setIsOpen(false);
      if (onDateChange) {
        onDateChange(selectedDate);
      }
    };

    const renderCalendarDays = () => {
      const daysInMonth = getDaysInMonth(currentMonth);
      const days = [];

      const firstDayOfMonth = new Date(
        getYear(currentMonth),
        getMonth(currentMonth),
        1
      ).getDay();

      for (let i = 0; i < firstDayOfMonth; i++) {
        days.push(<div key={\`empty-\${i}\`} className="h-8 w-8"></div>);
      }

      for (let day = 1; day <= daysInMonth; day++) {
        const isSelected =
          getDate(selectedDate) === day &&
          getMonth(selectedDate) === getMonth(currentMonth) &&
          getYear(selectedDate) === getYear(currentMonth);

        const isHighlighted = day === highlightedDate && !isSelected;

        days.push(
          <button
            key={day}
            onClick={() => handleDateSelect(day)}
            className={\`h-8 w-8 rounded-full flex items-center justify-center text-sm
              \${isSelected ? "bg-purple-600 text-white" : ""}
              \${isHighlighted ? "border border-purple-600 text-black" : ""}
              hover:bg-gray-100 transition-colors cursor-pointer\`}
          >
            {day}
          </button>
        );
      }

      return days;
    };

    return (
      <div className="w-full flex justify-center items-start pt-10">
        <div className="w-full max-w-sm h-auto">
          <div className="bg-white rounded-lg p-4 shadow-sm dark:bg-white/20 dark:text-white">
            <div className="mb-2 text-sm text-gray-600 dark:text-white">
              Select date
            </div>

            <div
              className="flex justify-between items-center py-3 border-b border-gray-200 cursor-pointer"
              onClick={toggleCalendar}
            >
              <div className="text-2xl font-medium">
                {format(selectedDate, "EEE, MMM d")}
              </div>
              <Edit2 size={18} className="text-gray-500" />
            </div>

            {isOpen && (
              <div className="mt-2">
                <div className="flex justify-between items-center mb-4">
                  <div className="relative">
                    <select
                      className="appearance-none bg-transparent pr-6 py-1 pl-2 text-gray-700 cursor-pointer dark:text-white"
                      value={format(currentMonth, "MMMM yyyy")}
                      onChange={() => {}}
                    >
                      <option>{format(currentMonth, "MMMM yyyy")}</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-white">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <button
                      onClick={handlePreviousMonth}
                      className="p-1 rounded-full hover:bg-gray-200 cursor-pointer"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={handleNextMonth}
                      className="p-1 rounded-full hover:bg-gray-200 cursor-pointer"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-7 gap-1 mb-2">
                  {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
                    <div
                      key={index}
                      className="h-8 w-8 flex items-center justify-center text-sm text-gray-500 dark:text-white"
                    >
                      {day}
                    </div>
                  ))}
                  {renderCalendarDays()}
                </div>

                <div className="flex justify-end space-x-2 mt-4">
                  <button
                    onClick={handleCancel}
                    className="px-4 py-1 text-purple-600 hover:bg-gray-100 rounded cursor-pointer dark:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleOk}
                    className="px-4 py-1 text-purple-600 hover:bg-gray-100 rounded cursor-pointer dark:text-white"
                  >
                    OK
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
`;

  return (
    <>
      <div className="w-full  flex justify-center items-start pt-10 mb-10">
        <div className="w-full max-w-sm h-auto ">
          <div className="bg-white rounded-lg p-4 shadow-sm dark:bg-white/20 dark:text-white">
            <div className="mb-2 text-sm text-gray-600 dark:text-white">
              Select date
            </div>

            <div
              className="flex justify-between items-center py-3 border-b border-gray-200 cursor-pointer"
              onClick={toggleCalendar}
            >
              <div className="text-2xl font-medium">
                {format(selectedDate, "EEE, MMM d")}
              </div>
              <Edit2 size={18} className="text-gray-500" />
            </div>

            {isOpen && (
              <div className="mt-2">
                <div className="flex justify-between items-center mb-4">
                  <div className="relative">
                    <select
                      className="appearance-none bg-transparent pr-6 py-1 pl-2 text-gray-700 cursor-pointer dark:text-white"
                      value={format(currentMonth, "MMMM yyyy")}
                      onChange={() => {}}
                    >
                      <option>{format(currentMonth, "MMMM yyyy")}</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-white">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <button
                      onClick={handlePreviousMonth}
                      className="p-1 rounded-full hover:bg-gray-200 cursor-pointer"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={handleNextMonth}
                      className="p-1 rounded-full hover:bg-gray-200 cursor-pointer"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-7 gap-1 mb-2">
                  {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
                    <div
                      key={index}
                      className="h-8 w-8 flex items-center justify-center text-sm text-gray-500  dark:text-white"
                    >
                      {day}
                    </div>
                  ))}
                  {renderCalendarDays()}
                </div>

                <div className="flex justify-end space-x-2 mt-4">
                  <button
                    onClick={handleCancel}
                    className="px-4 py-1 text-purple-600 hover:bg-gray-100 rounded cursor-pointer dark:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleOk}
                    className="px-4 py-1 text-purple-600 hover:bg-gray-100 rounded cursor-pointer dark:text-white"
                  >
                    OK
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <CodeModal codeString={code} />
    </>
  );
}
