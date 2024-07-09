"use client";

import Image from "next/image";
import GalleryPhoto from "@/assets/gallery-photo.webp";
import { PhotoProvider, PhotoView } from "react-photo-view";
import BlurFade from "../BlurFade";

const PhotoGallery = () => {
  return (
    <section className="bg-gradient-to-br from-primary to-secondary w-full flex flex-col items-center text-center space-y-8 px-6 py-12" id="our-gallery">
      <h1 className="font-great-vibes font-bold text-accent text-4xl tracking-wider">Our Gallery</h1>
      <PhotoProvider>
        <div className="grid grid-cols-2 gap-4">
          {Array.from({ length: 8 }).map((_, idx) => (
            <BlurFade key={idx} delay={0.25 + idx * 0.05} inView>
              <PhotoView src={"https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}>
                <Image src={GalleryPhoto} className="object-cover rounded-md cursor-pointer" alt="" />
              </PhotoView>
            </BlurFade>
          ))}
        </div>
      </PhotoProvider>
    </section>
  );
};

export default PhotoGallery;
