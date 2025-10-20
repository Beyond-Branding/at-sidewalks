import localFont from "next/font/local";
import { Gloria_Hallelujah } from "next/font/google";

export const neueuHaasDisplayProFont = localFont({
  src: [
    {
      path: "../fonts/neue-haas-display-pro/NeueHaasDisplayLight.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/neue-haas-display-pro/NeueHaasDisplayMediu.ttf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-neue-haas-display-pro",
});

export const adobeCarlsonProFont = localFont({
  src: [
    {
      path: "../fonts/adobe-carlson-pro/ACaslonPro-Regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-adobe-carlson-pro",
});

export const gloriaHallelujahFont = Gloria_Hallelujah({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-gloria-hallelujah",
});
