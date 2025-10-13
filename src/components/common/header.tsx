import Image from "next/image";
import { useEffect, useState } from "react";

export function Header() {
  const [isTransparent, setIsTransparent] = useState(true);

  useEffect(() => {
    const section = document.querySelector("#hero-section");
    const observer = new IntersectionObserver(([entry]) =>
      setIsTransparent(entry.isIntersecting)
    );

    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`top-0 z-10 sticky ${
        isTransparent ? "bg-transparent" : "bg-white"
      }`}
    >
      <header className="flex justify-center items-center gap-6 mx-auto px-8 py-2 container">
        {/* Logo */}
        <div className="w-auto h-8">
          <Image
            className="size-full"
            src="/assets/logo.webp"
            alt="At Sidewalks"
            width={2294}
            height={656}
          />
        </div>

        {/* Navigation */}
        <nav className="flex flex-1 justify-between items-center text-sm">
          <ul className="flex items-center gap-6">
            <li>shop</li>
            <li>new</li>
            <li>picks</li>
          </ul>

          <ul className="hidden md:flex items-center gap-6">
            <li>goop world</li>
            <li>search</li>
            <li>account</li>
            <li>bag (0)</li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
