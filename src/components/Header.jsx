import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button, Flex } from "antd";
import { Navigate, useNavigate } from "react-router-dom";
import { ReminderSidebar } from "./ReminderSidebar";

export const Header = () => {
  const navigate = useNavigate();
  const { loginWithRedirect, user, isAuthenticated, isLoading } = useAuth0();
  const [showTaskbar, setShowTaskbar] = useState(false);

  return (
    <div className="h-full flex items-center justify-center flex-col relative">
      <p className="lg:text-[10rem] text-8xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 lora tracking-wide animate-gradient">
        Askora
      </p>
      <p className="lg:text-2xl text-xl text-center text-gray-600">
        Where curiosity meets clarity
      </p>
      <Flex className="gap-3 mt-3" wrap>
        <Button
          type="primary"
          className="text-lg"
          onClick={() => {
            isAuthenticated
              ? navigate("/askora-chat-bot")
              : loginWithRedirect();
          }}
        >
          Start a chat
        </Button>
        <Button className="text-lg" onClick={() => setShowTaskbar(true)}>
          Set Reminders
        </Button>
      </Flex>
      <ReminderSidebar
        showTaskbar={showTaskbar}
        setShowTaskbar={setShowTaskbar}
      />
    </div>
  );
};
