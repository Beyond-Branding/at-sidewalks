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
      <ul className="space-y-4 grid grid-cols-1 md:grid-cols-2 lowercase">
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
    <div>
      <h4 className="mb-4 font-medium">other links</h4>
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

function PhoneIcon() {
  return (
    <Image src="/assets/socials/phone.png" alt="Phone" width={24} height={24} />
  );
}

export function Footer({ content }: FooterProps) {
  return (
    <footer>
      <div className="bg-rose-50 py-10 w-full">
        <div className="mx-auto container px-0 sm:px-4">
          <div className="space-y-6 text-rose-300/70 text-center">
            <h4 className="font-cormorant text-4xl">Join the SW Family!</h4>
            <p>Sign up for exclusive updates and so much more!</p>
          </div>
          <div className="flex flex-col justify-center mt-6">
            <form
              action="https://yachna.substack.com/subscribe"
              method="get"
              target="_blank"
              className="mx-auto px-6 w-[45ch]"
            >
              <div className="flex items-center mx-auto px-4 py-2 border border-[#EADAD6] hover:border-rose-300 focus-within:border-rose-500 rounded-md">
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="flex-1 bg-transparent focus:outline-none text-rose-300/50 text-sm placeholder-[#D8BEB8]"
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
          <div className="justify-stretch gap-6 grid md:grid-cols-3 grid-col-1">
            <div className="col-span-2">
              <Categories />
            </div>
            <NavLinks />
          </div>

          <div>
            <div className="flex flex-col gap-2 w-full md:w-auto">
              {/* Social Icons */}
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
                <Link
                  href="tel:+911234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <PhoneIcon />
                </Link>
              </div>
            </div>
            <div className="mb-12 pt-4 text-xs text-center">
              <div>
                <p>©2025 At Sidewalks All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
