import { useAuth0 } from "@auth0/auth0-react";
import { Button, Flex } from "antd";
import { Navigate, useNavigate } from "react-router-dom";
export const Header = () => {
  const navigate = useNavigate();
  const { loginWithRedirect, user, isAuthenticated, isLoading } = useAuth0();
  return (
    <div className="h-full flex items-center justify-center flex-col">
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
        <Button className="text-lg">Set Reminders</Button>
      </Flex>
    </div>
  );
};
