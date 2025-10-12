import { neueuHaasDisplayProFont } from "@/assets/config/fonts";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${neueuHaasDisplayProFont.className}`}>
      <Component {...pageProps} />
    </div>
  );
}
