import Image from "next/image";
import { Button } from "@/components/common/button";
import { ScrollContainer } from "react-indiana-drag-scroll";
import "react-indiana-drag-scroll/dist/style.css";
import { ShopNowBar } from "../common/shop-now-bar";

export function ProductCard() {
  return (
    <div className="min-w-[354px]">
      <div>
        <Image
          src="/assets/product.webp"
          alt={""}
          width={800}
          height={1067}
          draggable={false}
        />
      </div>
      <div className="space-y-2 mt-4 text-center">
        <h4 className="font-medium">birkenstock 1774</h4>
        <h3>boston pony hair clogs</h3>
        <p>$485</p>
      </div>
    </div>
  );
}

export function NewArrivals() {
  return (
    <div className="px-6 h-screen">
      <ShopNowBar>
        <h2 className="text-2xl italic">new arrivals</h2>
      </ShopNowBar>

      {/* Products */}
      <ScrollContainer className="pb-6 overflow-x-auto overflow-y-hidden cursor-grab select-none">
        <div className="flex gap-6 mt-6">
          {Array.from({ length: 12 }).map((_, i) => (
            <ProductCard key={i} />
          ))}
        </div>
      </ScrollContainer>
    </div>
  );
}
