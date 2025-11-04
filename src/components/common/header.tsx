import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Collapsible, Popover } from "radix-ui";
import { overTheRainbowFont } from "@/assets/config/fonts";
import { AnimatePresence, motion, Variants } from "motion/react";
import { categories } from "@/constants/categories";
import { useRouter } from "next/router";
import { slugify } from "@/utlis/common";

export function CollapsibleLink() {
  return (
    <Collapsible.Root>
      <Collapsible.Trigger asChild>
        <div className="flex justify-between items-center pb-2 border-gray-200 border-b-[0.25px]">
          <button className="font-bold pointer-events-none">categories</button>
          <div className="size-4">
            <Image
              className="size-full"
              src="/assets/ui/plus.png"
              alt="Plus"
              width={24}
              height={24}
            />
          </div>
        </div>
      </Collapsible.Trigger>
      <Collapsible.Content asChild>
        <div className={`${overTheRainbowFont.className} mt-2 text-sm`}>
          {categories.map((category) => (
            <div className="flex gap-2 space-y-4">
              <div className="size-6">
                <Image
                  className="size-full"
                  src={category.image}
                  alt={category.title}
                  height={100}
                  width={100}
                />
              </div>
              <Link
                href={`/category/${slugify(category.title)}`}
                className="font-gloria-hallelujah"
              >
                {category.title}
              </Link>
            </div>
          ))}
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  );
}

export function Sidebar({ isOpen, onClose }: any) {
  const variants: Variants = {
    open: { x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } },
    closed: {
      x: "-100%",
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
  };

  const overlayVariants: Variants = {
    open: { opacity: 1, display: "block" },
    closed: { opacity: 0, display: "none" },
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <motion.aside
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        exit="closed"
        variants={variants}
        className="top-0 bottom-0 left-0 z-100 isolate fixed bg-primary px-8 pt-16 w-screen max-w-[540px]"
      >
        <div className="z-10 space-y-4">
          <CollapsibleLink />
          <div className="flex justify-between items-center pb-2 border-gray-200 border-b-[0.25px]">
            <Link href="/about" className="font-bold">
              about
            </Link>
          </div>
          <div className="flex justify-between items-center pb-2 border-gray-200 border-b-[0.25px]">
            <Link href="/contact" className="font-bold">
              contact
            </Link>
          </div>
        </div>
      </motion.aside>

      {/* Overlay */}
      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        exit="closed"
        variants={overlayVariants}
        className="z-50 fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={() => onClose()}
      ></motion.div>
    </>
  );
}

export function NavLinkWithImage({ href = "#", image, title }: any) {
  return (
    <Link href={href} className="flex items-center gap-2">
      <div className="size-8">
        <Image
          className="size-full"
          src={image}
          alt="Beauty"
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
    const handleRouteChange = (url: string, { shallow }: any) => {
      setOpen(false);
    };

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router]);

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger asChild>
        <button className="cursor-pointer">categories</button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content asChild sideOffset={16} align="start">
          <div
            className={`${overTheRainbowFont.className} z-[1000] grid grid-cols-2 grid-rows-2 bg-primary max-w-screen px-8 py-6 gap-y-6 gap-x-12 shadow-lg rounded-md`}
          >
            {categories.map((category) => (
              <NavLinkWithImage
                key={category.title}
                href={`/category/${slugify(category.title)}`}
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
    const handleRouteChange = (url: string, { shallow }: any) => {
      setOpen(false);
    };

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router]);

  return (
    <>
      <div
        className={`top-0 z-[1000] sticky ${
          isTransparent ? "bg-transparent" : "bg-primary"
        }`}
      >
        <header className="grid grid-cols-3 mx-auto px-8 py-4 container">
          {/* Navigation */}
          <nav className="flex justify-between text-sm">
            <ul className="flex items-center gap-6">
              <li className="md:hidden">
                <button onClick={() => setOpen((current) => !current)}>
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
          {/* Navigation */}
          <nav className="flex justify-end text-sm">
            <ul className="flex items-center gap-6">
              <li className="hidden md:block">
                <Link href="/about">about</Link>
              </li>
              <li className="hidden md:block">
                <Link href="/contact">contact</Link>
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
