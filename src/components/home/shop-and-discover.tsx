import ScrollContainer from "react-indiana-drag-scroll";
import "react-indiana-drag-scroll/dist/style.css";
import { ShopNowBar } from "@/components/common/shop-now-bar";
import Image from "next/image";
import { Button } from "@/components/common/button";

export function ShopReadAndDiscover() {
  return (
    <section className="mx-auto px-8 pt-18 container">
      <ShopNowBar>
        <h2 className="text-2xl italic">new arrivals</h2>
      </ShopNowBar>
      <div className="gap-8 grid md:grid-cols-2 grid-rows-2 md:grid-rows-1 mt-6 pb-8">
        <ScrollContainer className="flex items-start place-items-start gap-8 md:gap-x-[21%] md:grid md:grid-cols-[48%_31%]">
          <div className="min-w-56 h-full">
            <div className="">
              <Image
                src={"/assets/product.webp"}
                alt={""}
                width={800}
                height={1067}
              />
            </div>
            <div className="space-y-2 mt-4 text-center">
              <h4 className="font-medium">birkenstock 1774</h4>
              <h3>boston pony hair clogs</h3>
              <p>$485</p>
            </div>
          </div>

          <div className="flex md:flex-col gap-4">
            {/* Blog 1 */}
            <div className="">
              <div>
                <Image
                  src={"/assets/product.webp"}
                  alt={""}
                  width={800}
                  height={1067}
                />
              </div>
              <div>
                <div className="flex gap-2 my-2">
                  <div className="flex justify-center items-center gap-1">
                    <div className="bg-black w-1 h-1"></div>
                    <span className="font-medium">new beauty obsessions</span>
                  </div>
                  <a className="underline">shop now</a>
                </div>
                <div>
                  <p className="">
                    our editors’ top picks, from skin care to makeup to
                    supplements.
                  </p>
                </div>
              </div>
            </div>

            {/* Blog 2 */}
            <div className="order-1 md:order-2">
              <div>
                <Image
                  src={"/assets/product.webp"}
                  alt={""}
                  width={800}
                  height={1067}
                />
              </div>
              <div>
                <div className="flex gap-2 my-2">
                  <div className="flex justify-center items-center gap-1">
                    <div className="bg-black w-1 h-1"></div>
                    <span className="font-medium">new beauty obsessions</span>
                  </div>
                  <a className="underline">shop now</a>
                </div>
                <div>
                  <p className="">
                    our editors’ top picks, from skin care to makeup to
                    supplements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollContainer>
        <div className="relative">
          <div className="absolute inset-0">
            <Image
              className="bg-center size-full object-cover"
              src="/assets/product.webp"
              alt="Hero Card"
              width={1920}
              height={1080}
            />
          </div>

          <div className="right-0 bottom-1/4 left-0 z-[100] absolute px-6 text-white text-center">
            <h2 className="leading-2">fall essentials</h2>
            <h3 className="mb-5 font-adobe text-5xl italic">
              your seasonal lookbook <span>starts here</span>
            </h3>
            <div>
              <Button>shop now</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
