import ScrollContainer from "react-indiana-drag-scroll";
import "react-indiana-drag-scroll/dist/style.css";
import { ShopNowBar } from "../common/shop-now-bar";
import { Blog } from "@/constants/blogs";
import { useRouter } from "next/router";

export interface BlogProps {
  className?: string;
  blog: Blog;
}

export function BlogCard({ className, blog }: BlogProps) {
  const router = useRouter();

  return (
    <div className="min-w-[354px] max-w-screen">
      <div
        className="w-full h-[80%] overflow-hidden cursor-pointer"
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

      <div className="space-y-2 my-1 mt-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 font-medium">
            <div className="bg-black size-2"></div>
            <span
              suppressHydrationWarning
              dangerouslySetInnerHTML={{
                __html: blog.categories?.at(0) || "",
              }}
            ></span>
          </div>

          {/* Pink hover for 'read now' link */}
          <div>
            <a
              className="text-black hover:text-[#f5acc8] decoration-[#f5acc8] underline underline-offset-4 transition-all duration-300"
              href=""
            >
              read now
            </a>
          </div>
        </div>

        {/* Title hover effect */}
        <div
          className="font-medium text-black hover:text-[#f5acc8] decoration-[#f5acc8] hover:underline underline-offset-4 transition-all duration-300"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: blog.title,
          }}
        ></div>
      </div>
    </div>
  );
}

export interface MustReadStoriesProps {
  blogs: Blog[];
}

export function MustReadStories({ blogs }: MustReadStoriesProps) {
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
