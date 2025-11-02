import { categories } from "@/constants/categories";
import Image from "next/image";

export function NavLinks() {
  return (
    <div>
      <h4 className="mb-4 font-medium">customer service</h4>
      <ul className="space-y-4">
        <li>contact us</li>
        <li>privacy policy</li>
        <li>terms of use</li>
        <li>faq</li>
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="relative flex mx-auto px-8 pt-24 h-fit container">
      <div className="absolute inset-0 pointer-events-none">
        <Image
          className="opacity-20 size-full object-contain"
          src="/assets/logo.webp"
          alt="At Sidewalks"
          width={2294}
          height={656}
        />
      </div>
      <div className="flex flex-col">
        <div className="flex md:flex-row flex-col gap-8 mb-auto w-full">
          <div className="flex-[30%] space-y-8">
            <div>
              <h3 className="mb-4 font-semibold">about</h3>

              <div className="space-y-4">
                <div className="rounded-full size-16 overflow-hidden shrink-0">
                  <img
                    src="/assets/author.jpg"
                    className="size-full object-cover"
                    alt=""
                  />
                </div>

                <p className="text-sm">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Magnam quisquam aperiam quidem molestias perspiciatis ullam,
                  iusto quia cumque. Ex aspernatur enim fugit nisi sed eaque
                  voluptates suscipit reprehenderit placeat earum.
                </p>
              </div>
            </div>

            <div>
              <p className="mb-8 font-medium">subscribe to our newsletter</p>
              <input
                type="email"
                placeholder="your email"
                className="mb-2 px-4 pb-4 border-gray-200 border-b-[1px] focus-within:outline-0 w-full"
              />
              <p className="w-[75%] text-xs">
                by clicking "submit," you agree to receive emails from goop and
                accept our web terms of use and privacy and cookie policy.
                *Terms apply.
              </p>
            </div>
          </div>

          <div className="flex md:flex-row flex-col flex-[70%] justify-evenly gap-4">
            <div>
              <h4 className="mb-4 font-medium">categories</h4>
              <ul className="space-y-4">
                {categories.map((category) => (
                  <li>{category.title}</li>
                ))}
              </ul>
            </div>{" "}
            <NavLinks />
          </div>
        </div>

        <div className="gap-4 grid md:grid-cols-2 grid-rows-2 md:grid-rows-1 mt-auto mb-12 pt-8 text-xs">
          <div>
            <ul className="flex flex-wrap gap-x-12 gap-y-2">
              <li>about</li>
              <li>privacy policy</li>
              <li>accessibility</li>
              <li>terms of use</li>
            </ul>
          </div>
          <div>
            <p>
              ©2008-2025 Goop, Inc. All Rights Reserved. goop® is a registered
              trademark of Goop, Inc. and is registered with the U.S. Patent and
              Trademark Office
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
