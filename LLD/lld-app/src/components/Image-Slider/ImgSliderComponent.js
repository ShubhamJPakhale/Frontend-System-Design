import React, { useEffect, useState } from "react";

const ImgSliderComponent = () => {
  const [imgData, setImgData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(2);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const result = await fetch("https://picsum.photos/v2/list?limit=5");
      if (!result.ok) throw new Error("Failed to fetch images");
      const data = await result.json();
      const urls = data.map((img) => img.download_url);
      setImgData(urls);
    } catch (error) {
      console.log(`error while fetching images: ${error}`);
    }
  };

  const loadNextImage = () => {
    setActiveIndex((prev) => (prev !== imgData.length - 1 ? prev + 1 : 0));
  };

  const loadPrevImage = () => {
    setActiveIndex((prev) => (prev !== 0 ? prev - 1 : imgData.length - 1));
  };

  useEffect(() => {
    if (imgData.length === 0) return;
    const interval = setInterval(() => {
      loadNextImage();
    }, 3000);
    return () => clearInterval(interval);
  }, [imgData]);

  return (
    <div className="flex flex-wrap gap-4 justify-center p-4 items-center">
      <img
        src="https://www.svgrepo.com/show/476213/arrow-left-thin.svg"
        alt="left-arrow"
        className="w-12 h-12 cursor-pointer"
        onClick={loadPrevImage}
      />
      {imgData && imgData.length > 0 && (
        <img
          src={imgData[activeIndex]}
          alt="Random"
          className="w-[25%] h-64 "
        />
      )}
      <img
        src="https://uxwing.com/wp-content/themes/uxwing/download/arrow-direction/angle-circle-right-icon.png"
        alt="right-arrow"
        className="w-12 h-12 cursor-pointer"
        onClick={loadNextImage}
      />
    </div>
  );
};

export default ImgSliderComponent;
