import { ChatBotNav } from "../components/ChatBotNav";
import { InputComponent } from "../components/InputComponent";
import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
export const ChatBot = () => {
  const [text, setText] = useState();
  const [chats, setChats] = useState({});
  const API_KEY = "AIzaSyA2xOaQUtb_teLDoGwC9Z3OvPtA10vAVb8";
  const getResponse = async (query) => {
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(query);
    setChats({ req: query, res: result.response.text() });
    console.log(result.response.text());
  };
  return (
    <div className="h-screen flex flex-col relative">
      <ChatBotNav />
      <InputComponent text={text} setText={setText} getResponse={getResponse} />
    </div>
  );
};
