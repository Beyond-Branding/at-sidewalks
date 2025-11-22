import Layout from "@/components/common/layout";
import { BlogCard } from "@/components/home/latest-blogs";
import { getCommonData } from "@/controllers/common.controller";
import { getPosts } from "@/controllers/posts.controller";
import { GetStaticProps, InferGetStaticPropsType } from "next";

export const getStaticProps = (async (context) => {
  const { footer } = await getCommonData();

  /* Page specific data */
  const allBlogs = await getPosts({
    per_page: 100,
  });

  return {
    revalidate: 60,
    props: {
      footer,
      allBlogs,
    },
  };
}) satisfies GetStaticProps<any>;

export default function BlogsPage(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  return (
    <Layout footer={props.footer}>
      <main className="mx-auto px-6 pt-12 min-h-screen container">
        <section className="mb-8">
          <div>
            <h2 className="text-4xl italic">all blogs</h2>
          </div>
        </section>

        <section className="gap-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          {props.allBlogs?.map((blog) => (
            <BlogCard key={blog.id} className="" blog={blog} />
          ))}
        </section>
      </main>
    </Layout>
  );
}
