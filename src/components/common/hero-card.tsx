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
          src="https://res.cloudinary.com/daoju0r3c/video/upload/v1762443723/d123_1_qykwa2.mp4"
          poster="/logo.svg"
        />
      </div>

      <div className="right-0 bottom-32 left-0 absolute px-6 text-center">
        <h2 className="leading-2">fall essentials</h2>
        <h3 className="mb-5 font-adobe text-5xl italic">
          your seasonal lookbook <span>starts here</span>
        </h3>
        <div>
          <Button>shop now</Button>
        </div>
      </div>
    </section>
  );
}
