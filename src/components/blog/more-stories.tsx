import Link from "next/link";

function Blog({ blog }: { blog: any }) {
  return (
    <div className="flex flex-col">
      <div className="flex-1 w-full h-full">
        <img
          className="w-full h-full object-cover"
          src={blog.image}
          alt="Story"
          width={500}
          height={333}
        />
      </div>

      <Link href={`/blog/${blog.id}`}>
        <div className="space-y-2 mt-6">
          <h4
            className="font-medium hover:underline"
            suppressHydrationWarning
            dangerouslySetInnerHTML={{
              __html: blog.title || "",
            }}
          ></h4>
          <p
            className="hover:underline"
            suppressHydrationWarning
            dangerouslySetInnerHTML={{
              __html: blog.description || "",
            }}
          ></p>
        </div>
      </Link>
    </div>
  );
}

export function MoreStories({ blogs }: { blogs: any[] }) {
  return (
    <section className="mx-auto px-8 py-24 container">
      <h2 className="mb-12 text-2xl italic">more stories</h2>
      <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
        {blogs.map((blog) => (
          <Blog key={blog.id} blog={blog} />
        ))}
      </div>
    </section>
  );
}
