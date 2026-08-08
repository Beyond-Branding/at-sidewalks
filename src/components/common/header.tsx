import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Popover } from "radix-ui";
import { AnimatePresence } from "motion/react";
import { categories } from "@/constants/categories";
import { useRouter } from "next/router";
import Sidebar from "./sidebar";
import SearchDrawer from "./search-drawer";

export function NavLinkWithImage({ href = "#", image, title }: any) {
  return (
    <Link
      href={href}
      className="flex items-center gap-2 hover:text-pink-300 text-sm lowercase transition-colors duration-200"
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
        <button className="hover:text-pink-300 transition-colors duration-200 cursor-pointer">
          categories
        </button>
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content asChild sideOffset={16} align="start">
          <div className="z-[1000] gap-x-12 gap-y-6 grid grid-cols-2 grid-rows-2 bg-primary shadow-lg px-8 py-6 rounded-md max-w-screen">
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
  const [isCategoriesDrawerOpen, setIsCategoriesDrawerOpen] = useState(false);
  const [isSearchDrawerOpen, setIsSearchDrawerOpen] = useState(false);
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
    const handleRouteChange = () => setIsCategoriesDrawerOpen(false);
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
                  onClick={() =>
                    setIsCategoriesDrawerOpen((current) => !current)
                  }
                  className="hover:text-pink-300 transition-colors duration-200"
                >
                  {isCategoriesDrawerOpen ? "close" : "menu"}
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
                  href="https://shop.atsidewalks.com"
                  className="hover:text-pink-300 transition-colors duration-200"
                >
                  shop
                </Link>
              </li>
              <li className="hidden md:block">
                <Link
                  href="/about"
                  className="hover:text-pink-300 transition-colors duration-200"
                >
                  about
                </Link>
              </li>
              <li className="hidden md:block">
                <Link
                  href="/contact"
                  className="hover:text-pink-300 transition-colors duration-200"
                >
                  contact
                </Link>
              </li>
              <li className="hidden md:block">
                <Link
                  href="/blogs"
                  className="hover:text-pink-300 transition-colors duration-200"
                >
                  blogs
                </Link>
              </li>
              <li className="flex">
                <button
                  className="m-auto"
                  onClick={() => setIsSearchDrawerOpen(true)}
                >
                  <Image
                    className="m-auto size-4"
                    src="/assets/ui/search.svg"
                    height={48}
                    width={48}
                    alt="Search Button"
                  />
                </button>
              </li>
            </ul>
          </nav>
        </header>
      </div>

      <AnimatePresence>
        <Sidebar
          isOpen={isCategoriesDrawerOpen}
          onClose={() => setIsCategoriesDrawerOpen(false)}
        />

        <SearchDrawer
          isOpen={isSearchDrawerOpen}
          onClose={() => setIsSearchDrawerOpen(false)}
        />
      </AnimatePresence>
    </>
  );
}
