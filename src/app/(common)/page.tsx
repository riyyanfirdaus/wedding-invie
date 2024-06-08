import BgMainImg from "@/assets/bg-main-img.webp";
import { Note, TimerCountdown } from "@/components";
import { RsvpForm } from "@/features";
import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
      <section className="w-full flex flex-col items-center text-center space-y-8 px-6 py-12">
        <h1 className="font-great-vibes font-bold text-accent text-4xl">Bride & Groom</h1>
      </section>
      <section className="bg-accent w-full flex flex-col items-center text-center space-y-8 px-6 py-12">
        <h1 className="font-great-vibes font-bold text-primary text-4xl">Save The Date</h1>
        <div className="text-primary space-y-4 mt-4">
          <p>وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ اَزْوَاجًا لِّتَسْكُنُوْٓا اِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَّوَدَّةً وَّرَحْمَةًۗ اِنَّ فِيْ ذٰلِكَ لَاٰيٰتٍ لِّقَوْمٍ يَّتَفَكَّرُوْنَ</p>
          <p className="text-xs">
            Di antara tanda-tanda (kebesaran)-Nya ialah bahwa Dia menciptakan pasangan-pasangan untukmu dari (jenis) dirimu sendiri agar kamu merasa tenteram kepadanya. Dia menjadikan di antaramu rasa cinta dan kasih sayang. Sesungguhnya
            pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.
          </p>
          <p className="text-xs">Surah Ar-Rum Ayat 21</p>
        </div>
        <div className="bg-primary rounded-tl-3xl rounded-tr-3xl space-y-20 px-4 py-8">
          <div className="text-accent flex flex-col items-center gap-y-2">
            <h2 className="font-bold text-xl">Akad</h2>
            <p>Sabtu, 14 September 2024</p>
            <p>09:00-11:00</p>
            <p>Gedung Catur</p>
            <p>Citerep, Kec. Ciruas, Kabupaten Serang, Banten</p>
            <a className="flex items-center gap-x-2 bg-accent text-primary rounded-md px-4 py-2 mt-2" href={""} target="_blank">
              <MapPin /> Lihat Peta
            </a>
          </div>
          <div className="text-accent flex flex-col items-center gap-y-2">
            <h2 className="font-bold text-xl">Resepsi</h2>
            <p>Sabtu, 14 September 2024</p>
            <p>12:30-11:00</p>
            <p>Gedung Catur</p>
            <p>Citerep, Kec. Ciruas, Kabupaten Serang, Banten</p>
            <a className="flex items-center gap-x-2 bg-accent text-primary rounded-md px-4 py-2 mt-2" href={""} target="_blank">
              <MapPin /> Lihat Peta
            </a>
          </div>
        </div>
      </section>
      <section className="w-full flex flex-col items-center text-center space-y-8 px-6 py-12">
        <h1 className="font-great-vibes font-bold text-accent text-4xl">Our Gallery</h1>
      </section>
      <section className="bg-accent w-full flex flex-col items-center text-center space-y-8 px-6 py-12">
        <h1 className="font-great-vibes font-bold text-primary text-4xl">Titip Hadiah</h1>
      </section>
      <RsvpForm />
      <section className="bg-accent w-full flex flex-col items-center space-y-8 px-6 py-12">
        <h1 className="font-great-vibes font-bold text-primary text-4xl">Love Notes</h1>
        <div className="bg-primary w-full max-h-80 overflow-y-auto flex flex-col gap-y-4 rounded-lg shadow-xl p-3">
          {Array.from({ length: 20 }).map((_, idx) => (
            <Note key={idx} />
          ))}
        </div>
      </section>
      <footer className="min-h-48 grid place-items-start pt-12">
        <span className="text-accent">
          made by{" "}
          <a className="font-semibold" href="http://instagram.com/riyyan_firdaus" target="_blank" rel="noopener noreferrer">
            @riyyan_firdaus
          </a>
        </span>
      </footer>
    </main>
  );
}
