import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Popover } from "radix-ui";
import { AnimatePresence } from "motion/react";
import { categories } from "@/constants/categories";
import { useRouter } from "next/router";
import Sidebar from "./sidebar";

export function NavLinkWithImage({ href = "#", image, title }: any) {
  return (
    <Link
      href={href}
      className="flex items-center gap-2 text-sm lowercase transition-colors duration-200 hover:text-pink-300"
    >
      <div className="size-8">
        <Image
          className="size-full"
          src={image}
          alt="Category"
          height={100}
          width={100}
        />
      </div>
      {title}
    </Link>
  );
}

export function NavLinkWithPopover() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleRouteChange = () => setOpen(false);
    router.events.on("routeChangeStart", handleRouteChange);
    return () => router.events.off("routeChangeStart", handleRouteChange);
  }, [router]);

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger asChild>
        <button className="cursor-pointer transition-colors duration-200 hover:text-pink-300">
          categories
        </button>
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content asChild sideOffset={16} align="start">
          <div
            className="z-[1000] grid grid-cols-2 grid-rows-2 bg-primary max-w-screen px-8 py-6 gap-y-6 gap-x-12 shadow-lg rounded-md"
          >
            {categories.map((category) => (
              <NavLinkWithImage
                key={category.title}
                href={`/category/${category.id}`}
                image={category.image}
                title={category.title}
              />
            ))}
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}

export function Header() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true);

  useEffect(() => {
    const section = document.querySelector("#hero-section");
    const observer = new IntersectionObserver(([entry]) =>
      setIsTransparent(entry.isIntersecting)
    );

    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleRouteChange = () => setOpen(false);
    router.events.on("routeChangeStart", handleRouteChange);
    return () => router.events.off("routeChangeStart", handleRouteChange);
  }, [router]);

  return (
    <>
      <div
        className={`top-0 z-[1000] sticky ${
          isTransparent ? "bg-transparent" : "bg-primary"
        }`}
      >
        <header className="grid grid-cols-3 mx-auto px-8 py-4 container">
          {/* Left Nav */}
          <nav className="flex justify-between text-sm">
            <ul className="flex items-center gap-6">
              <li className="md:hidden">
                <button
                  onClick={() => setOpen((current) => !current)}
                  className="transition-colors duration-200 hover:text-pink-300"
                >
                  {open ? "close" : "menu"}
                </button>
              </li>
              <li className="hidden md:block">
                <NavLinkWithPopover />
              </li>
            </ul>
          </nav>

          {/* Logo */}
          <Link className="h-10" href="/">
            <Image
              className="m-auto w-auto h-full object-contain"
              src="/assets/logo.svg"
              alt="At Sidewalks"
              width={2294}
              height={656}
            />
          </Link>

          {/* Right Nav */}
          <nav className="flex justify-end text-sm">
            <ul className="flex items-center gap-6">
              <li className="hidden md:block">
                <Link
                  href="/about"
                  className="transition-colors duration-200 hover:text-pink-300"
                >
                  about
                </Link>
              </li>
              <li className="hidden md:block">
                <Link
                  href="/contact"
                  className="transition-colors duration-200 hover:text-pink-300"
                >
                  contact
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>

      <AnimatePresence>
        <Sidebar isOpen={open} onClose={() => setOpen(false)} />
      </AnimatePresence>
    </>
  );
}
