import { BCALogo, BNILogo, CreditCardChip } from "@/assets/Icon";
import BgMainImg from "@/assets/bg-main-img.webp";
import GalleryPhoto from "@/assets/gallery-photo.webp";
import { CopyToClipboard, Note, TimerCountdown } from "@/components";
import { RsvpForm } from "@/features";
import { neon } from "@neondatabase/serverless";
import { MapPin } from "lucide-react";
import Image from "next/image";

async function getData() {
  const sql = neon(process.env.DATABASE_URL as string);
  const response = await sql`SELECT id, name, messages, presence FROM love_notes`;
  return response;
}

export default async function Home() {
  const data = await getData();

  return (
    <main className="flex w-full min-h-screen bg-primary flex-col items-center justify-between">
      <section className="relative min-h-screen w-full" id="main">
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
      <section className="bg-gradient-to-br from-primary to-secondary w-full flex flex-col items-center text-center space-y-8 px-6 py-12" id="bride-and-groom">
        <h1 className="font-great-vibes font-bold text-accent text-4xl tracking-wider">Bride & Groom</h1>
        <div className="space-y-20">
          <div className="text-center space-y-4">
            <p className="text-sm text-accent font-semibold">Assalamualaikum Warahmatullahi Wabarakaatuh</p>
            <p className="text-sm text-accent">Dengan memohon Rahmat dan Ridho Allah SWT, kami bermaksud menyelenggarakan pernikahan</p>
          </div>
          <div className="flex flex-col items-center gap-y-6">
            <Image className="object-cover rounded-full w-48 h-48" src={GalleryPhoto} alt="" />
            <div>
              <span className="text-accent text-xl font-semibold">Akbar</span>
              <p className="text-accent text-sm">​Anak terakhir dari Bapak ..... dan Ibu .....</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-y-6">
            <Image className="object-cover rounded-full w-48 h-48" src={GalleryPhoto} alt="" />
            <div>
              <span className="text-accent text-xl font-semibold">Syifa</span>
              <p className="text-accent text-sm">​Anak tunggal dari Bapak ..... dan Ibu .....</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-accent w-full flex flex-col items-center text-center space-y-8 px-6 py-12" id="save-the-date">
        <h1 className="font-great-vibes font-bold text-primary text-4xl tracking-wider">Save The Date</h1>
        <div className="text-primary space-y-4 mt-4">
          <p>وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ اَزْوَاجًا لِّتَسْكُنُوْٓا اِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَّوَدَّةً وَّرَحْمَةًۗ اِنَّ فِيْ ذٰلِكَ لَاٰيٰتٍ لِّقَوْمٍ يَّتَفَكَّرُوْنَ</p>
          <p className="text-xs">
            Di antara tanda-tanda (kebesaran)-Nya ialah bahwa Dia menciptakan pasangan-pasangan untukmu dari (jenis) dirimu sendiri agar kamu merasa tenteram kepadanya. Dia menjadikan di antaramu rasa cinta dan kasih sayang. Sesungguhnya
            pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.
          </p>
          <p className="text-xs">Surah Ar-Rum Ayat 21</p>
        </div>
        <div className="bg-gradient-to-b from-primary to-secondary rounded-tl-3xl rounded-tr-3xl space-y-20 px-4 py-8">
          <div className="text-accent flex flex-col items-center gap-y-2">
            <h2 className="font-bold text-xl">Akad</h2>
            <p>Sabtu, 14 September 2024</p>
            <p>09:00-11:00 WIB</p>
            <p>Gedung Catur</p>
            <p>Citerep, Kec. Ciruas, Kabupaten Serang, Banten</p>
            <a className="flex items-center gap-x-2 bg-accent text-primary rounded-md px-4 py-2 mt-2" href={"https://maps.app.goo.gl/cTeHbXbPJjnzzMAx6"} target="_blank">
              <MapPin /> Lihat Peta
            </a>
          </div>
          <div className="text-accent flex flex-col items-center gap-y-2">
            <h2 className="font-bold text-xl">Resepsi</h2>
            <p>Sabtu, 14 September 2024</p>
            <p>12:30-11:00 WIB</p>
            <p>Gedung Catur</p>
            <p>Citerep, Kec. Ciruas, Kabupaten Serang, Banten</p>
            <a className="flex items-center gap-x-2 bg-accent text-primary rounded-md px-4 py-2 mt-2" href={"https://maps.app.goo.gl/cTeHbXbPJjnzzMAx6"} target="_blank">
              <MapPin /> Lihat Peta
            </a>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-br from-primary to-secondary w-full flex flex-col items-center text-center space-y-8 px-6 py-12" id="our-gallery">
        <h1 className="font-great-vibes font-bold text-accent text-4xl tracking-wider">Our Gallery</h1>
        <div className="grid grid-cols-2 gap-4">
          {Array.from({ length: 8 }).map((_, idx) => (
            <Image src={GalleryPhoto} className="object-cover rounded-md" alt="" key={idx} />
          ))}
        </div>
      </section>
      <section className="bg-accent w-full flex flex-col items-center text-center space-y-8 px-6 py-12">
        <h1 className="font-great-vibes font-bold text-primary text-4xl">Titip Hadiah</h1>
        <div className="flex flex-col gap-y-10 w-full">
          <div className="bg-gradient-to-br from-primary to-secondary rounded-lg p-4 space-y-4 shadow-lg">
            <div className="flex items-center justify-between">
              <CreditCardChip />
              <BCALogo />
            </div>
            <div className="flex flex-col items-start gap-y-2">
              <span className="inline text-xs text-accent">Nomor Rekening</span>
              <div className="flex gap-x-4 text-accent">
                <p className="text-2xl font-bold">1234567890</p>
                <CopyToClipboard content="1234567890" />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col items-start">
                <span className="inline text-xs text-accent">Atas Nama</span>
                <p className="text-lg text-accent font-bold">Akbar</p>
              </div>
              <div className="flex flex-col items-center">
                <span className="inline text-xs text-accent">Pernikahan</span>
                <p className="text-lg text-accent font-bold">14/09/2024</p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-primary to-secondary rounded-lg p-4 space-y-4 shadow-lg">
            <div className="flex items-center justify-between">
              <CreditCardChip />
              <BNILogo />
            </div>
            <div className="flex flex-col items-start gap-y-2">
              <span className="inline text-xs text-accent">Nomor Rekening</span>
              <div className="flex gap-x-4 text-accent">
                <p className="text-2xl font-bold">0987654321</p>
                <CopyToClipboard content="0987654321" />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col items-start">
                <span className="inline text-xs text-accent">Atas Nama</span>
                <p className="text-lg text-accent font-bold">Syifa</p>
              </div>
              <div className="flex flex-col items-center">
                <span className="inline text-xs text-accent">Pernikahan</span>
                <p className="text-lg text-accent font-bold">14/09/2024</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <RsvpForm />
      <section className="bg-accent w-full flex flex-col items-center space-y-8 px-6 py-12">
        <h1 className="font-great-vibes font-bold text-primary text-4xl tracking-wider">Love Notes</h1>
        <div className="bg-primary w-full h-[420px] overflow-y-auto flex flex-col gap-y-4 rounded-lg shadow-xl p-3">
          {data.map((item) => (
            <Note key={item.id} data={item} />
          ))}
        </div>
      </section>
      <footer className="bg-gradient-to-b from-primary to-secondary w-full min-h-48 pt-12 flex justify-center">
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
