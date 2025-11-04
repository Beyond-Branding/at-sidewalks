import { Button } from "./button";

export function HeroCard() {
  return (
    <section id="hero-section" className="-top-18 relative h-screen">
      <div className="absolute inset-0">
        <video
          muted
          playsInline
          autoPlay
          loop
          className="bg-center size-full object-cover"
          src="/assets/home/video_banner.mp4"
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
