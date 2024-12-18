import { useState, useEffect, useRef } from "react";
import { CgDetailsMore } from "react-icons/cg";
import { MdAddTask } from "react-icons/md";
import { useLocalStorage } from "../useLocalStorage";

export const ReminderSidebar = ({ showTaskbar, setShowTaskbar }) => {
  const taskbarRef = useRef(null);
  const labelRef = useRef();
  const addTaskRef = useRef(null);

  const [isAddTask, setIsAddTask] = useState(false);
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [date, setDate] = useState("");
  const [reminders, setReminders] = useState([]);
  const { set, get } = useLocalStorage("reminders");

  const reset = () => {
    setIsAddTask(false);
    setTitle("");
    setDetails("");
    setDate("");
  };

  const handleClickOutside = (event) => {
    if (taskbarRef.current && !taskbarRef.current.contains(event.target)) {
      setShowTaskbar(false);
      reset();
    }
  };

  useEffect(() => {
    const storedReminders = get() || [];
    const formattedReminders = storedReminders.map((reminder) => ({
      ...reminder,
      date: new Date(reminder.timestamp).toLocaleDateString(),
    }));
    setReminders(formattedReminders);

    if (showTaskbar) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showTaskbar]);

  const handleToday = () => {
    const today = new Date().toISOString().split("T")[0];
    setDate(today);
  };

  const handleTomorrow = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    setDate(tomorrow.toISOString().split("T")[0]);
  };

  const storeReminder = () => {
    if (!title && !details) {
      reset();
      return;
    }

    const reminderDate = date || new Date().toISOString().split("T")[0];
    const timestamp = new Date(reminderDate).getTime();
    const newReminder = { title, details, timestamp };

    const updatedReminders = [...(get() || []), newReminder];
    set(updatedReminders);

    setReminders(
      updatedReminders.map((reminder) => ({
        ...reminder,
        date: new Date(reminder.timestamp).toLocaleDateString(),
      }))
    );
    reset();
  };

  const removeReminder = (indexToRemove) => {
    const updatedReminders = reminders.filter(
      (_, index) => index !== indexToRemove
    );
    set(
      updatedReminders.map(({ title, details, timestamp }) => ({
        title,
        details,
        timestamp,
      }))
    );
    setReminders(updatedReminders);
  };

  useEffect(() => {
    const handleFormOutsideClick = (event) => {
      if (
        isAddTask &&
        addTaskRef.current &&
        !addTaskRef.current.contains(event.target) &&
        !labelRef.current.contains(event.target)
      ) {
        storeReminder();
      }
    };

    if (showTaskbar && isAddTask) {
      document.addEventListener("mousedown", handleFormOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleFormOutsideClick);
    };
  }, [showTaskbar, isAddTask, title, details, date]);

  return (
    <div
      ref={taskbarRef}
      className={`pt-20 fixed right-0 h-full md:w-1/2 sm:w-3/4 w-full bg-gray-100 shadow-lg transform transition-transform duration-500 ease-in-out ${
        showTaskbar ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div>
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
        <div
          onClick={() => setIsAddTask(!isAddTask)}
          className="flex justify-between items-center p-4 pt-0"
        >
          <span
            ref={labelRef}
            className="flex items-center gap-4 text-blue-800 text-base hover:bg-blue-100 w-full px-2 py-1 rounded cursor-pointer"
          >
            <MdAddTask />
            <p>Add a Reminder</p>
          </span>
        </div>
        {isAddTask && (
          <form
            ref={addTaskRef}
            onSubmit={(e) => {
              e.preventDefault();
              storeReminder();
            }}
            className="bg-white px-6 transform transition-transform duration-500 ease-in-out"
          >
            <input
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              type="text"
              placeholder="Title"
              className="w-full outline-none px-2 py-1 mb-2"
            />
            <span className="flex items-center px-2">
              <CgDetailsMore />
              <input
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                type="text"
                placeholder="Details"
                className="w-full outline-none px-2 py-1"
              />
            </span>
            <span className="flex items-center px-2 gap-4 py-1">
              <input type="submit" className="hidden" />
              <input
                type="button"
                value="Today"
                onClick={handleToday}
                className="p-1 px-3 bg-gray-200 rounded-lg cursor-pointer"
              />
              <input
                type="button"
                value="Tomorrow"
                onClick={handleTomorrow}
                className="p-1 px-3 bg-gray-200 rounded-lg cursor-pointer"
              />
              <input
                onChange={(e) => setDate(e.target.value)}
                type="date"
                name=""
                value={date}
              />
            </span>
          </form>
        )}
        {reminders.length > 0 ? (
          reminders.map((reminder, index) => (
            <div key={index} className="flex items-center gap-4 p-4 border-b">
              <input
                type="checkbox"
                onChange={() => removeReminder(index)}
                className="cursor-pointer"
              />
              <div>
                <h3 className="font-bold">{reminder.title}</h3>
                <p>{reminder.details}</p>
                <p className="text-sm text-gray-500">{reminder.date}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="p-4 text-center text-gray-500">
            No reminders added yet.
          </p>
        )}
      </div>
    </div>
  );
};
