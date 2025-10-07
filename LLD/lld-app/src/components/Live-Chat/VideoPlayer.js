import React from "react";

const VideoPlayer = () => {
  return (
    <div className="m-5 ">
      <iframe
        width="800"
        height="400"
        src="https://www.youtube.com/embed/t1tZbzvWPJk?si=8UvKIxzM-gXqaOFP"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
