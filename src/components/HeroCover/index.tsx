"use client";

import { LineBorderDown, LineBorderUp } from "@/assets/Icon";
import { photoGallery } from "@/constants/gallery";
import { AudioContext, AudioContextType } from "@/contexts/audioContext";
import { Mail } from "lucide-react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useContext, useState } from "react";

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
        <div className="h-screen relative">
          <Image src={photoGallery[1].photo} width={480} height={720} className="h-screen object-cover" alt="" />;
          <span className="absolute inset-0 bg-gradient-to-t from-neutral-600/90 to-neutral-600/20" />
        </div>
        <div className="absolute bottom-0 h-screen w-full flex flex-col items-center justify-center">
          <div className="text-center text-primary space-y-12">
            <h2 className="text-xl font-medium drop-shadow-xl">THE WEDDING OF</h2>
            <div className="space-y-4">
              <LineBorderUp className="text-primary" />
              <div className="flex flex-col items-center gap-y-4">
                <div className="font-dancing-script font-bold text-2xl">
                  <h1 className="drop-shadow-xl tracking-wide">Syifa Alfiah Fahrunnisa, M. Pd</h1>
                  <span className="drop-shadow-xl">&</span>
                  <h1 className="drop-shadow-xl tracking-wide">Akbar, S.E</h1>
                </div>
                <span className="font-semibold text-xl drop-shadow-xl">14.09.2024</span>
              </div>
              <LineBorderDown className="text-primary" />
            </div>
          </div>
          <div className="mt-12 mb-8 text-center text-primary px-4">
            <span className="text-lg">Kepada</span>
            <h2 className="font-semibold text-xl drop-shadow-xl capitalize">{guest ? guest : "Guest"}</h2>
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
