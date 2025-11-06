import { HeroCard } from "@/components/common/hero-card";
import { LastestBlogs } from "@/components/home/latest-blogs";
import { ShopReadAndDiscover } from "@/components/home/shop-and-discover";
import { MustReadStories } from "@/components/home/must-read-stories";
import { wp } from "@/lib/wp-client";
import Layout from "@/components/common/layout";
import { GetStaticProps, InferGetStaticPropsType } from "next";

export const getStaticProps = (async (context) => {
  const footer_about = await wp.pages().id(4854);
  const footer_contact = await wp.pages().id(4856);
  const footer_advertising = await wp.pages().id(4858);

  const latest_blogs = await wp.posts().perPage(10);

  /* Process the blogs */
  const blogs = await Promise.all(
    latest_blogs.map(async (blog: any) => {
      const image = await wp.media().id(blog.featured_media);
      console.log(image["guid"]["rendered"]);

      return {
        title: blog.title.rendered,
        publishedAt: blog.date,
        author: blog.author,
        image: image["source_url"],
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
      blogs,
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
        <LastestBlogs blogs={props.blogs} />
        <ShopReadAndDiscover />
        <MustReadStories />
      </div>
    </Layout>
  );
}
