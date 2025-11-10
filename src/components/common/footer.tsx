import Image from "next/image";
import Link from "next/link";

export interface FooterProps {
  content: {
    about: string;
    contact: string;
    advertising: string;
  };
}

export function Footer({ content }: FooterProps) {
  return (
    <footer className="relative flex pmask-t-to-12 mx-auto mt-16 px-8 h-fit container">
      {/* Background Logo */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          className="opacity-5 size-full object-contain"
          src="/assets/logo.svg"
          alt="At Sidewalks"
          width={2294}
          height={656}
        />
      </div>

      <div className="flex flex-col">
        {/* Top Section */}
        <div className="flex md:flex-row flex-col gap-8 mb-auto w-full">
          {/* About Section */}
          <div className="flex-[30%] space-y-8">
            <div>
              <h3 className="mb-4 font-semibold">about</h3>
              <div className="space-y-4">
                <div className="rounded-full size-16 overflow-hidden shrink-0">
                  <img
                    src="/assets/author.jpg"
                    className="size-full object-cover"
                    alt=""
                  />
                </div>
                <div
                  className="text-sm"
                  suppressHydrationWarning
                  dangerouslySetInnerHTML={{
                    __html: content?.about || "",
                  }}
                ></div>
              </div>
            </div>
          </div>

          {/* Middle Section (Advertising + Contact + Subscribe) */}
          <div className="md:flex-row flex-col flex-[70%] gap-6 grid grid-cols-1 md:grid-cols-3">
            {/* Advertising */}
            <div className="flex-1 space-y-4 pr-8">
              <div>
                <h2 className="font-medium">advertising</h2>
                <div
                  className="text-sm"
                  suppressHydrationWarning
                  dangerouslySetInnerHTML={{
                    __html:
                      content?.advertising ||
                      `We love getting emails from readers. Please feel free to write to Joanna at hello@cupofjo.com. If you have a question, you can also take a look at our FAQ page — the answer may be waiting there for you.`,
                  }}
                ></div>
              </div>
            </div>

            {/* Contact */}
            <div className="flex-1 space-y-4 pr-8">
              <div>
                <h2 className="font-medium">contact</h2>
                <div
                  className="text-sm"
                  suppressHydrationWarning
                  dangerouslySetInnerHTML={{
                    __html:
                      content?.contact ||
                      `We love getting emails from readers. Please feel free to write to Joanna at hello@cupofjo.com. If you have a question, you can also take a look at our FAQ page — the answer may be waiting there for you.`,
                  }}
                ></div>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <p className="mb-8 font-medium">subscribe to our newsletter</p>
              <input
                type="email"
                placeholder="your email"
                className="mb-2 px-4 pb-4 border-gray-200 border-b-[1px] focus-within:outline-0 w-full"
              />
              <p className="w-[75%] text-xs">
                by clicking "submit," you agree to receive emails from goop and
                accept our web terms of use and privacy and cookie policy. *Terms
                apply.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="gap-4 grid md:grid-cols-2 grid-rows-2 md:grid-rows-1 my-12 pt-8 text-xs">
          <div>
            <ul className="flex flex-wrap gap-x-12 gap-y-2">
              <li>
                <Link href="/about">about</Link>
              </li>
              <li>
                <Link href="/privacy-policy">privacy policy</Link>
              </li>
              
              <li>
                <Link href="/terms-of-use">terms of use</Link>
              </li>
            </ul>
          </div>

          {/* Right-aligned copyright */}
          <div className="text-right">
            <p>
              ©2025 AtSidewalks® All rights reserved. Site designed and developed
              by <span className="font-medium">Beyond Branding</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
