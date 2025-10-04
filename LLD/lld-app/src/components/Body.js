import React, { useEffect, useState } from "react";
import MemeCard from "./Shimmer-UI/MemeCard";
import Shimmer from "./Shimmer-UI/Shimmer";

const Body = () => {
  const [memeData, setMemeData] = useState([]);
  const [showShimmer, setShowShimmer] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setShowShimmer(true);
    const result = await fetch("https://meme-api.com/gimme/20");
    const data = await result.json();
    setMemeData(data.memes);
    setShowShimmer(false);
  };

  return (
    <div className="flex flex-wrap gap-4 p-4">
      {showShimmer && <Shimmer />}
      {memeData &&
        memeData.map((meme) => <MemeCard meme={meme} key={meme.author} />)}
    </div>
  );
};

export default Body;
