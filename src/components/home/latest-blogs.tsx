import { ScrollContainer } from "react-indiana-drag-scroll";
import "react-indiana-drag-scroll/dist/style.css";
import { ShopNowBar } from "../common/shop-now-bar";
import { Blog } from "@/constants/blogs";
import Link from "next/link";

export function BlogCard({ blog }: { blog: Blog }) {
  return (
    <div className="min-w-[354px]">
      <div className="h-[80%] overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={blog.image}
          alt={""}
          width={800}
          height={1067}
          draggable={false}
        />
      </div>
      <Link href={`/blog/${blog.id}`}>
        <div className="space-y-2 mt-4 text-center hover:underline">
          <h4
            className="font-medium"
            suppressHydrationWarning
            dangerouslySetInnerHTML={{
              __html: blog.title || "",
            }}
          ></h4>
        </div>
      </Link>
    </div>
  );
}

export function LastestBlogs({ blogs }: { blogs: Blog[] }) {
  return (
    <div className="px-6 h-fit">
      <ShopNowBar ctaText="view more">
        <h2 className="text-2xl italic">latest blogs</h2>
      </ShopNowBar>

      {/* Products */}
      <ScrollContainer className="pb-6 overflow-x-auto overflow-y-hidden cursor-grab select-none">
        <div className="flex gap-6 mt-6">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </ScrollContainer>
    </div>
  );
}
