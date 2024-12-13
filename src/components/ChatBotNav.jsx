import { useState } from "react";
import { CiLogin, CiLogout } from "react-icons/ci";
import { IoIosArrowBack } from "react-icons/io";
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate, useNavigate } from "react-router-dom";

export const ChatBotNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } =
    useAuth0();
  const navigate = useNavigate();
  return (
    <nav className="w-full bg-white shadow">
      <div className="container md:px-6 py-4 mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between md:gap-3 gap-1">
            <IoIosArrowBack
              title="Back"
              className="md:ml-2 text-3xl cursor-pointer text-purple-800"
              onClick={() => navigate("/")}
            />
            <img
              src="/logo.png"
              alt="logo"
              className="h-12 md:block hidden rounded-full"
            />
            <a href="#">
              <h1 className="md:text-3xl text-xl text-blue-500 lora tracking-wide">
                Askora - Chat Bot
              </h1>
            </a>
          </div>

          <div className="flex justify-center md:block">
            {isAuthenticated ? (
              <section>
                {isLoading ? (
                  "Loading..."
                ) : (
                  <p className="text-lg flex items-center text-gray-700">
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
