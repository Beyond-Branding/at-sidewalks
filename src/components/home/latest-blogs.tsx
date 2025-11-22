import { ScrollContainer } from "react-indiana-drag-scroll";
import "react-indiana-drag-scroll/dist/style.css";
import { ShopNowBar } from "../common/shop-now-bar";
import { Blog } from "@/constants/blogs";
import Link from "next/link";
import { useRouter } from "next/router";

export function BlogCard({
  blog,
  className = "min-w-[354px]",
}: {
  blog: Blog;
  className?: string;
}) {
  const router = useRouter();

  return (
    <div className={className}>
      <div
        className="h-[80%] overflow-hidden cursor-pointer"
        onClick={() => router.push(`/blog/${blog.id}`)}
      >
        <img
          className="w-full h-full object-cover"
          src={blog.image}
          alt=""
          width={800}
          height={1067}
          draggable={false}
        />
      </div>

      <Link href={`/blog/${blog.id}`}>
        <div className="space-y-2 mt-4 text-center">
          <h4
            className="font-medium text-black hover:text-[#f5acc8] decoration-[#f5acc8] hover:underline underline-offset-4 transition-all duration-300"
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

      {/* Blog Cards Scroll */}
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
