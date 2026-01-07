import { useEffect, useState } from "react";

import { HeroCard } from "@/components/common/hero-card";
import { LastestBlogs } from "@/components/home/latest-blogs";
import { ShopReadAndDiscover } from "@/components/home/shop-and-discover";
import { MustReadStories } from "@/components/home/must-read-stories";
import Layout from "@/components/common/layout";

import { GetStaticProps, InferGetStaticPropsType } from "next";
import { getCommonData } from "@/controllers/common.controller";
import { getPosts, getStickyPosts } from "@/controllers/posts.controller";

import ComingSoonPage from "./comingsoon";

const LAUNCH_TIME = new Date(2026, 0, 7, 21, 0, 0).getTime();

export const getStaticProps = (async () => {
  const { footer } = await getCommonData();

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
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    const checkLaunch = () => {
      setIsLive(Date.now() >= LAUNCH_TIME);
    };

    checkLaunch();

    const interval = setInterval(checkLaunch, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!isLive) {
    return <ComingSoonPage />;
  }

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
