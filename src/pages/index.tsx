import { HeroCard } from "@/components/common/hero-card";
import { LastestBlogs } from "@/components/home/latest-blogs";
import { ShopReadAndDiscover } from "@/components/home/shop-and-discover";
import { MustReadStories } from "@/components/home/must-read-stories";
import Layout from "@/components/common/layout";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { getCommonData } from "@/controllers/common.controller";
import { getPosts, getStickyPosts } from "@/controllers/posts.controller";

export const getStaticProps = (async (context) => {
  const { footer } = await getCommonData();

  /* Page specific data */
  const latestBlogs = await getPosts();
  const stickyBlogs = await getStickyPosts();
  const mustReadStories = await getPosts({
    tags: 240,
    per_page: 100,
  });

  return {
    revalidate: 60,
    props: {
      footer,
      latestBlogs,
      stickyBlogs,
      mustReadStories,
    },
  };
}) satisfies GetStaticProps<any>;

export default function HomePage(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  return (
    <Layout footer={props.footer}>
      <div>
        <HeroCard />
        <LastestBlogs blogs={props.latestBlogs} />
        <ShopReadAndDiscover blogs={props.stickyBlogs} />
        <MustReadStories blogs={props.mustReadStories} />
      </div>
    </Layout>
  );
}
