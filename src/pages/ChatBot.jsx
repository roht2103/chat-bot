import { ChatBotNav } from "../components/ChatBotNav";
import { InputComponent } from "../components/InputComponent";
import { useState } from "react";

export const ChatBot = () => {
  const [text, setText] = useState();
  const [response, setResponse] = useState("");

  const getResponse = () => {
    alert("hello");
  };
  return (
    <div className="h-screen flex flex-col relative">
      <ChatBotNav />
      <InputComponent text={text} setText={setText} getResponse={getResponse} />
    </div>
  );
};
