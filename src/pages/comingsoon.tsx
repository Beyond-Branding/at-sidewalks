import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const ComingSoonPage = () => {
  const [mounted, setMounted] = useState(false);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setMounted(true);

    const targetDate = new Date(2026, 0, 8, 21, 0, 0);

    const timer = setInterval(() => {
      const now = Date.now();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen relative flex flex-col overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/daoju0r3c/image/upload/v1767705387/Beige_Yellow_Black_Retro_Photo_Collage_Organizer_Desktop_Wallpaper_1_-modified_hqbpbw.png')",
        }}
      />

      <div className="absolute inset-0 bg-black/75" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.03)_1px,transparent_0)] bg-[size:18px_18px]" />

      <div className="relative z-10 flex flex-col min-h-screen text-white">
        {/* HEADER */}
        <header className="grid grid-cols-3 mx-auto px-8 py-6 container">
          <div />
          <Link className="h-10 mx-auto" href="/">
            <Image
              src="/assets/logo.svg"
              alt="At Sidewalks"
              width={2294}
              height={656}
              className="h-full w-auto object-contain"
              priority
            />
          </Link>
          <div />
        </header>

        {/* MAIN */}
        <main className="flex-1 flex items-center justify-center px-6">
          <div className="text-center max-w-3xl mx-auto animate-fadeUp">
            <p className="uppercase tracking-[0.35em] text-xs text-white/70 mb-6">
              a quiet corner of stories
            </p>

            <h1 className="text-[3.4rem] md:text-[5rem] font-semibold leading-[1.05] mb-6">
              Stories are
              <span className="block italic font-light text-white/80">
                arriving soon
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/80 mb-12 leading-relaxed">
              A curated corner for fashion, culture, art, and quiet thoughts; 
              thoughtfully written, slowly shared.
            </p>

            <div className="mt-12 flex justify-center">
              <div className="flex gap-8 px-10 py-6 rounded-2xl border border-white/20 bg-black/40 backdrop-blur-md">
                <TimeBlock label="DAYS" value={timeLeft.days} />
                <TimeBlock label="HOURS" value={timeLeft.hours} />
                <TimeBlock label="MINUTES" value={timeLeft.minutes} />
                <TimeBlock label="SECONDS" value={timeLeft.seconds} />
              </div>
            </div>
          </div>
        </main>

        {/* FOOTER */}
        <footer className="pb-10">
          <div className="flex justify-center gap-6 mb-4">
            <Link
              href="https://instagram.com/atsidewalks"
              target="_blank"
              className="opacity-70 hover:opacity-100 transition"
            >
              <Image
                src="/assets/socials/instagram.png"
                alt="Instagram"
                width={22}
                height={22}
              />
            </Link>

            <Link
              href="mailto:atsidewalks@gmail.com"
              className="opacity-70 hover:opacity-100 transition"
            >
              <Image
                src="/assets/socials/gmail.png"
                alt="Gmail"
                width={22}
                height={22}
              />
            </Link>
          </div>

          <p className="text-[11px] tracking-wide text-center text-white/60">
            © 2026 At Sidewalks® All rights reserved. Site designed and developed by Beyond Branding
          </p>
        </footer>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeUp {
          animation: fadeUp 1.2s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

function TimeBlock({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex flex-col items-center min-w-[70px]">
      <span className="text-4xl md:text-5xl font-semibold tracking-tight">
        {String(value).padStart(2, "0")}
      </span>
      <span className="mt-2 text-[10px] uppercase tracking-[0.3em] opacity-70">
        {label}
      </span>
    </div>
  );
}

export default ComingSoonPage;
