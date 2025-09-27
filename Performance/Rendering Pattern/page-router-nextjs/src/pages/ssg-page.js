import { useEffect, useState } from "react";
import Image from "next/image";

const Tutorials = ({ video }) => {
  return (
    <li className="mb-6">
      <a
        href={`https://www.youtube.com/watch?v=${video.id}`}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-80"
      >
        <Image
          src={video.image}
          alt={video.title}
          width={420}
          height={200}
          className="mb-4 rounded-md"
        />
        <h4>{video.title}</h4>
        <div>
          {video.views} &bull; {video.published}
        </div>
      </a>
    </li>
  );
};

export default function CsrPage({ videosData }) {
  return (
    <div>
      <h1>Client-Side Rendering Page</h1>
      <ul>
        {videosData.map((video) => (
          <Tutorials key={video.id} video={video} />
        ))}
      </ul>
    </div>
  );
}

// This function gets called on every request
export async function getStaticProps() {
  try {
    const response = await fetch("http://localhost:4000/tutorials");
    if (!response.ok) {
      throw new Error("Failed to fetch videos");
    }
    const data = await response.json();
    return { props: { videosData: data } };
  } catch (error) {
    console.log(`Error while fetching videos : ${error}`);
    return { props: { videosData: [] } };
  }
}
