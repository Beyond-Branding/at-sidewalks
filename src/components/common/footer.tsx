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
  return <Image src="/assets/socials/instagram.png" alt="Instagram" width={24} height={24} />;
}

function MailIcon() {
  return <Image src="/assets/socials/gmail.png" alt="Mail" width={24} height={24} />;
}

function PhoneIcon() {
  return <Image src="/assets/socials/phone.png" alt="Phone" width={24} height={24} />;
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
          <div className="gap-6 grid grid-cols-1 md:grid-cols-4 w-full">
            <div className="md:col-span-2">
              <Categories />
            </div>
            <NavLinks />

            {/* Substack + Social Icons Container */}
            <div className="w-full md:w-auto flex flex-col gap-2">
              <iframe
                src="https://yachna.substack.com/embed"
                className="block w-full max-w-[420px] md:w-auto md:max-w-none mx-0"
                style={{ display: "block", margin: 0 }}
                frameBorder="0"
                scrolling="no"
                title="Substack subscribe"
              ></iframe>

              {/* Social Icons */}
              <div className="flex gap-6 mt-2 justify-center">
                <Link href="https://instagram.com/atsidewalks" target="_blank" rel="noopener noreferrer">
                  <InstagramIcon />
                </Link>
                <Link href="mailto:atsidewalks@gmail.com" target="_blank" rel="noopener noreferrer">
                  <MailIcon />
                </Link>
                <Link href="tel:+911234567890" target="_blank" rel="noopener noreferrer">
                  <PhoneIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="gap-4 grid md:grid-cols-2 grid-rows-2 md:grid-rows-1 my-12 pt-8 text-xs">
          <div>
            <p>©2025 At Sidewalks All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
