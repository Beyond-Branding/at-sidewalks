import Image from "next/image";

export function AboutBanner() {
  return (
    <section className="mx-auto mt-12 py-2 container" id="hero-section">
      <div className="w-full">
        <Image
          src="/assets/cover aboutus.jpg"
          alt="About Banner"
          width={1920}
          height={1080}
          className="w-full h-auto object-contain"
          priority
        />
      </div>
    </section>
  );
}
