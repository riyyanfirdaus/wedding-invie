import { LineBorderDown } from "@/assets/Icon";
import { Fade, Marquee, Note, PhotoGallery, TextBlurIn, TimerCountdown } from "@/components";
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
        <div className="absolute top-0 h-screen w-full flex flex-col items-center justify-center  overflow-x-hidden md:top-10">
          <div className="text-center text-primary">
            <Fade
              as="h1"
              className="text-xl mb-6"
              direction="down"
              framerProps={{
                show: { transition: { delay: 0.2 } },
              }}
            >
              THE WEDDING OF
            </Fade>
            <div className="relative flex justify-center">
              <div className="flex flex-col items-center gap-y-4">
                <div className="flex flex-col gap-y-3 font-dancing-script font-bold text-2xl">
                  <TextBlurIn as="h1" className="tracking-wide" word="Syifa Alfiah Fahrunnisa, M. Pd" />
                  <TextBlurIn as="span" word="&" />
                  <TextBlurIn as="h1" className="tracking-wide" word="Akbar, S.E" />
                </div>
                <TextBlurIn as="span" className="font-semibold text-xl" word="14.09.2024" />
              </div>
            </div>
          </div>
          <TimerCountdown />
          <Marquee pauseOnHover className="[--gap:0.5rem] [--duration:15s] mt-16">
            {photoGallery.map((gallery, idx) => {
              if (idx >= 4) return;

              return <Image src={gallery.photo} width={480} height={720} className="w-20 object-cover" key={gallery.id} alt="" />;
            })}
          </Marquee>
        </div>
      </section>
      <section className="bg-gradient-to-br from-primary to-secondary w-full flex flex-col items-center text-center space-y-8 px-6 py-12" id="bride-and-groom">
        <div className="flex flex-col items-center gap-1">
          <Fade
            className="font-dancing-script font-bold text-accent text-4xl tracking-wider"
            direction="down"
            framerProps={{
              show: { transition: { delay: 0.3 } },
            }}
          >
            Bride & Groom
          </Fade>
          <LineBorderDown className="text-accent w-40" />
        </div>
        <div className="space-y-20">
          <div className="text-center space-y-4">
            <Fade
              as="p"
              className="text-sm text-accent font-semibold"
              direction="left"
              framerProps={{
                show: { transition: { delay: 0.4 } },
              }}
            >
              Assalamualaikum Warahmatullahi Wabarakaatuh
            </Fade>
            <Fade
              as="p"
              className="text-sm text-accent"
              direction="right"
              framerProps={{
                show: { transition: { delay: 0.4 } },
              }}
            >
              Dengan memohon Rahmat dan Ridho Allah SWT, kami bermaksud menyelenggarakan pernikahan
            </Fade>
          </div>
          <div className="flex flex-col items-center gap-y-6">
            <Image className="object-cover w-48 h-72 rounded-t-full" src={photoGallery[4].photo} width={480} height={720} alt="" />
            <div className="space-y-2">
              <Fade
                as="p"
                className="font-dancing-script text-accent text-2xl font-semibold tracking-wide"
                direction="down"
                framerProps={{
                  show: { transition: { delay: 0.4 } },
                }}
              >
                Syifa Alfiah Fahrunnisa, M. Pd
              </Fade>
              <Fade
                as="p"
                className="text-accent text-sm"
                direction="up"
                framerProps={{
                  show: { transition: { delay: 0.4 } },
                }}
              >
                Putri tunggal Bapak Mohamad Nasir <br /> dan Almh Ibu Siti Nurhaeti Rahmah
              </Fade>
            </div>
          </div>
          <div className="flex flex-col items-center gap-y-6">
            <Image className="object-cover w-48 h-72 rounded-t-full" src={photoGallery[5].photo} width={480} height={720} alt="" />
            <div className="space-y-2">
              <Fade
                as="p"
                className="font-dancing-script text-accent text-2xl font-semibold tracking-wide"
                direction="down"
                framerProps={{
                  show: { transition: { delay: 0.4 } },
                }}
              >
                Akbar, S.E
              </Fade>
              <Fade
                as="p"
                className="text-accent text-sm"
                direction="up"
                framerProps={{
                  show: { transition: { delay: 0.4 } },
                }}
              >
                Putra ketujuh Bapak H. Wahid Sutan Jamaris <br /> dan Almh Ibu Hj. Yusnimar Gasan
              </Fade>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-accent w-full flex flex-col items-center text-center space-y-8 px-6 py-12" id="save-the-date">
        <div className="flex flex-col items-center gap-1">
          <Fade
            as="h1"
            className="font-dancing-script font-bold text-primary text-4xl tracking-wider"
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
              show: { transition: { delay: 0.4 } },
            }}
          >
            وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ اَزْوَاجًا لِّتَسْكُنُوْٓا اِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَّوَدَّةً وَّرَحْمَةًۗ اِنَّ فِيْ ذٰلِكَ لَاٰيٰتٍ لِّقَوْمٍ يَّتَفَكَّرُوْنَ
          </Fade>
          <Fade
            as="p"
            className="text-xs"
            direction="right"
            framerProps={{
              show: { transition: { delay: 0.4 } },
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
              show: { transition: { delay: 0.4 } },
            }}
          >
            Surah Ar-Rum Ayat 21
          </Fade>
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
      <PhotoGallery />
      <RsvpForm />
      <section className="bg-accent w-full flex flex-col items-center space-y-8 px-6 py-12">
        <div className="flex flex-col items-center gap-1">
          <Fade
            as="h1"
            className="font-dancing-script font-bold text-primary text-4xl tracking-wider"
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
