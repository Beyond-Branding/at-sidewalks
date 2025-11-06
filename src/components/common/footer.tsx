import Image from "next/image";
import Link from "next/link";

export function NavLinks() {
  return (
    <div>
      <h4 className="mb-4 font-medium">customer service</h4>
      <ul className="space-y-4">
        <li>
          <Link href="/contact">contact us</Link>
        </li>
        <li>
          <Link href="/privacy-policy">privacy policy</Link>
        </li>
        <li>
          <Link href="/terms-of-use">terms of use</Link>
        </li>
        <li>
          <Link href="/faq">faq</Link>
        </li>
      </ul>
    </div>
  );
}

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
        <div className="flex md:flex-row flex-col gap-8 mb-auto w-full">
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

                <p
                  className="text-sm"
                  suppressHydrationWarning
                  dangerouslySetInnerHTML={{
                    __html: content.about || "",
                  }}
                ></p>
              </div>
            </div>
          </div>

          <div className="md:flex-row flex-col flex-[70%] gap-6 grid grid-cols-1 md:grid-cols-3">
            <NavLinks />

            <div className="flex-1 space-y-4 pr-8">
              <div>
                <h2 className="font-medium">contact</h2>
                <p
                  className="text-sm"
                  suppressHydrationWarning
                  dangerouslySetInnerHTML={{ __html: content.contact || "" }}
                ></p>
              </div>

              <div className="flex-1">
                <h2 className="font-medium">advertising</h2>
                <p
                  className="text-sm"
                  suppressHydrationWarning
                  dangerouslySetInnerHTML={{
                    __html: content.advertising || "",
                  }}
                ></p>
              </div>
            </div>
            <div>
              <p className="mb-8 font-medium">subscribe to our newsletter</p>
              <input
                type="email"
                placeholder="your email"
                className="mb-2 px-4 pb-4 border-gray-200 border-b-[1px] focus-within:outline-0 w-full"
              />
              <p className="w-[75%] text-xs">
                by clicking "submit," you agree to receive emails from goop and
                accept our web terms of use and privacy and cookie policy.
                *Terms apply.
              </p>
            </div>
          </div>
        </div>

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
                <Link href="/accessibility">accessibility</Link>
              </li>
              <li>
                <Link href="/terms-of-use">terms of use</Link>
              </li>
            </ul>
          </div>
          <div>
            <p>
              ©2008-2025 Goop, Inc. All Rights Reserved. goop® is a registered
              trademark of Goop, Inc. and is registered with the U.S. Patent and
              Trademark Office
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
