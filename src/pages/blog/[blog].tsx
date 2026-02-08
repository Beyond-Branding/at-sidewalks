import BlogBanner from "@/components/blog/blog-banner";
import BlogContent from "@/components/blog/blog-content";
import { MoreStories } from "@/components/blog/more-stories";
import Layout from "@/components/common/layout";
import { getAuthor, getCommonData } from "@/controllers/common.controller";
import { getMedia } from "@/controllers/media.controller";
import { getPost, getPosts } from "@/controllers/posts.controller";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps = (async (context) => {
  const { footer } = await getCommonData();

  /* Page specific data */
  try {
    const { blog: blogId } = context.params as { blog: string };
    const blog = await getPost(+blogId);

    const author = await getAuthor(+blog.author);
    const coverImage = await getMedia(+blog.featured_media);

    /* Similar posts */
    const similarPosts = await getPosts({
      per_page: 2,
      page: 1,
      categories: blog?.categories?.at(0) || [],
      exclude: blogId,
    });

    return {
      revalidate: 60,
      props: {
        footer,
        blog,
        author,
        coverImage,
        similarPosts,
      },
    };
  } catch (e) {
    console.log(e);
    return {
      notFound: true,
    };
  }
}) satisfies GetStaticProps<any>;

export default function BlogPage(
  props: InferGetStaticPropsType<typeof getStaticProps>,
) {
  return (
    <>
      <Head>
        <title>{props.blog?.title?.rendered || ""}</title>
      </Head>
      <Layout footer={props.footer}>
        <div>
          <BlogBanner
            blog={props?.blog || ""}
            author={props?.author || ""}
            coverImage={props?.coverImage || ""}
          />
          <BlogContent content={props?.blog?.content?.rendered || ""} />

          {props?.similarPosts?.length > 0 && (
            <MoreStories blogs={props.similarPosts} />
          )}
        </div>
      </Layout>
    </>
  );
}
