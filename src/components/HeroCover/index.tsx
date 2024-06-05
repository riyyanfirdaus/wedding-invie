"use client";

import { AudioContext, AudioContextType } from "@/context/audioContext";
import { useContext, useState } from "react";
import BgMainImg from "@/assets/bg-main-img.webp";
import MainFlower from "@/assets/main-flower.png";
import Image from "next/image";
import { Mail } from "lucide-react";
import { useSearchParams } from "next/navigation";

const HeroCover = () => {
  const { handlePlaying } = useContext(AudioContext) as AudioContextType;
  const [isClose, setIsClose] = useState<boolean>(false);
  const isOpened = isClose ? "-translate-y-full transition transform duration-500 delay-150 motion-reduce:transition-none motion-reduce:transform-none" : null;

  const searchParams = useSearchParams();
  const guest = searchParams.get("kpd");

  const handleClose = () => {
    setIsClose(true);
    handlePlaying();
  };

  return (
    <div className={`fixed z-30 min-h-screen max-w-[480px] w-full bg-primary ${isOpened}`}>
      <div className="relative min-h-screen w-full">
        <Image src={BgMainImg} className="h-screen object-cover" alt="" />
        <div className="absolute bottom-0 h-screen w-full flex flex-col items-center justify-center">
          <div className="text-center text-primary">
            <h2 className="text-xl font-medium drop-shadow-xl">THE WEDDING OF</h2>
            <div className="relative flex justify-center w-80 h-80">
              <Image src={MainFlower} alt="Flower image" />
              <div className="absolute inset-y-1/4 flex flex-col items-center gap-y-4">
                <div className="font-great-vibes font-bold text-4xl">
                  <h1 className="drop-shadow-xl">Akbar</h1>
                  <span className="drop-shadow-xl">&</span>
                  <h1 className="drop-shadow-xl">Syifa</h1>
                </div>
                <span className="font-semibold text-xl drop-shadow-xl">14.09.2024</span>
              </div>
            </div>
          </div>
          <div className="mt-12 mb-8 text-center text-primary">
            <span className="text-lg">Kepada</span>
            <h2 className="font-semibold text-3xl drop-shadow-xl capitalize">{guest ? guest : "Guest"}</h2>
          </div>
          <button className="bg-accent text-primary flex items-center gap-x-2 font-medium rounded-md px-4 py-2 cursor-pointer" onClick={handleClose}>
            <Mail /> Buka Undangan
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroCover;
