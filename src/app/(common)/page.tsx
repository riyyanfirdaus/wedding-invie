import Image from "next/image";
import BgMainImg from "@/assets/bg-main-img.webp";

export default function Home() {
  return (
    <main className="flex w-full min-h-screen bg-primary flex-col items-center justify-between">
      <div className="relative min-h-screen w-full">
        <Image src={BgMainImg} className="h-screen object-cover" alt="" />
        <div className="absolute top-0 h-screen w-full flex flex-col items-center justify-center">
          <div className="text-center text-primary">
            <h2>THE WEDDING OF</h2>
            <div className="relative flex justify-center w-80 h-80">
              <div className="flex flex-col items-center gap-y-4 md:flex-row md:gap-x-2">
                <div className="font-bold text-xl">
                  <h1>Akbar</h1>
                  <span>&</span>
                  <h1>Syifa</h1>
                </div>
                <span className="font-semibold text-xl">~14.09.2024~</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-1/2">Content</div>
    </main>
  );
}
