import { HeroCard } from "@/components/common/hero-card";
import { LastestBlogs } from "@/components/home/latest-blogs";
import { ShopReadAndDiscover } from "@/components/home/shop-and-discover";
import { MustReadStories } from "@/components/home/must-read-stories";
import { wp } from "@/lib/wp-client";
import Layout from "@/components/common/layout";
import { GetStaticProps, InferGetStaticPropsType } from "next";

export const getStaticProps = (async (context) => {
  const categories = (await wp.categories()) as any[];

  const footer_about = await wp.pages().id(4854);
  const footer_contact = await wp.pages().id(4856);
  const footer_advertising = await wp.pages().id(4858);

  const latest_blogs = await wp.posts().perPage(10);

  /* Process the blogs */
  const latestBlogs = await Promise.all(
    latest_blogs.map(async (blog: any) => {
      const image = await wp.media().id(blog.featured_media);

      return {
        title: blog.title.rendered,
        publishedAt: blog.date,
        author: blog.author,
        image: image["source_url"],
        categories: [],
      };
    })
  );

  const sticky_blogs = await wp.posts().param("sticky", "true");

  /* Process the sticky blogs */
  const stickyBlogs = await Promise.all(
    sticky_blogs.map(async (blog: any) => {
      const image = await wp.media().id(blog.featured_media);

      const blogCategories = [];

      for (const category of blog.categories) {
        const categoryName = categories.find((c) => c.id === category);
        if (categoryName) blogCategories.push(categoryName.name);
      }

      return {
        title: blog.title.rendered,
        publishedAt: blog.date,
        author: blog.author,
        image: image["source_url"],
        categories: blogCategories,
      };
    })
  );

  return {
    revalidate: 60,
    props: {
      footer: {
        about: footer_about.content.rendered,
        contact: footer_contact.content.rendered,
        advertising: footer_advertising.content.rendered,
      },
      latestBlogs,
      stickyBlogs,
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
        <MustReadStories blogs={props.stickyBlogs} />
      </div>
    </Layout>
  );
}
