import { ChatBotNav } from "../components/ChatBotNav";
import { InputComponent } from "../components/InputComponent";
import { Chats } from "../components/Chats";
import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

export const ChatBot = () => {
  const [text, setText] = useState();
  const [chats, setChats] = useState([]);
  const API_KEY = "AIzaSyBxDoX3V9NFke3h8kiCKUWZ7q2iVOHXNlc";

  const getResponse = async (query) => {
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(query);
    setChats((prevChats) => [
      ...prevChats,
      { req: query, res: result.response.text() },
    ]);
    console.log(result.response.text());
  };

  return (
    <div className="grid grid-rows-[auto_1fr_auto] h-screen">
      {/* Nav Component */}
      <div className="row-span-1">
        <ChatBotNav />
      </div>

      {/* Chats Component */}
      <div className="row-span-1 overflow-y-auto">
        <Chats chats={chats} />
      </div>

      {/* Input Component */}
      <div className="row-span-1">
        <InputComponent
          text={text}
          setText={setText}
          getResponse={getResponse}
        />
      </div>
    </div>
  );
};
