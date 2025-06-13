import React, { useEffect, useRef, useState } from "react";
import video1 from "../assets/videos/hendrcik01.mp4";
import video2 from "../assets/videos/icwLandscape.mp4";
import video3 from "../assets/videos/monsho.mp4";
import video17 from "../assets/videos/video17.mp4";
import video18 from "../assets/videos/video18.mp4";
import video19 from "../assets/videos/video19.mp4";

const videos = [video1, video2, video3, video17,video18, video2, video3, video1, video17,video18, video3,video19];

const LazyLandscapeVideo = ({ src }) => {
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
      className="flex-shrink-0 w-[200px] h-[100px] md:w-[400px] md:h-[200px] mx-2 rounded-xl overflow-hidden"
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
        <div className="w-full h-full bg-gray-300 animate-pulse" />
      )}
    </div>
  );
};

const InfiniteLandscapeRight = () => {
  const duplicatedVideos = [...videos, ...videos]; // For infinite scroll illusion

  return (
    <div className="overflow-hidden w-full">
      <div className="flex animate-scroll-right whitespace-nowrap">
        {duplicatedVideos.map((video, index) => (
          <LazyLandscapeVideo key={index} src={video} />
        ))}
      </div>
    </div>
  );
};

export default InfiniteLandscapeRight;
