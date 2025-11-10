import ScrollContainer from "react-indiana-drag-scroll";
import "react-indiana-drag-scroll/dist/style.css";
import { ShopNowBar } from "@/components/common/shop-now-bar";
import { Button } from "@/components/common/button";
import { Blog } from "@/constants/blogs";
import { useMemo } from "react";
import Link from "next/link";

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
    <section className="mx-auto px-8 pt-4 container">
      <ShopNowBar>
        <h2 className="text-2xl italic">shop, read and discover</h2>
      </ShopNowBar>

      <div className="gap-8 grid md:grid-cols-2 grid-rows-2 md:grid-rows-1 mt-6 pb-8">
        {/* Left side blogs */}
        <ScrollContainer className="flex flex-col items-start place-items-start gap-8 md:gap-x-[21%] md:grid md:grid-cols-[48%_31%]">
          {/* Blog 1 */}
          <div className="min-w-56 h-full">
            <div>
              <img src={blogOne.image} alt={""} width={800} height={1067} />
            </div>
            <div className="space-y-2 mt-4 text-center">
              <Link href={`/blog/${blogOne.id}`}>
                <h4
                  className="
                    font-medium 
                    text-black 
                    transition-all 
                    duration-300 
                    hover:text-[#f5acc8] 
                    hover:underline 
                    underline-offset-4 
                    decoration-[#f5acc8]
                  "
                  suppressHydrationWarning
                  dangerouslySetInnerHTML={{
                    __html: blogOne.title,
                  }}
                ></h4>
              </Link>
            </div>
          </div>

          {/* Blog 2 & 3 group */}
          <div className="flex flex-col gap-4">
            {/* Blog 2 */}
            <div>
              <div>
                <img src={blogTwo.image} alt={""} width={800} height={1067} />
              </div>
              <div className="flex gap-2 my-2">
                <Link href={`/blog/${blogTwo.id}`}>
                  <div
                    className="
                      mx-auto font-medium text-center
                      text-black 
                      transition-all 
                      duration-300 
                      hover:text-[#f5acc8] 
                      hover:underline 
                      underline-offset-4 
                      decoration-[#f5acc8]
                    "
                    suppressHydrationWarning
                    dangerouslySetInnerHTML={{
                      __html: blogTwo.title,
                    }}
                  ></div>
                </Link>
              </div>
            </div>

            {/* Blog 3 */}
            <div className="order-1 md:order-2">
              <div>
                <img src={blogThree.image} alt={""} width={800} height={1067} />
              </div>
              <div className="flex gap-2 my-2">
                <Link href={`/blog/${blogThree.id}`}>
                  <div
                    className="
                      flex justify-center items-center gap-1 font-medium text-center
                      text-black 
                      transition-all 
                      duration-300 
                      hover:text-[#f5acc8] 
                      hover:underline 
                      underline-offset-4 
                      decoration-[#f5acc8]
                    "
                    suppressHydrationWarning
                    dangerouslySetInnerHTML={{
                      __html: blogThree.title,
                    }}
                  ></div>
                </Link>
              </div>
            </div>
          </div>
        </ScrollContainer>

        {/* Right side large blog */}
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
            <h3
              className="mb-5 font-adobe text-3xl md:text-5xl italic"
              suppressHydrationWarning
              dangerouslySetInnerHTML={{
                __html: blogFour.title,
              }}
            ></h3>
            <div>
              <Link href={`/blog/${blogFour.id}`}>
                <Button>read now</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
