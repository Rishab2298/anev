

import React from "react";
import video1 from "../assets/videos/hendrcik01.mp4";
import video2 from "../assets/videos/icwLandscape.mp4";
import video3 from "../assets/videos/monsho.mp4";


const videos = [video1, video2,video3, video1, video2, video3,video1, video2,video3];

const InfiniteLandscapeRight = () => {
  const duplicatedVideos = [...videos, ...videos]; // Duplicate for infinite scroll illusion

  return (
    <div className="overflow-hidden w-full">
      <div className="flex animate-scroll-right whitespace-nowrap">
        {duplicatedVideos.map((video, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[200px] h-[100px] md:w-[400px] md:h-[200px] mx-2 rounded-xl overflow-hidden"
          >
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            >
              <source
                src={video}
                type={video.endsWith(".mp4") ? "video/mp4" : "video/webm"}
              />
            </video>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteLandscapeRight;
