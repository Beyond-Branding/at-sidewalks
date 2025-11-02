import Image from "next/image";
import { Button } from "@/components/common/button";
import { ScrollContainer } from "react-indiana-drag-scroll";
import "react-indiana-drag-scroll/dist/style.css";
import { ShopNowBar } from "../common/shop-now-bar";
import { Blog, blogs } from "@/constants/blogs";

export function BlogCard({ blog }: { blog: Blog }) {
  return (
    <div className="min-w-[354px]">
      <div className="h-[80%] overflow-hidden">
        <Image
          className="w-auto h-full"
          src={blog.image}
          alt={""}
          width={800}
          height={1067}
          draggable={false}
        />
      </div>
      <div className="space-y-2 mt-4 text-center">
        <h4 className="font-medium">{blog.title}</h4>
        {/*   <h3>{blog.author}</h3>
        <p>$485</p> */}
      </div>
    </div>
  );
}

export function LastestBlogs() {
  return (
    <div className="px-6 h-fit">
      <ShopNowBar>
        <h2 className="text-2xl italic">latest blogs</h2>
      </ShopNowBar>

      {/* Products */}
      <ScrollContainer className="pb-6 overflow-x-auto overflow-y-hidden cursor-grab select-none">
        <div className="flex gap-6 mt-6">
          {blogs.map((blog) => (
            <BlogCard key={blog.title} blog={blog} />
          ))}
        </div>
      </ScrollContainer>
    </div>
  );
}
