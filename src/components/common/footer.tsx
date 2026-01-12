import { categories } from "@/constants/categories";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";

export function Categories() {
  const [columnOne, columnTwo] = useMemo(() => {
    return [categories.slice(0, 4), categories.slice(4, 8)];
  }, []);

  return (
    <div>
      <h4 className="mb-4 font-medium">categories</h4>
      <ul className="gap-x-50 gap-y-4 grid grid-cols-1 md:grid-cols-2 lowercase">
        {columnOne.map((category) => (
          <li key={`/category/${category.id}`}>
            <Link href={`/category/${category.id}`}>{category.title}</Link>
          </li>
        ))}
        {columnTwo.map((category) => (
          <li key={`/category/${category.id}`}>
            <Link href={`/category/${category.id}`}>{category.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function NavLinks() {
  return (
    <div className="mt-8 md:mt-0">
      <h4 className="mb-4 font-medium">other links</h4>
      <ul className="space-y-4 lowercase">
        <li>
          <Link href="/contact">contact us</Link>
        </li>
        <li>
          <Link href="/privacy-policy">privacy policy</Link>
        </li>
        <li>
          <Link href="/terms-of-use">terms of use</Link>
        </li>
      </ul>
    </div>
  );
}

export function ConnectLinks() {
  return (
    <div className="mt-8 md:mt-0">
      <h4 className="mb-4 font-medium">connect</h4>
      <ul className="space-y-4 lowercase">
        <li>
          <Link
            href="https://instagram.com/atsidewalks"
            target="_blank"
            rel="noopener noreferrer"
          >
            instagram
          </Link>
        </li>
        <li>
          <Link
            href="https://yachna.substack.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            substack
          </Link>
        </li>
        <li>
          <Link href="mailto:atsidewalks@gmail.com">gmail</Link>
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

function InstagramIcon() {
  return (
    <Image
      src="/assets/socials/instagram.png"
      alt="Instagram"
      width={24}
      height={24}
    />
  );
}

function MailIcon() {
  return (
    <Image src="/assets/socials/gmail.png" alt="Mail" width={24} height={24} />
  );
}

export function Footer({ content }: FooterProps) {
  return (
    <footer>
      <div className="bg-rose-50 py-10 w-full">
        <div className="mx-auto px-0 sm:px-4 container">
          <div className="space-y-6 font-bold text-[#e58dae] text-center">
            <h4 className="font-cormorant text-4xl">Join the SW Family!</h4>
            <p className="text-1xl">
              Sign up for exclusive updates and so much more!
            </p>
          </div>

          <div className="flex flex-col justify-center mt-5">
            <form
              action="https://yachna.substack.com/subscribe"
              method="get"
              target="_blank"
              className="mx-auto px-6 w-[45ch] max-w-[90%]"
            >
              <div className="flex items-center mx-auto px-4 py-2 border border-[#EADAD6] hover:border-[#e58dae] focus-within:border-rose-500 rounded-md">
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="flex-2 bg-transparent focus:outline-none text-[#e58dae] text-sm placeholder-[#e58dae]"
                />
                <button type="submit" className="cursor-alias">
                  <span className="text-[#D8BEB8] text-xl select-none">→</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="relative flex mx-auto mt-16 px-8 h-fit container">
        <div className="flex flex-col justify-between w-full">
          <div className="md:justify-items-start gap-0 grid grid-cols-1 md:grid-cols-4 md:pl-35">
            <div className="md:col-span-2">
              <Categories />
            </div>
            <NavLinks />
            <ConnectLinks />
          </div>

          <div className="flex flex-col gap-2 w-full md:w-auto">
            <div className="flex justify-center gap-6 mt-12">
              <Link
                href="https://instagram.com/atsidewalks"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon />
              </Link>
              <Link
                href="mailto:atsidewalks@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MailIcon />
              </Link>
            </div>
          </div>

          <div className="mb-12 pt-4 text-xs text-center">
            <p>
              © 2026 At Sidewalks® All rights reserved. Site designed and
              developed by Beyond Branding
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
