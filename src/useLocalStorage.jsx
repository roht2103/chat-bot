import { useState } from "react";

export const useLocalStorage = (key) => {
  // Helper to get initial value from localStorage
  const getStoredValue = () => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : null;
  };

  // State to synchronize localStorage data
  const [storedValue, setStoredValue] = useState(getStoredValue);

  // Set data into localStorage
  const set = (value) => {
    try {
      const valueToStore =
        typeof value === "function" ? value(storedValue) : value;
      localStorage.setItem(key, JSON.stringify(valueToStore));
      setStoredValue(valueToStore); // Update state
    } catch (error) {
      console.error("Error setting localStorage key:", key, error);
    }
  };

  // Get data from localStorage
  const get = () => {
    try {
      return getStoredValue();
    } catch (error) {
      console.error("Error getting localStorage key:", key, error);
      return null;
    }
  };

  // Delete data from localStorage
  const remove = () => {
    try {
      localStorage.removeItem(key);
      setStoredValue(null); // Clear state
    } catch (error) {
      console.error("Error removing localStorage key:", key, error);
    }
  };

  return { set, get, remove, value: storedValue };
};
