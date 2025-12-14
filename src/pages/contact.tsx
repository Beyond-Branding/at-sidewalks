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

function PhoneIcon() {
  return (
    <Image
      src="/assets/socials/phone.png"
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

      <section className="mx-auto px-6 py-12 text-sm container">
        <div className="mx-auto max-w-5xl">
          <div className="items-start gap-12 grid grid-cols-1 md:grid-cols-2">
            {/* Left: Advertising + Socials */}
            <div>
              <h2 className="mb-4 font-semibold text-lg">
                Advertising & Partnerships
              </h2>
              <div
                className="mb-6 text-gray-700 text-justify leading-relaxed"
                suppressHydrationWarning
                dangerouslySetInnerHTML={{
                  __html:
                    props?.footer?.advertising ||
                    `We love working with brands and businesses and are happy to create partnerships of all shapes and sizes. Please email: sidewalksstudio@gmail.com`,
                }}
              ></div>

              <div className="mt-6">
                <h3 className="mb-3 font-medium text-base">Our Socials</h3>
                <div className="flex gap-6">
                  <SocialRow
                    icon={<InstagramIcon />}
                    label="@atsidewalks"
                    href="https://instagram.com/atsidewalks"
                  />
                  <SocialRow
                    icon={<MailIcon />}
                    label="atsidewalks@gmail.com"
                    href="mailto:atsidewalks@gmail.com"
                  />
                  <SocialRow
                    icon={<PhoneIcon />}
                    label="+91 1234567890"
                    href="tel:+911234567890"
                  />
                </div>
              </div>
            </div>

            {/* Right: Contact form */}
            <div>
              <h3 className="mb-4 font-semibold text-lg">Contact us</h3>
              <div className="mb-6 text-gray-700 text-justify leading-relaxed">
                Every message I receive feels like a small gift. Your thoughts,
                stories, and ideas mean more than you know. If you ever feel
                called to reach out, even just to say hello- my inbox is always
                open. Write to me anytime at{" "}
                <Link
                  href="mailto:atsidewalks@gmail.com"
                  className="hover:text-pink-500 hover:underline"
                >
                  atsidewalks@gmail.com
                </Link>
                .
              </div>

              <form className="flex flex-col gap-4 text-sm">
                <div className="gap-4 grid grid-cols-1 sm:grid-cols-2">
                  <input
                    aria-label="Name"
                    placeholder="Name"
                    className="px-4 py-2.5 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-200 w-full text-sm"
                  />
                  <input
                    aria-label="Email"
                    placeholder="Email*"
                    className="px-4 py-2.5 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-200 w-full text-sm"
                  />
                </div>

                <textarea
                  aria-label="Comment"
                  placeholder="Comment"
                  className="px-4 py-2.5 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-200 w-full h-36 text-sm"
                />

                <div className="flex justify-start">
                  <Button>Send</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
