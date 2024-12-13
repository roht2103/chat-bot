import { Input } from "antd";
import { FaArrowUp } from "react-icons/fa6";

const { TextArea } = Input;

export const InputComponent = ({ text, setText, getResponse }) => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="bg-gray-200 md:m-5 m-1 p-3 rounded-lg md:w-3/5 w-full h-fit flex-col items-center">
        <TextArea
          onChange={(e) => setText(e.target.value)}
          id="input"
          value={text}
          autoSize={{ minRows: 1, maxRows: 4 }}
          className="h-10 bg-gray-200 outline-none border-none text-xl flex-grow resize-none"
          placeholder="Type your message..."
          style={{
            backgroundColor: "rgb(229, 231, 235)",
            border: "none",
            outline: "none",
            boxShadow: "none",
          }}
        />
        <FaArrowUp
          onClick={() => {
            getResponse(text);
            setText("");
          }}
          className="bg-white rounded-full h-10 w-10 p-2 ml-3 cursor-pointer float-end"
        />
      </div>
    </div>
  );
};
