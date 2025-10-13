import Image from "next/image";

export function AboutBanner() {
  return (
    <section className="mx-auto px-8 py-2 container" id="hero-section">
      <div className="rounded-md h-[80vh] overflow-hidden">
        <Image
          src="/assets/about_banner.webp"
          className="size-full object-cover"
          alt="About Banner"
          width={2000}
          height={1008}
        />
      </div>
    </section>
  );
}

export function AboutContent() {
  return (
    <div className="py-12 text-center">
      <div className="space-y-4 mx-auto px-8 max-w-xl">
        <p>Welcome to Styled By Sakuranbo!</p>

        <p>
          We're a best friend-founded brand born out of creativity, intention,
          and the hope for girls like us to blossom into the best version of
          theirselves.
        </p>

        <p>
          SBS started in 2020 when my best friend and I were just two teens with
          a sticker obsession, a shared laptop, and big dreams. It all began
          with our first Etsy sticker shop, Sakuranbo Studios, where we
          hand-designed every sticker and packed orders with love.
        </p>

        <p>
          As we grew, so did our vision. With the help of the blossom community,
          we launched Styled by Sakuranbo— a space for like-minded girls in
          search for their better selves!
        </p>

        <p>
          What started as a creative outlet has blossomed into a thriving
          community of dreamers, doers, and gentle go-getters. Whether you're
          planning your week, building your dream routine, or just looking for a
          little motivation, we’re here to remind you that... YOU CAN DO IT!
        </p>

        <p>Thank you for being part of our journey.</p>

        <p>
          With love, <br />
          SBS Team 🌸🫶
        </p>
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div>
      <AboutBanner />
      <AboutContent />
    </div>
  );
}
