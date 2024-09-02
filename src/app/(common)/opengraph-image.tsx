import { photoGallery } from "@/constants/gallery";
import { ImageResponse } from "next/og";

export const alt = "Syifa & Akbar Wedding";

export const size = {
  width: 480,
  height: 720,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={photoGallery[0].photo} height={720} alt="Syifa & Akbar Wedding" />
      </div>
    ),
    {
      ...size,
    }
  );
}
