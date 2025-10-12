import { Header } from "@/components/common/header";
import { HeroCard } from "@/components/common/hero-card";
import "react-indiana-drag-scroll/dist/style.css";
import { NewArrivals, ProductCard } from "@/components/home/new-arrivals";
import "react-indiana-drag-scroll/dist/style.css";
import { ShopReadAndDiscover } from "@/components/home/shop-and-discover";
import { ShopNowBar } from "@/components/common/shop-now-bar";
import ScrollContainer from "react-indiana-drag-scroll";
import Image from "next/image";
import { MustReadStories } from "@/components/home/must-read-stories";

export function NavLinks() {
  return (
    <div>
      <h4 className="mb-4 font-medium">customer service</h4>
      <ul className="space-y-4">
        <li>contact us</li>
        <li>my account</li>
        <li>track my order</li>
        <li>shipping and returns</li>
        <li>faqs</li>
        <li>subscription term</li>
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="relative flex mx-auto px-8 pt-24 h-screen container">
      <div className="absolute inset-0 pointer-events-none">
        <Image
          className="opacity-5 size-full object-contain"
          src="/assets/logo.webp"
          alt="At Sidewalks"
          width={2294}
          height={656}
        />
      </div>
      <div className="flex flex-col">
        <div className="flex md:flex-row flex-col gap-8 mb-auto w-full">
          <div className="flex-[30%]">
            <p className="mb-8 font-medium">subscribe to our newsletter</p>
            <input
              type="email"
              className="mb-2 px-4 pb-4 border-gray-200 border-b-[1px] focus-within:outline-0 w-full"
            />
            <p className="w-[75%] text-xs">
              by clicking "submit," you agree to receive emails from goop and
              accept our web terms of use and privacy and cookie policy. *Terms
              apply.
            </p>
          </div>

          <div className="flex-[70%] grid grid-cols-2 md:grid-cols-4 md:grid-rows-1">
            <NavLinks />
            <NavLinks />
            <NavLinks />
            <NavLinks />
          </div>
        </div>

        <div className="gap-4 grid md:grid-cols-2 grid-rows-2 mt-auto mb-12 pt-8 text-xs">
          <div>
            <ul className="flex flex-wrap gap-x-12 gap-y-2">
              <li>privacy & cookies policy</li>
              <li>web terms of use</li>
              <li>do not sell or share my information</li>
              <li>accessibility</li>
              <li>fraud warning</li>
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

export default function HomePage() {
  return (
    <div>
      <Header />
      <HeroCard />
      <NewArrivals />
      <ShopReadAndDiscover />
      <MustReadStories />
      <Footer />
    </div>
  );
}
