import { useState } from "react";
import { CiLogin, CiLogout } from "react-icons/ci";
import { useAuth0 } from "@auth0/auth0-react";
import { Popover } from "antd";
export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } =
    useAuth0();
  console.log(isAuthenticated && user);
  return (
    <nav className="relative bg-white shadow ">
      <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <a href="#">
            <h1 className="text-3xl text-blue-500 lora tracking-wide">
              Askora
            </h1>
          </a>

          <div className="flex lg:hidden">
            <button
              type="button"
              className="text-gray-500 dark:text-gray-900 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
              aria-label="toggle menu"
              onClick={() => setIsOpen(!isOpen)}
            >
              {!isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div
          className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white  md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center ${
            isOpen ? "translate-x-0 opacity-100" : "opacity-0 -translate-x-full"
          }`}
        >
          <div className="text-lg flex flex-col md:flex-row md:mx-6">
            <a
              className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-900 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
              href="#"
            >
              Home
            </a>
            <a
              className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-900 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
              href="#"
            >
              About
            </a>
            <a
              className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-900 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
              href="#"
            >
              Contact
            </a>
          </div>

          <div className="flex justify-center md:block">
            {isAuthenticated ? (
              <section
                onClick={(e) => {
                  e.preventDefault();
                  !isAuthenticated && loginWithRedirect();
                }}
              >
                {isLoading
                  ? "Loading..."
                  : isAuthenticated && (
                      <p className="text-lg flex items-center relative text-gray-700 transition-colors duration-300 transform dark:text-gray-900 dark:hover:text-gray-900">
                        Hello, {user.name}{" "}
                        <img
                          src={user.picture}
                          className="rounded-full h-9 ml-3"
                          alt=""
                        />
                        <CiLogout
                          title="log out"
                          className="ml-2 text-3xl cursor-pointer"
                          onClick={() => logout()}
                        />
                      </p>
                    )}
              </section>
            ) : (
              <CiLogin
                title="log in"
                className="text-3xl cursor-pointer"
                onClick={() => loginWithRedirect()}
              />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
