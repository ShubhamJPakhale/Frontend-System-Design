import React from "react";

const ChatMessage = ({ id, name, message }) => {
  return (
    <div className="flex items-start gap-3 mb-4">
      <img
        src={`https://ui-avatars.com/api/?name=${name}&background=random`}
        alt="user"
        className="h-12 w-12 rounded-full"
      />
      <div className="bg-gray-100 p-3 rounded-xl">
        <div className="font-semibold">{name}</div>
        <div className="text-gray-700">{message}</div>
      </div>
    </div>
  );
};

export default ChatMessage;
