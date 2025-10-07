import React from "react";
import VideoPlayer from "./VideoPlayer";
import ChatWindow from "./ChatWindow";

const LiveChat = () => {
  return (
    <div className="flex space-2">
      <VideoPlayer />
      <ChatWindow />
    </div>
  );
};

export default LiveChat;
