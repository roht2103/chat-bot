export const Chats = ({ chats }) => {
  return (
    <div
      style={{
        overflowY: "scroll",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
      className="overflow-y-auto h-full flex justify-center py-5 space-y-4 md:text-base text-sm"
    >
      <div className="md:w-3/5 md:px-0 px-4 w-full flex flex-col gap-7">
        {chats.length > 0 ? (
          chats.map((chat, index) => (
            <div
              key={index}
              className="flex flex-col space-y-2 md:space-y-0 md:space-x-4"
            >
              {/* Request on the right */}
              <div className="grid justify-items-end">
                <p className="font-semibold break-words whitespace-pre-wrap w-fit bg-gray-200 px-5 py-2 rounded-lg">
                  {chat.req}
                </p>
              </div>
              {/* Response on the left */}
              <div className="grid justify-items-start">
                <p className="break-words whitespace-pre-wrap">{chat.res}</p>
              </div>
            </div>
          ))
        ) : (
          <h1 className="text-center text-lg">Hello, how can I help you?</h1>
        )}
      </div>
    </div>
  );
};
