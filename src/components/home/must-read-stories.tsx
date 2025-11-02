import ScrollContainer from "react-indiana-drag-scroll";
import "react-indiana-drag-scroll/dist/style.css";
import Image from "next/image";
import { ShopNowBar } from "../common/shop-now-bar";
import { Blog, blogs } from "@/constants/blogs";

export interface BlogProps {
  className?: string;
  blog: Blog;
}

export function BlogCard({ className, blog }: BlogProps) {
  return (
    <div className="min-w-[354px] max-w-screen">
      <div className={"h-[80%] w-full overflow-hidden"}>
        <Image
          className="w-full h-full object-cover"
          src={blog.image}
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
          <p>{blog.title}</p>
        </div>
      </div>
    </div>
  );
}

export function MustReadStories() {
  return (
    <div className="px-6 h-fit">
      <ShopNowBar>
        <h2 className="text-2xl italic">must read stories</h2>
      </ShopNowBar>

      {/* Products */}
      <ScrollContainer className="pb-6 overflow-x-auto overflow-y-hidden cursor-grab select-none">
        <div className="flex gap-4 mt-6">
          {blogs.map((blog, i) => (
            <BlogCard key={i} blog={blog} />
          ))}
        </div>
      </ScrollContainer>
    </div>
  );
}
