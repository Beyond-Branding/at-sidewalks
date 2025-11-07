import BlogBanner from "@/components/blog/blog-banner";
import BlogContent from "@/components/blog/blog-content";
import { MoreStories } from "@/components/blog/more-stories";
import Layout from "@/components/common/layout";
import { getAuthor, getCommonData } from "@/controllers/common.controller";
import { getMedia } from "@/controllers/media.controller";
import { getPost, getPosts } from "@/controllers/posts.controller";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";

export const getStaticPaths: GetStaticPaths<any> = async () => {
  let page = 1;
  let allPosts = [] as any[];

  while (true) {
    try {
      const posts = await getPosts({
        per_page: 10,
        page: page,
      });
      if (!posts.length) break;
      allPosts = [...allPosts, ...posts];
      page++;
    } catch (e) {
      break;
    }
  }

  const paths = allPosts.map((post) => ({
    params: { blog: `${post.id}` },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = (async (context) => {
  const { footer } = await getCommonData();

  /* Page specific data */
  try {
    const { blog: blogId } = context.params as { blog: string };
    console.log(blogId);
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
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  return (
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
  );
}
