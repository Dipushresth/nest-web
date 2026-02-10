"use client";
import { Icon } from "@/assets/icons/icons";
import { useState } from "react";

const VideoSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = "tsmaQdgidKg";

  return (
    <section className="py-8 container text-center">
      <div
        className="relative mb-3 aspect-video rounded-[40px] overflow-hidden flex items-center justify-center "
        onClick={() => setIsPlaying(true)}
      >
        {isPlaying ? (
          <iframe
            className="w-full h-full absolute inset-0"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        ) : (
          <>
            {/* Video Thumbnail Placeholder */}
            <img
              src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
              alt="Video Thumbnail"
              className="w-full h-full object-cover absolute inset-0 opacity-60 group-hover:opacity-80 transition-opacity"
            />

            <div className="relative z-10 w-24 h-24 md:w-32 md:h-32 bg-white/90 rounded-full flex items-center justify-center text-play shadow-2xl transform group-hover:scale-110 transition-transform duration-500">
              <Icon name="play" />
            </div>
          </>
        )}
      </div>
      <p>Get A free 15 min Demo. See if it fits your business</p>
    </section>
  );
};

export default VideoSection;
