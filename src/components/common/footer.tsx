import { categories } from "@/constants/categories";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";

export function Categories() {
  const [columnOne, columnTwo] = useMemo(() => {
    /* Split the categories into two groups (4 and 4) */
    return [categories.slice(0, 4), categories.slice(4, 8)];
  }, []);

  return (
    <div>
      <h4 className="mb-4 font-medium">categories</h4>
      <ul className="space-y-4 grid grid-cols-1 md:grid-cols-2 lowercase">
        {columnOne.map((category) => (
          <li key={category.id}>
            <Link href={category.href}>{category.title}</Link>
          </li>
        ))}

        {columnTwo.map((category) => (
          <li key={category.id}>
            <Link href={category.href}>{category.title}</Link>
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
          <div className="gap-6 grid grid-cols-1 md:grid-cols-4">
            <div className="md:col-span-2">
              <Categories />
            </div>
            <NavLinks />

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
            <p>©2025 At Sidewalks All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
