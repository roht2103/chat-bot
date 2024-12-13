import { ChatBotNav } from "../components/ChatBotNav";
import { InputComponent } from "../components/InputComponent";
export const ChatBot = () => {
  return (
    <div className="h-screen flex flex-col border-4 border-green-900 relative">
      <ChatBotNav />
      <InputComponent />
    </div>
  );
};
