import React from "react";
import video1 from "../assets/videos/siyaIg.mp4";
// import video2 from "../assets/2.webm";
// import video3 from "../assets/3.mp4";
// import video4 from "../assets/4.webm";
// import video5 from "../assets/5.webm";
import video6 from "../assets/videos/video01.mp4";
import video7 from "../assets/videos/mcVid3.mp4";
// video2, video3, video4, video5

const videos = [video1, video7, video6,video1, video7, video6,video1, video7, video6];

const InfiniteCarouselRight = () => {
  const duplicatedVideos = [...videos, ...videos]; // Duplicate for infinite scroll illusion

  return (
    <div className="overflow-hidden w-full">
      <div className="flex animate-scroll-right whitespace-nowrap">
        {duplicatedVideos.map((video, index) => (
          <div
            key={index}
            className="flex-shrink-0  w-[200px] h-[300px] md:w-[300px] md:h-[450px] mx-2 rounded-xl overflow-hidden"
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

export default InfiniteCarouselRight;
