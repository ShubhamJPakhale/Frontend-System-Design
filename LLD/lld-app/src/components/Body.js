import React, { useEffect, useState } from "react";
import MemeCard from "./Shimmer-UI/MemeCard";
import Shimmer from "./Shimmer-UI/Shimmer";

const Body = () => {
  const [memeData, setMemeData] = useState([]);
  const [showShimmer, setShowShimmer] = useState(false);

  useEffect(() => {
    fetchData();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // this function will be called when user scrolls to bottom of the page - then it will call the fetchData function to load more memes
  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 2) {
      fetchData();
    }
  };

  const fetchData = async () => {
    try {
      setShowShimmer(true);
      const result = await fetch("https://meme-api.com/gimme/20");
      if (result.status !== 200) {
        throw new Error("Failed to fetch memes");
      }
      const data = await result.json();
      setShowShimmer(false);
      setMemeData((prevMemeData) => [...prevMemeData, ...data.memes]);
    } catch (error) {
      setShowShimmer(false);
      console.error("Error fetching meme data:", error);
    }
  };

  return (
    <div className="flex flex-wrap gap-4 p-4">
      {memeData &&
        memeData.map((meme, i) => (
          <MemeCard meme={meme} key={meme.author + i} />
        ))}
      {showShimmer && <Shimmer />}
    </div>
  );
};

export default Body;
