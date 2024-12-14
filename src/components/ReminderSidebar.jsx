import { useState, useEffect, useRef } from "react";
import { FaBell } from "react-icons/fa";
import { MdAddTask } from "react-icons/md";
export const ReminderSidebar = ({ showTaskbar, setShowTaskbar }) => {
  const taskbarRef = useRef(null);

  const handleClickOutside = (event) => {
    if (taskbarRef.current && !taskbarRef.current.contains(event.target)) {
      setShowTaskbar(false);
    }
  };

  useEffect(() => {
    if (showTaskbar) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showTaskbar]);

  return (
    <div
      ref={taskbarRef}
      className={`pt-20 fixed right-0 h-full md:w-1/2 sm:w-3/4  w-full bg-gray-100 shadow-lg transform transition-transform duration-500 ease-in-out ${
        showTaskbar ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="">
        <div className="flex justify-between items-center mb-4 p-4 border-b-2 border-gray-300">
          <span>
            <p className="text-gray-600">Reminders</p>
            <h2 className="text-2xl font-bold">My Reminders</h2>
          </span>
          <button
            className="text-3xl font-bold"
            onClick={() => setShowTaskbar(false)}
          >
            &times;
          </button>
        </div>
        <div className="flex justify-between items-center mb-4 p-4 pt-0">
          <span className="flex items-center gap-4 text-blue-800 text-base hover:bg-blue-100 w-full px-2 py-1 rounded cursor-pointer">
            <MdAddTask />
            <p>Add a Remainder</p>
          </span>
        </div>
      </div>
    </div>
  );
};
