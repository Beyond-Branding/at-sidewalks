import Layout from "@/components/common/layout";
import { BlogCard } from "@/components/home/latest-blogs";
import { getCommonData } from "@/controllers/common.controller";
import { getPosts } from "@/controllers/posts.controller";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { useState } from "react";

const PER_PAGE = 12;
const MAX_VISIBLE_PAGES = 7; // UI limit, NOT data limit

export const getStaticProps = (async () => {
  const { footer } = await getCommonData();

  const initialBlogs = await getPosts({
    per_page: PER_PAGE,
    page: 1,
  });

  return {
    revalidate: 60,
    props: {
      footer,
      initialBlogs: initialBlogs ?? [], 
    },
  };
}) satisfies GetStaticProps<any>;

export default function BlogsPage({
  footer,
  initialBlogs,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [blogs, setBlogs] = useState(initialBlogs);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(
    initialBlogs.length === PER_PAGE
  );

  const loadPage = async (pageNumber: number) => {
    if (pageNumber < 1) return;

    setLoading(true);

    const newBlogs = await getPosts({
      per_page: PER_PAGE,
      page: pageNumber,
    });

    setBlogs(newBlogs);
    setPage(pageNumber);
    setHasNextPage(newBlogs.length === PER_PAGE);
    setLoading(false);

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const startPage = Math.max(1, page - Math.floor(MAX_VISIBLE_PAGES / 2));
  const endPage = startPage + MAX_VISIBLE_PAGES - 1;

  return (
    <Layout footer={footer}>
      <main className="container mx-auto px-6 pt-12 min-h-screen">
        <h2 className="text-4xl italic mb-8">all blogs</h2>

        {/* Blog Grid */}
        <section className="grid gap-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </section>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-3 mt-14 mb-20">
          {/* Previous */}
          <button
            disabled={page === 1 || loading}
            onClick={() => loadPage(page - 1)}
            className="w-12 h-12 flex items-center justify-center rounded-lg border
                       text-lg font-semibold
                       hover:border-[#e58dae] hover:text-[#e58dae]
                       disabled:opacity-40"
          >
            ‹
          </button>

          {/* Page Numbers */}
          {Array.from({ length: MAX_VISIBLE_PAGES }).map((_, i) => {
            const pageNumber = startPage + i;
            if (pageNumber > endPage || pageNumber < 1) return null;

            const isActive = page === pageNumber;

            return (
              <button
                key={pageNumber}
                onClick={() => loadPage(pageNumber)}
                className={`w-11 h-11 flex items-center justify-center rounded-lg border
                  ${
                    isActive
                      ? "bg-[#e58dae] text-white border-[#e58dae]"
                      : "hover:border-[#e58dae] hover:text-[#e58dae]"
                  }`}
              >
                {pageNumber}
              </button>
            );
          })}

          {/* Next */}
          <button
            disabled={!hasNextPage || loading}
            onClick={() => loadPage(page + 1)}
            className="w-12 h-12 flex items-center justify-center rounded-lg border
                       text-lg font-semibold
                       hover:border-[#e58dae] hover:text-[#e58dae]
                       disabled:opacity-40"
          >
            ›
          </button>
        </div>

        {loading && (
          <p className="text-center text-sm mt-4">Loading blogs...</p>
        )}
      </main>
    </Layout>
  );
}
