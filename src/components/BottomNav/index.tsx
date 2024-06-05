"use client";
import { AudioContext, AudioContextType } from "@/context/audioContext";
import { CalendarClock, Heart, MapPin, Music, User } from "lucide-react";
import { useContext, useEffect, useRef, useState } from "react";

const BottomNav = () => {
  const { isPlaying, handlePlaying } = useContext(AudioContext) as AudioContextType;
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  }, [isPlaying, audioRef]);

  return (
    <div className="flex justify-between items-center max-w-[480px] w-full fixed bottom-4 z-10 px-4">
      <div className="flex items-center justify-center bg-secondary shadow-lg w-56 p-4 rounded-full">
        <div className="flex items-center justify-between w-full">
          <div className="p-2 rounded-full bg-accent text-secondary cursor-pointer">
            <Heart />
          </div>
          <div className="p-2 rounded-full text-accent cursor-pointer">
            <User />
          </div>
          <div className="p-2 rounded-full text-accent cursor-pointer">
            <CalendarClock />
          </div>
          <div className="p-2 rounded-full text-accent cursor-pointer">
            <MapPin />
          </div>
        </div>
      </div>
      <div className={`${isPlaying ? "bg-accent text-secondary" : "bg-secondary text-accent"} shadow-lg rounded-full p-4 cursor-pointer`} onClick={handlePlaying}>
        <Music />
      </div>
      <audio src="/music.mp3" ref={audioRef} />
    </div>
  );
};

export default BottomNav;
