import ScrollContainer from "react-indiana-drag-scroll";
import "react-indiana-drag-scroll/dist/style.css";
import Image from "next/image";
import { ShopNowBar } from "../common/shop-now-bar";

export interface StoryProps {
  className?: string;
}

export function Story({ className }: StoryProps) {
  return (
    <div className={className ? className : "w-[354px]"}>
      <div>
        <Image
          src="/assets/product.webp"
          alt={""}
          width={800}
          height={1067}
          draggable={false}
        />
      </div>
      <div className="space-y-2 my-1 mt-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 font-medium">
            <div className="bg-black size-2"></div>
            <span>beauty</span>
          </div>
          <div>
            <a className="underline" href="">
              read now
            </a>
          </div>
        </div>
        <div>
          <p>
            the birkin blueprint: how to master the subtle art of undone
            french-girl hair
          </p>
        </div>
      </div>
    </div>
  );
}

export function MustReadStories() {
  return (
    <div className="px-6 h-screen">
      <ShopNowBar>
        <h2 className="text-2xl italic">new arrivals</h2>
      </ShopNowBar>

      {/* Products */}
      <ScrollContainer className="pb-6 overflow-x-auto overflow-y-hidden cursor-grab select-none">
        <div className="flex gap-4 mt-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <Story
              key={i}
              className={i === 0 ? "min-w-[256px]" : "min-w-[354px]"}
            />
          ))}
        </div>
      </ScrollContainer>
    </div>
  );
}
