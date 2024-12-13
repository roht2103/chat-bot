import { Button, Flex } from "antd";
export const Header = () => {
  return (
    <div className="h-full flex items-center justify-center flex-col">
      <p className="lg:text-[10rem] text-8xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 lora tracking-wide animate-gradient">
        Askora
      </p>
      <p className="lg:text-2xl text-xl text-center text-gray-600">
        Where curiosity meets clarity
      </p>
      <Flex className="gap-3 mt-3" wrap>
        <Button type="primary" className="text-lg">
          Start a chat
        </Button>
        <Button className="text-lg">Set Reminders</Button>
      </Flex>
    </div>
  );
};
