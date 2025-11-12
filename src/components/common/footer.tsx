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
    <footer className="relative pmask-t-to-12 mx-auto mt-16 px-8 h-fit container">
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

      <div className="w-full max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-stretch justify-between gap-20 w-full">
          <div className="w-full md:w-1/3">
            <h3 className="mb-4 font-semibold">categories</h3>
            <div className="text-sm">
              <ul className="grid grid-cols-2 gap-y-3 gap-x-6 list-none p-0 m-0">
                <li>
                  <Link href="/category/beauty" className="block">
                    beauty
                  </Link>
                </li>
                <li>
                  <Link href="/category/books" className="block">
                    Books
                  </Link>
                </li>
                <li>
                  <Link href="/category/movies-tv" className="block">
                    movies &amp; tv
                  </Link>
                </li>
                <li>
                  <Link href="/category/glow-up-skin-care" className="block">
                    Glow Up &amp; Skin Care
                  </Link>
                </li>
                <li>
                  <Link href="/category/dating-relationships" className="block">
                    dating &amp; relationships
                  </Link>
                </li>
                <li>
                  <Link href="/category/fashion" className="block">
                    Fashion
                  </Link>
                </li>
                <li>
                  <Link href="/category/travel" className="block">
                    travel
                  </Link>
                </li>
                <li>
                  <Link href="/category/life" className="block">
                    Life
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Center: Customer service (advertising replaced) */}
          <div className="w-full md:w-1/5">
            <h3 className="mb-4 font-medium">customer service</h3>
            <ul className="text-sm space-y-2">
              <li>
                <Link href="/contact-us">contact us</Link>
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

          {/* Right: Newsletter */}
          <div className="w-full md:w-1/3">
            <p className="mb-4 font-medium">subscribe to our newsletter</p>
            <input
              type="email"
              placeholder="your email"
              className="mb-2 px-4 pb-4 border-gray-200 border-b-[1px] focus-within:outline-0 w-full"
            />
            <p className="w-[95%] text-xs">
              by clicking "submit," you agree to receive emails from goop and
              accept our web terms of use and privacy and cookie policy. *Terms
              apply.
            </p>
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
