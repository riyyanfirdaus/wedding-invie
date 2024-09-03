"use client";

import { BCALogo, CreditCardChip, DANALogo, LineBorderDown } from "@/assets/Icon";
import { Copy, Gift, Mail } from "lucide-react";
import { useState } from "react";
import CopyToClipboard from "../CopyToClipboard";
import Fade from "../Fade";
import { toast } from "sonner";

const WeddingGift = () => {
  const [isGift, setIsGift] = useState<boolean>(false);
  const [isEnvelope, setIsEnvelope] = useState<boolean>(false);

  const handleEnvelope = () => {
    setIsEnvelope((prev) => !prev);
    setIsGift(false);
  };

  const handleGift = () => {
    setIsGift((prev) => !prev);
    setIsEnvelope(false);
  };

  const handleCopy = async (content: string) => {
    try {
      await navigator.clipboard.writeText(content);
      toast("Berhasil disalin");
    } catch (error) {
      console.error("Unable to copy to clipboard:", error);
    }
  };

  return (
    <section className="bg-accent w-full px-6 py-12">
      <div className="flex flex-col items-center gap-1">
        <Fade
          as="h1"
          className="font-belleza text-primary text-4xl tracking-wider"
          direction="down"
          framerProps={{
            show: { transition: { delay: 0.3 } },
          }}
        >
          Wedding Gift
        </Fade>
        <LineBorderDown className="text-primary w-40" />
      </div>
      <Fade
        as="p"
        direction="up"
        className="text-center text-primary mt-6"
        framerProps={{
          show: { transition: { delay: 0.3 } },
        }}
      >
        Doa Restu Anda merupakan karunia yang sangat berarti bagi kami. Namun jika memberi adalah ungkapan tanda kasih Anda, Anda dapat memberi kado secara cashless.
      </Fade>
      <div className="flex gap-x-2 justify-center mt-12">
        <button className="w-40 flex justify-center items-center gap-x-2 bg-primary text-accent font-semibold rounded-lg py-2" onClick={handleEnvelope}>
          <Mail /> Amplop
        </button>
        <button className="w-40 flex justify-center items-center gap-x-2 bg-primary text-accent font-semibold rounded-lg py-2" onClick={handleGift}>
          <Gift /> Kado
        </button>
      </div>
      {isEnvelope && (
        <div className="flex flex-col gap-y-4 mt-6">
          <div className="w-full bg-gradient-to-br from-primary to-secondary rounded-lg p-4 space-y-4 shadow-lg">
            <div className="flex items-center justify-between">
              <CreditCardChip />
              <DANALogo />
            </div>
            <div className="flex flex-col items-start gap-y-2">
              <span className="inline text-xs text-accent">Nomor Rekening</span>
              <div className="flex gap-x-4 text-accent">
                <p className="text-2xl font-bold">081213712032</p>
                <CopyToClipboard content="081213712032" />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col items-start">
                <span className="inline text-xs text-accent">Atas Nama</span>
                <p className="text-base text-accent font-bold">Syifa Alfiah Fahrunnisa</p>
              </div>
              <div className="flex flex-col items-center">
                <span className="inline text-xs text-accent">Pernikahan</span>
                <p className="text-sm text-accent font-bold">14/09/2024</p>
              </div>
            </div>
          </div>
          <div className="w-full bg-gradient-to-br from-primary to-secondary rounded-lg p-4 space-y-4 shadow-lg">
            <div className="flex items-center justify-between">
              <CreditCardChip />
              <BCALogo />
            </div>
            <div className="flex flex-col items-start gap-y-2">
              <span className="inline text-xs text-accent">Nomor Rekening</span>
              <div className="flex gap-x-4 text-accent">
                <p className="text-2xl font-bold">8350097741</p>
                <CopyToClipboard content="8350097741" />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col items-start">
                <span className="inline text-xs text-accent">Atas Nama</span>
                <p className="text-base text-accent font-bold">Akbar</p>
              </div>
              <div className="flex flex-col items-center">
                <span className="inline text-xs text-accent">Pernikahan</span>
                <p className="text-sm text-accent font-bold">14/09/2024</p>
              </div>
            </div>
          </div>
        </div>
      )}
      {isGift && (
        <div className="w-full bg-gradient-to-br from-primary to-secondary flex flex-col items-center gap-y-4 rounded-lg shadow-lg py-8 mt-6">
          <Gift size={65} className="text-accent" />
          <h2 className="font-bold text-xl text-accent">Syifa Alfiah Fahrunnisa</h2>
          <div className="flex flex-col items-center gap-y-2">
            <p className="text-sm text-accent text-center">Hj. Tomo, Jalan Cisereh Gang Mawar IV No. 10, RT.4/RW.2, Ds. Kragilan, Kragilan</p>
            <button className="flex items-center gap-x-4 font-semibold text-accent border-2 border-accent rounded-full px-6 py-2" onClick={() => handleCopy("Hj. Tomo, Jalan Cisereh Gang Mawar IV No. 10, RT.4/RW.2, Ds. Kragilan, Kragilan")}>
              Salin Alamat <Copy />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default WeddingGift;
