import ScrollContainer from "react-indiana-drag-scroll";
import "react-indiana-drag-scroll/dist/style.css";
import { ShopNowBar } from "@/components/common/shop-now-bar";
import Image from "next/image";
import { Button } from "@/components/common/button";
import { Blog } from "@/constants/blogs";
import { useMemo } from "react";

export interface ShopReadAndDiscoverProps {
  blogs: Blog[];
}

export function ShopReadAndDiscover({ blogs }: ShopReadAndDiscoverProps) {
  const [blogOne, blogTwo, blogThree, blogFour] = useMemo(
    () => [blogs[0], blogs[1], blogs[2], blogs[3]],
    [blogs]
  );

  if (blogs.length !== 4) {
    return null;
  }

  return (
    <section className="mx-auto px-8 pt-18 container">
      <ShopNowBar>
        <h2 className="text-2xl italic">shop, read and discover</h2>
      </ShopNowBar>
      <div className="gap-8 grid md:grid-cols-2 grid-rows-2 md:grid-rows-1 mt-6 pb-8">
        <ScrollContainer className="flex flex-col items-start place-items-start gap-8 md:gap-x-[21%] md:grid md:grid-cols-[48%_31%]">
          <div className="min-w-56 h-full">
            <div className="">
              <img src={blogOne.image} alt={""} width={800} height={1067} />
            </div>
            <div className="space-y-2 mt-4 text-center">
              <h4
                className="font-medium"
                suppressHydrationWarning
                dangerouslySetInnerHTML={{
                  __html: blogOne.title,
                }}
              ></h4>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {/* Blog 1 */}
            <div className="">
              <div>
                <img src={blogTwo.image} alt={""} width={800} height={1067} />
              </div>
              <div>
                <div className="flex gap-2 my-2">
                  <div
                    className="mx-auto font-medium text-center"
                    suppressHydrationWarning
                    dangerouslySetInnerHTML={{
                      __html: blogTwo.title,
                    }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Blog 2 */}
            <div className="order-1 md:order-2">
              <div>
                <img src={blogThree.image} alt={""} width={800} height={1067} />
              </div>
              <div>
                <div className="flex gap-2 my-2">
                  <div
                    className="flex justify-center items-center gap-1 font-medium text-center"
                    suppressHydrationWarning
                    dangerouslySetInnerHTML={{
                      __html: blogThree.title,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </ScrollContainer>
        <div className="relative">
          <div className="absolute inset-0">
            <img
              className="bg-center size-full object-cover"
              src={blogFour.image}
              alt="Hero Card"
              width={1920}
              height={1080}
            />
          </div>

          <div className="right-0 bottom-1/4 left-0 z-[100] absolute px-6 text-white text-center">
            {/* <h2 className="leading-2">fall essentials</h2> */}
            <h3
              className="mb-5 font-adobe text-3xl md:text-5xl italic"
              suppressHydrationWarning
              dangerouslySetInnerHTML={{
                __html: blogFour.title,
              }}
            ></h3>
            <div>
              <Button>read now</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
