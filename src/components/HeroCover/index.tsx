"use client";

import { photoGallery } from "@/constants/gallery";
import { AudioContext, AudioContextType } from "@/contexts/audioContext";
import { Mail } from "lucide-react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useContext, useState } from "react";
import Fade from "../Fade";
import TextBlurIn from "../TextBlurIn";

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
          <Image src={photoGallery[0].photo} width={480} height={720} className="h-screen object-cover" alt="" />;
          <span className="absolute inset-0 bg-gradient-to-t from-neutral-600/90 to-neutral-600/20" />
        </div>
        <div className="absolute bottom-0 h-screen w-full flex flex-col items-center justify-between">
          <div className="text-center text-primary space-y-3 mt-12">
            <TextBlurIn as="h1" word="SYIFA & AKBAR" className="font-belleza text-3xl drop-shadow-xl" />
            <TextBlurIn as="p" word="14.09.2024" className="font-semibold text-xl drop-shadow-xl" />
          </div>
          <div className="flex flex-col items-center mb-24">
            <div className="mt-12 mb-8 text-center text-primary px-4">
              <Fade
                className="text-lg"
                direction="up"
                framerProps={{
                  show: { transition: { delay: 0.4 } },
                }}
              >
                Kepada
              </Fade>
              <Fade
                className="font-semibold text-lg drop-shadow-xl capitalize"
                direction="up"
                framerProps={{
                  show: { transition: { delay: 0.6 } },
                }}
              >
                {guest ? guest : "Guest"}
              </Fade>
            </div>
            <Fade
              as="button"
              className="bg-accent text-primary flex items-center gap-x-2 font-medium rounded-md px-4 py-2 cursor-pointer"
              direction="up"
              framerProps={{
                show: { transition: { delay: 0.8 } },
              }}
              onClick={handleClose}
            >
              <Mail /> Buka Undangan
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCover;
