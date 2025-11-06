import Image from "next/image";

export function AboutBanner() {
  return (
    <section className="mx-auto mt-12 py-2 container" id="hero-section">
      <div className="rounded-md h-[80vh] overflow-hidden">
        <Image
          src="/assets/about_banner.png"
          className="size-full object-cover"
          alt="About Banner"
          width={2000}
          height={1008}
        />
      </div>
    </section>
  );
}
