import {
  adobeCarlsonProFont,
  neueuHaasDisplayProFont,
} from "@/assets/config/fonts";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className={`antialiased ${neueuHaasDisplayProFont.className}`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
