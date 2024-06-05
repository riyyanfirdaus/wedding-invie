import Image from "next/image";
import BgMainImg from "@/assets/bg-main-img.webp";
import { TimerCountdown } from "@/components";
import { RsvpForm } from "@/features";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="flex w-full min-h-screen bg-primary flex-col items-center justify-between">
      <section className="relative min-h-screen w-full">
        <Image src={BgMainImg} className="h-screen object-cover" alt="" />
        <div className="absolute top-0 h-screen w-full flex flex-col items-center justify-center md:top-10">
          <div className="text-center text-primary">
            <h2 className="text-xl mb-6">THE WEDDING OF</h2>
            <div className="relative flex justify-center">
              <div className="flex flex-col items-center gap-y-4">
                <div className="flex gap-x-3 font-great-vibes font-bold text-5xl">
                  <h1>Akbar</h1>
                  <span>&</span>
                  <h1>Syifa</h1>
                </div>
                <span className="font-semibold text-xl">14.09.2024</span>
              </div>
            </div>
          </div>
          <TimerCountdown />
        </div>
      </section>
      <Suspense>
        <RsvpForm />
      </Suspense>
      <section className="min-h-48 bg-accent w-full py-4">
        <h1 className="text-center font-bold text-2xl text-primary">Love Notes</h1>
        <div></div>
      </section>
      <footer className="min-h-48 py-4">
        <span>
          built by{" "}
          <a href="http://instagram.com/riyyan_firdaus" target="_blank" rel="noopener noreferrer">
            @riyyan_firdaus
          </a>
        </span>
      </footer>
    </main>
  );
}
