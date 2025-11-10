import { Button } from "@/components/common/button";
import Layout from "@/components/common/layout";
import { getCommonData } from "@/controllers/common.controller";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Link from "next/link";
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

function InstagramIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="2"
        y="2"
        width="20"
        height="20"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M12 7.25a4.75 4.75 0 100 9.5 4.75 4.75 0 000-9.5z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" />
    </svg>
  );
}

function MailIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="2"
        y="4"
        width="20"
        height="16"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M3 7.5l8.5 6L20 7.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhoneIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22 16.92v3a2 2 0 01-2.18 2 19.86 19.86 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.86 19.86 0 012 4.18 2 2 0 014 2h3a2 2 0 012 1.72c.12 1.07.35 2.12.68 3.11a2 2 0 01-.45 2.11L8.09 9.91a15.08 15.08 0 006 6l1.97-1.97a2 2 0 012.11-.45c.99.33 2.04.56 3.11.68A2 2 0 0122 16.92z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
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
      <div className="flex justify-center items-center bg-pink-50 rounded-full w-9 h-9 text-pink-500">
        {icon}
      </div>
      <p className="font-medium text-sm text-gray-800 group-hover:text-pink-500 transition-colors">
        {label}
      </p>
    </Link>
  );
}

export default function ContactPageSplit(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  return (
    <Layout footer={props.footer}>
      <section className="mx-auto px-6 py-12 container text-sm">
        <div className="mx-auto max-w-5xl">
          <div className="items-start gap-12 grid grid-cols-1 md:grid-cols-2">
            {/* Left: Advertising + Socials */}
            <div>
              <h2 className="mb-4 font-semibold text-lg">
                Advertising & Partnerships
              </h2>
              <div
                className="mb-6 leading-relaxed text-gray-700 text-justify"
                suppressHydrationWarning
                dangerouslySetInnerHTML={{
                  __html:
                    props?.footer?.advertising ||
                    `We love working with brands and businesses and are happy to create partnerships of all shapes and sizes. Please email: sidewalksstudio@gmail.com`,
                }}
              ></div>

              <div className="mt-6">
                <h3 className="mb-3 font-medium text-base">Our Socials</h3>
                <div className="flex flex-col gap-3">
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
              <div
                className="mb-6 leading-relaxed text-gray-700 text-justify"
                suppressHydrationWarning
                dangerouslySetInnerHTML={{
                  __html:
                    props?.footer?.contact ||
                    `We love getting emails from readers. Please feel free to write to Joanna at hello@cupofjo.com. If you have a question, you can also take a look at our FAQ page — the answer may be waiting there for you.`,
                }}
              ></div>

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
