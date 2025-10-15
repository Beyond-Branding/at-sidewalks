import Image from "next/image";
import Marquee from "react-fast-marquee";

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

export function Testimonials() {
  function Testimonial() {
    return (
      <div className="flex flex-col justify-center items-center px-8 border-r h-full text-center">
        <div className="size-20">
          <img
            className="w-auto h-full"
            src="https://cupofjo.com/wp-content/uploads/2015/02/martha-stewart.png"
          />
        </div>
        <div>"One of the top lifestyle websites for women" and one of the</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col bg-[#EBB338] pb-8">
      <div className="border-b-1 text-center">
        <h3 className="py-8 text-3xl">Praise for At Sidewalks</h3>
      </div>
      <div className="flex flex-1 pt-8">
        <Marquee style={{ margin: "auto" }}>
          {Array.from({ length: 10 }).map((testimonial, index) => (
            <Testimonial key={index} />
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div>
      <AboutBanner />
      <AboutContent />
      <Testimonials />
    </div>
  );
}
