import React, { useEffect, useRef, useState } from "react";
import video1 from "../assets/videos/siyaIg.mp4";
import video6 from "../assets/videos/video01.mp4";
import video7 from "../assets/videos/mcVid3.mp4";
import video8 from "../assets/videos/hiBrew.mp4";
import video9 from "../assets/videos/blueTokai.mp4";
import video10 from "../assets/videos/ibw.mp4";
import video11 from "../assets/videos/ibweek.mp4";
import video12 from "../assets/videos/indiaBarWeek.mp4";
import video13 from "../assets/videos/magandeepSingh.mp4";
import video14 from "../assets/videos/pahadiTakeover.mp4";
import video15 from "../assets/videos/sidegar.mp4";
import video16 from "../assets/videos/video16.mp4";

const videos = [video8, video7, video6, video1, video9, video10, video11, video12, video13, video14, video15, video16];

const LazyVideo = ({ src }) => {
  const videoRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(videoRef.current);
        }
      },
      { threshold: 0.1 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) observer.unobserve(videoRef.current);
    };
  }, []);

  return (
    <div
      ref={videoRef}
      className="flex-shrink-0 w-[200px] h-[300px] md:w-[300px] md:h-[450px] mx-2 rounded-xl overflow-hidden"
    >
      {isVisible ? (
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source
            src={src}
            type={src.endsWith(".mp4") ? "video/mp4" : "video/webm"}
          />
        </video>
      ) : (
        <div className="w-full h-full bg-gray-200 animate-pulse" />
      )}
    </div>
  );
};

const InfiniteCarouselRight = () => {
  const duplicatedVideos = [...videos, ...videos];

  return (
    <div className="overflow-hidden w-full">
      <div className="flex animate-scroll-right whitespace-nowrap">
        {duplicatedVideos.map((video, index) => (
          <LazyVideo key={index} src={video} />
        ))}
      </div>
    </div>
  );
};

export default InfiniteCarouselRight;
