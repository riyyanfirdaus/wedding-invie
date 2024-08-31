import { DividerLove, LineBorderDown } from "@/assets/Icon";
import { Fade, Marquee, Note, NumberTicker, PhotoGallery, TextBlurIn, TimerCountdown } from "@/components";
import { photoGallery } from "@/constants/gallery";
import { RsvpForm } from "@/features";
import { neon } from "@neondatabase/serverless";
import { MapPin } from "lucide-react";
import Image from "next/image";
import "react-photo-view/dist/react-photo-view.css";

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
        <div className="h-screen relative">
          <Image src={photoGallery[1].photo} width={480} height={720} className="h-screen object-cover" alt="" />
          <span className="absolute inset-0 bg-gradient-to-t from-neutral-600/90 to-neutral-600/20" />
        </div>
        <div className="absolute top-0 h-screen w-full flex flex-col items-center justify-evenly  overflow-x-hidden md:top-10">
          <div className="flex flex-col items-center gap-y-3 text-primary mt-10">
            <TextBlurIn as="h1" className="font-belleza text-4xl tracking-wide" word="SYIFA & AKBAR" />
            <TextBlurIn as="span" className="font-semibold text-xl" word="14.09.2024" />
          </div>
          <TimerCountdown className="mt-4" />
          <Marquee pauseOnHover className="[--gap:0.5rem] [--duration:15s] mb-6">
            {photoGallery.map((gallery, idx) => {
              if (idx >= 4) return;

              return <Image src={gallery.photo} width={480} height={720} className="w-20 object-cover" key={gallery.id} alt="" />;
            })}
          </Marquee>
        </div>
      </section>
      <section className="bg-gradient-to-br from-primary to-secondary w-full flex flex-col text-center px-6 py-12" id="bride-and-groom">
        <div className="space-y-20">
          <div className="text-center space-y-4">
            <Fade
              as="h1"
              className="font-belleza text-4xl text-accent"
              direction="down"
              framerProps={{
                show: { transition: { delay: 0.3 } },
              }}
            >
              THE WEDDING OF
            </Fade>
            <Fade
              as="p"
              className="text-sm text-accent font-semibold"
              direction="left"
              framerProps={{
                show: { transition: { delay: 0.3 } },
              }}
            >
              Assalamualaikum Warahmatullahi Wabarakaatuh
            </Fade>
            <Fade
              as="p"
              className="text-sm text-accent"
              direction="right"
              framerProps={{
                show: { transition: { delay: 0.3 } },
              }}
            >
              Dengan memohon Rahmat dan Ridho Allah SWT, kami bermaksud menyelenggarakan pernikahan
            </Fade>
          </div>
          <div className="space-y-10">
            <div className="flex flex-col items-end gap-y-3">
              <Image className="object-cover w-60" src={photoGallery[3].photo} width={480} height={720} alt="" />
              <div className="flex flex-col items-end gap-y-2 pr-2">
                <Fade
                  as="p"
                  className="font-belleza text-accent text-xl tracking-wide"
                  direction="down"
                  framerProps={{
                    show: { transition: { delay: 0.3 } },
                  }}
                >
                  Syifa Alfiah Fahrunnisa, M. Pd
                </Fade>
                <Fade
                  as="p"
                  className="text-accent text-sm text-right"
                  direction="up"
                  framerProps={{
                    show: { transition: { delay: 0.3 } },
                  }}
                >
                  Putri tunggal Bapak Mohamad Nasir <br /> dan Almh Ibu Siti Nurhaeti Rahmah
                </Fade>
              </div>
            </div>
            <Fade
              as="p"
              className="font-belleza text-accent text-4xl font-semibold tracking-wide"
              direction="down"
              framerProps={{
                show: { transition: { delay: 0.3 } },
              }}
            >
              &
            </Fade>
            <div className="flex flex-col gap-y-3">
              <Image className="object-cover w-60" src={photoGallery[4].photo} width={480} height={720} alt="" />
              <div className="flex flex-col items-start gap-y-2 pl-2">
                <Fade
                  as="p"
                  className="font-belleza text-accent text-xl tracking-wide"
                  direction="down"
                  framerProps={{
                    show: { transition: { delay: 0.3 } },
                  }}
                >
                  Akbar, S.E
                </Fade>
                <Fade
                  as="p"
                  className="text-accent text-sm text-left"
                  direction="up"
                  framerProps={{
                    show: { transition: { delay: 0.3 } },
                  }}
                >
                  Putra ketujuh Bapak H. Wahid Sutan Jamaris <br /> dan Almh Ibu Hj. Yusnimar Gasan
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-accent w-full flex flex-col items-center text-center space-y-8 px-6 py-12" id="save-the-date">
        <div className="flex flex-col items-center gap-1">
          <Fade
            as="h1"
            className="font-belleza text-primary text-4xl tracking-wider"
            direction="down"
            framerProps={{
              show: { transition: { delay: 0.3 } },
            }}
          >
            Save The Date
          </Fade>
          <LineBorderDown className="text-primary w-40" />
        </div>
        <div className="text-primary space-y-4 mt-4">
          <Fade
            as="p"
            direction="left"
            framerProps={{
              show: { transition: { delay: 0.3 } },
            }}
          >
            وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ اَزْوَاجًا لِّتَسْكُنُوْٓا اِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَّوَدَّةً وَّرَحْمَةًۗ اِنَّ فِيْ ذٰلِكَ لَاٰيٰتٍ لِّقَوْمٍ يَّتَفَكَّرُوْنَ
          </Fade>
          <Fade
            as="p"
            className="text-xs"
            direction="right"
            framerProps={{
              show: { transition: { delay: 0.3 } },
            }}
          >
            Di antara tanda-tanda (kebesaran)-Nya ialah bahwa Dia menciptakan pasangan-pasangan untukmu dari (jenis) dirimu sendiri agar kamu merasa tenteram kepadanya. Dia menjadikan di antaramu rasa cinta dan kasih sayang. Sesungguhnya
            pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.
          </Fade>
          <Fade
            as="p"
            className="text-xs"
            direction="right"
            framerProps={{
              show: { transition: { delay: 0.3 } },
            }}
          >
            Surah Ar`-`Rum Ayat 21
          </Fade>
        </div>
        <div className="space-y-12">
          <div className="flex flex-col items-center text-primary">
            <h2 className="font-bold text-xl drop-shadow-lg">Akad</h2>
            <p className="drop-shadow-lg">Sabtu, 14 September 2024</p>
            <p className="drop-shadow-lg">09:00-11:00 WIB</p>
            <p className="drop-shadow-lg">Gedung Catur</p>
            <p className="drop-shadow-lg">Citerep, Kec. Ciruas, Kabupaten Serang, Banten</p>
            <a className="flex items-center gap-x-2 bg-primary text-accent rounded-md px-4 py-2 mt-2" href={"https://maps.app.goo.gl/cTeHbXbPJjnzzMAx6"} target="_blank">
              <MapPin /> Lihat Peta
            </a>
          </div>
          <div className="flex flex-col items-center text-primary">
            <h2 className="font-bold text-xl drop-shadow-lg">Resepsi</h2>
            <p className="drop-shadow-lg">Sabtu</p>
            <p className="text-3xl">
              <NumberTicker className="text-primary" value={14} />
              .09.2024
            </p>
            <p className="drop-shadow-lg">11:00-16:00 WIB</p>
            <p className="drop-shadow-lg">Gedung Catur</p>
            <p className="drop-shadow-lg">Kp. Kuaran Baru RT.03/RW.01 Kecamatan Ciruas Kab.Serang Banten</p>
            <a className="w-fit flex items-center gap-x-2 bg-primary text-accent rounded-md px-4 py-2 mt-2" href={"https://maps.app.goo.gl/cTeHbXbPJjnzzMAx6"} target="_blank">
              <MapPin /> Lihat Peta
            </a>
          </div>
        </div>
      </section>
      <PhotoGallery />
      <RsvpForm />
      <section className="bg-accent w-full flex flex-col items-center space-y-8 px-6 py-12">
        <div className="flex flex-col items-center gap-1">
          <Fade
            as="h1"
            className="font-belleza text-primary text-4xl tracking-wider"
            direction="down"
            framerProps={{
              show: { transition: { delay: 0.3 } },
            }}
          >
            Love Notes
          </Fade>
          <LineBorderDown className="text-primary w-40" />
        </div>
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
