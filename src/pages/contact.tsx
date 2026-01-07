import { Button } from "@/components/common/button";
import Layout from "@/components/common/layout";
import { getCommonData } from "@/controllers/common.controller";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Link from "next/link";
import Image from "next/image";
import React from "react";

export const getStaticProps = (async () => {
  const { footer } = await getCommonData();

  return {
    revalidate: 60,
    props: {
      footer,
    },
  };
}) satisfies GetStaticProps<any>;

function InstagramIcon() {
  return (
    <Image
      src="/assets/socials/instagram.png"
      alt="Instagram"
      width={24}
      height={24}
    />
  );
}

function SubstackIcon() {
  return (
    <Image
      src="/assets/socials/substack.svg"
      alt="Substack"
      width={24}
      height={22}
    />
  );
}

function MailIcon() {
  return (
    <Image
      src="/assets/socials/gmail.png"
      alt="Instagram"
      width={24}
      height={24}
    />
  );
}

function SocialRow({
  icon,
  label,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  href?: string;
}) {
  return (
    <Link
      href={href || "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-3"
    >
      {icon}
    </Link>
  );
}

export function ContactForm() {
  return (
    <div className="mx-auto container">
      <div className="mx-auto max-w-[55ch]">
        <h3 className="mb-6 font-medium text-3xl uppercase">Contact us</h3>
        <p className="mb-6">
          Every message I receive feels like a small gift. Your thoughts,
          stories, and ideas mean more than you know. If you ever feel called to
          reach out, even just to say hello- my inbox is always open. Write to
          me anytime at{" "}
          <Link
            href="mailto:atsidewalks@gmail.com"
            className="hover:text-pink-500 hover:underline"
          >
            atsidewalks@gmail.com
          </Link>
          .
        </p>
      </div>

      <div className="mx-auto mt-14 max-w-[720px]">
        <form className="flex flex-col gap-4">
          <div className="flex gap-4">
            <input
              placeholder="Name"
              className="px-4 py-2 border w-1/2"
            />
            <input
              placeholder="Email*"
              className="px-4 py-2 border w-1/2"
            />
          </div>

          <input
            placeholder="Phone number"
            className="px-4 py-2 border w-full"
          />

          <textarea
            placeholder="Comment"
            className="px-4 py-2 border w-full h-24"
          />

          <div className="flex justify-start">
            <Button>Send</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function ContactPageSplit(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  return (
    <Layout footer={props.footer}>
      <section className="mx-auto mt-12 py-2 container" id="hero-section">
        <div className="w-full">
          <Image
            src="/assets/contact_banner.png"
            alt="About Banner"
            width={1920}
            height={1080}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </section>

      <section className="mx-auto px-8 py-12 text-center container">
        <ContactForm />

        <div className="mx-auto mb-16 max-w-[55ch] mt-16">
          <h2 className="mb-8 font-medium text-3xl uppercase">
            ADVERTISING & PARTNERSHIPS
          </h2>
          <div
            className="mb-6 text-gray-700 text-center leading-relaxed"
            suppressHydrationWarning
            dangerouslySetInnerHTML={{
              __html:
                props?.footer?.advertising ||
                `We love working with brands and businesses and are happy to create partnerships of all shapes and sizes. Please email: sidewalksstudio@gmail.com`,
            }}
          />
        </div>

        {/* SOCIALS */}
        <div className="mx-auto mb-16 max-w-[55ch]">
          <h2 className="mb-8 font-medium text-3xl uppercase">SOCIALS</h2>
          <div className="mb-6 text-gray-700 text-center leading-relaxed">
            <div className="flex justify-center gap-6 mt-12">
              <Link
                href="https://instagram.com/atsidewalks"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon />
              </Link>
              <Link
                  href="https://yachna.substack.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                 <SubstackIcon />
                </Link>
              <Link
                href="mailto:atsidewalks@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MailIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
