import { useRouter } from "next/router";
import { Button } from "@/components/common/button";
import { LastestBlogs } from "@/components/home/latest-blogs";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { getCommonData } from "@/controllers/common.controller";
import Layout from "@/components/common/layout";
import { categories } from "@/constants/categories";
import { getCategory } from "@/controllers/categories.controller";
import { getMedia } from "@/controllers/media.controller";
import { getPosts } from "@/controllers/posts.controller";

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = categories.map((cat: any) => ({
    params: { category: `${cat.id}` },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = (async (context) => {
  const { footer } = await getCommonData();

  /* Page specific data */
  const { category: categoryId } = context.params as { category: string };
  const category = await getCategory(+categoryId);

  const coverImage = category?.acf?.category_image
    ? await getMedia(category?.acf?.category_image)
    : null;

  const blogs = await getPosts({
    categories: categoryId,
    per_page: 100,
  });

  return {
    revalidate: 60,
    props: {
      footer,
      category: {
        id: categoryId,
        title: category?.name,
        description: category?.description,
        image: coverImage,
      },
      blogs,
    },
  };
}) satisfies GetStaticProps<any>;

export default function CategoryPage(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const router = useRouter();

  return (
    <Layout footer={props.footer}>
      <div>
        <section id="hero-section" className="-top-18 relative h-screen">
          <div className="z-10 absolute inset-0 flex justify-center items-center bg-transparent">
            <div className="bg-black/50 py-12 w-[60%] text-white text-center">
              <div className="space-y-4 mb-2">
                <h2
                  className="text-3xl"
                  suppressHydrationWarning
                  dangerouslySetInnerHTML={{
                    __html: props?.category?.title || "",
                  }}
                ></h2>
                <p
                  className="mx-auto max-w-[45ch]"
                  suppressHydrationWarning
                  dangerouslySetInnerHTML={{
                    __html: props?.category?.description || "",
                  }}
                ></p>
              </div>

              <div className="space-y-4">
                <Button>Read More</Button>
              </div>
            </div>
          </div>
          {props?.category?.image && (
            <div className="absolute inset-0">
              <img
                className="w-full h-full object-cover"
                src={props?.category?.image}
                alt="Beauty"
                height={2048}
                width={1365}
              />
            </div>
          )}
        </section>
        {props?.blogs?.length > 0 && <LastestBlogs blogs={props.blogs} />}
      </div>
    </Layout>
  );
}
