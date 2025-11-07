import { Button } from "@/components/common/button";
import Layout from "@/components/common/layout";
import { getCommonData } from "@/controllers/common.controller";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Image from "next/image";
import Link from "next/link";

export const getStaticProps = (async (context) => {
  const { footer } = await getCommonData();

  return {
    revalidate: 60,
    props: {
      footer,
    },
  };
}) satisfies GetStaticProps<any>;

export function ContactForm() {
  return (
    <div className="mx-auto container">
      <div className="mx-auto max-w-[55ch]">
        <h3 className="mb-6 font-medium text-3xl uppercase">Contact us</h3>
        <p className="mb-6">
          If you have any query about your order or anything else, please don’t
          hesitate to contact us using the form below. Alternatively, you can
          contact us using our email - studiossakuranbo@gmail.com
        </p>
        <p>
          Please kindly do not send multiple emails regarding the same query.
          This can cause delays in replying to you <br /> ⭐️
        </p>
      </div>

      <div className="mx-auto mt-14 max-w-[720px]">
        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <div className="w-full">
              <input placeholder="Name" className="px-4 py-2 border-1 w-full" />
            </div>
            <div className="w-full">
              <input
                placeholder="Email*"
                className="px-4 py-2 border-1 w-full"
              />
            </div>
          </div>
          <div className="col-span-2">
            <textarea
              placeholder="Comment"
              className="px-4 py-2 border-1 w-full h-24"
            />
          </div>
          <div className="flex justify-start col-span-2">
            <Button>Send</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

function SocialCard({ image, handle }: { image: string; handle: string }) {
  return (
    <Link href="#">
      <div className="flex justify-center items-center gap-2">
        <div className="size-10">
          <Image src={image} alt="instagram" height={512} width={512} />
        </div>
        <div>
          <p className="font-medium">{handle}</p>
        </div>
      </div>
    </Link>
  );
}

export default function ContactPage(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  return (
    <Layout footer={props.footer}>
      <section className="mx-auto px-8 pt-12 text-center container">
        <div className="mx-auto mb-16 max-w-[55ch]">
          <h2 className="mb-8 font-medium text-3xl uppercase">
            ADVERTISING & PARTNERSHIPS
          </h2>
          <div
            suppressHydrationWarning
            dangerouslySetInnerHTML={{
              __html: props.footer.advertising || "",
            }}
          ></div>
        </div>

        <div className="mx-auto mb-16 max-w-[55ch]">
          <h2 className="mb-8 font-medium text-3xl uppercase">OUR SOCIALS</h2>
          <div className="flex flex-wrap justify-between items-center gap-6">
            <SocialCard
              image="/assets/socials/instagram.png"
              handle="/@atsidewalks"
            />
            <SocialCard
              image="/assets/socials/gmail.png"
              handle="/@atsidewalks"
            />
            <SocialCard
              image="/assets/socials/phone.png"
              handle="/1234567890"
            />
          </div>
        </div>

        <ContactForm />
      </section>
    </Layout>
  );
}
