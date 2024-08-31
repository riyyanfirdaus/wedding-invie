import { BottomNav, HeroCover } from "@/components";
import AudioProvider from "@/contexts/audioContext";
import { Suspense } from "react";
import { Toaster } from "sonner";

const Homelayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AudioProvider>
      <div className="relative max-w-[480px] mx-auto">
        <Suspense>
          <HeroCover />
          {children}
          <BottomNav />
        </Suspense>
        <Toaster />
      </div>
    </AudioProvider>
  );
};

export default Homelayout;
