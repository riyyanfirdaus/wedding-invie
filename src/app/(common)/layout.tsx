import { BottomNav, HeroCover } from "@/components";
import AudioProvider from "@/context/audioContext";

const Homelayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AudioProvider>
      <div className="relative max-w-[480px] mx-auto">
        <HeroCover />
        {children}
        <BottomNav />
      </div>
    </AudioProvider>
  );
};

export default Homelayout;
