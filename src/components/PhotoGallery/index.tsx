"use client";

import Image from "next/image";
import GalleryPhoto from "@/assets/gallery-photo.webp";
import { PhotoProvider, PhotoView } from "react-photo-view";
import BlurFade from "../BlurFade";
import { photoGallery } from "@/constants/gallery";

const PhotoGallery = () => {
  return (
    <section className="bg-gradient-to-br from-primary to-secondary w-full flex flex-col items-center text-center space-y-8 px-6 py-12" id="our-gallery">
      <h1 className="font-dancing-script font-bold text-accent text-4xl tracking-wider">Our Gallery</h1>
      <PhotoProvider>
        <div className="grid grid-cols-2 gap-4">
          {photoGallery.map((gallery) => (
            <BlurFade key={gallery.id} delay={0.25 + gallery.id * 0.05} inView>
              <PhotoView src={gallery.photo}>
                <Image src={gallery.photo} width={320} height={640} className="h-64 object-cover rounded-md cursor-pointer" alt="" />
              </PhotoView>
            </BlurFade>
          ))}
        </div>
      </PhotoProvider>
    </section>
  );
};

export default PhotoGallery;
