import { AboutBanner } from "@/components/about/about-banner";
import { AboutContent } from "@/components/about/about-content";
import { Testimonials } from "@/components/about/testimonials";
import Layout from "@/components/common/layout";
import { getCommonData } from "@/controllers/common.controller";
import { wp } from "@/lib/wp-client";
import { GetStaticProps, InferGetStaticPropsType } from "next";

export const getStaticProps = (async (context) => {
  const { footer } = await getCommonData();

  /* Page specific data */
  const about = await wp.pages().id(4862);

  return {
    revalidate: 60,
    props: {
      footer,
      about: about.content.rendered,
    },
  };
}) satisfies GetStaticProps<any>;

export default function AboutPage(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  return (
    <Layout footer={props.footer}>
      <div>
        <AboutBanner />
        <AboutContent content={props.about} />
        <Testimonials />
      </div>
    </Layout>
  );
}
