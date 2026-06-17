import { Button } from "./button";

export function HeroCard() {
  return (
    <section id="hero-section" className="-top-18 relative h-screen">
      <div className="absolute inset-0">

        {/* DESKTOP VIDEO */}
        <video
          muted
          playsInline
          autoPlay
          preload="auto"
          loop
          className="hidden md:block bg-center size-full object-cover"
          src="https://res.cloudinary.com/dux0kv81i/video/upload/q_auto/f_auto/v1781676330/udmxbmtbwsbcullytcro.mp4"
          poster="/logo.svg"
        />

        {/* MOBILE VIDEO */}
        <video
          muted
          playsInline
          autoPlay
          preload="auto"
          loop
          className="block md:hidden bg-center size-full object-cover"
          src="https://res.cloudinary.com/dux0kv81i/video/upload/q_auto/f_auto/v1781676309/jl2jgrzwvx7pcycwh61c.mp4"  
          poster="/logo.svg"
        />

      </div>
    </section>
  );
}
