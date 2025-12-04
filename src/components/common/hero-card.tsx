import { Button } from "./button";

export function HeroCard() {
  return (
    <section id="hero-section" className="-top-18 relative h-screen">
      <div className="absolute inset-0">
        <video
          muted
          playsInline
          webkit-playsinline
          autoPlay
          preload="auto"
          loop
          className="bg-center size-full object-cover"
          src="https://res.cloudinary.com/daoju0r3c/video/upload/v1764602598/1024_2_3_1_pltmcw.mp4"
          poster="/logo.svg"
        />
      </div>

      
    </section>
  );
}
