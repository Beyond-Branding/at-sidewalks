import { Button } from "@/components/common/button";
import { getCommonData } from "@/controllers/common.controller";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Link from "next/link";
import React from "react";

export const getStaticProps = (async (context) => {
  const { footer } = await getCommonData();

  return {
    revalidate: 60,
    props: {
      footer,
    },
  };
}) satisfies GetStaticProps<any>;

function InstagramIcon({ className = "w-6 h-6" }: { className?: string }) {
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

function MailIcon({ className = "w-6 h-6" }: { className?: string }) {
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

function PhoneIcon({ className = "w-6 h-6" }: { className?: string }) {
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
      <div className="flex justify-center items-center bg-pink-50 rounded-full w-10 h-10 text-pink-500">
        {icon}
      </div>
      <div className="text-left">
        <p className="font-medium text-gray-900 group-hover:text-pink-500 text-sm transition-colors">
          {label}
        </p>
      </div>
    </Link>
  );
}

export default function ContactPageSplit(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  return (
    <section className="mx-auto px-6 py-12 container">
      <div className="mx-auto max-w-5xl">
        <div className="items-start gap-12 grid grid-cols-1 md:grid-cols-2">
          <div>
            <h2 className="mb-6 font-medium text-2xl">
              Advertising & Partnerships
            </h2>
            <p className="mb-6">
              We love working with brands and businesses and are happy to create
              partnerships of all shapes and sizes. Please email{" "}
              <Link
                href="mailto:maureen@cupofjo.com"
                className="font-medium text-pink-500 hover:underline"
              >
                maureen@cupofjo.com
              </Link>{" "}
              for our media kit.
            </p>

            <div className="mt-8">
              <h3 className="mb-4 font-medium text-xl">Our Socials</h3>
              <div className="flex flex-col gap-3">
                <SocialRow
                  icon={<InstagramIcon className="w-5 h-5" />}
                  label="instagram /@atsidewalks"
                  href="https://instagram.com/atsidewalks"
                />
                <SocialRow
                  icon={<MailIcon className="w-5 h-5" />}
                  label="gmail /@atsidewalks"
                  href="mailto:atsidewalks@gmail.com"
                />
                <SocialRow
                  icon={<PhoneIcon className="w-5 h-5" />}
                  label="phone /1234567890"
                  href="tel:+911234567890"
                />
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-medium text-2xl">Contact us</h3>
            <p className="mb-6">
              If you have any query about your order or anything else, please
              don’t hesitate to contact us using the form below. Alternatively,
              you can contact us using our email -{" "}
              <Link
                href="mailto:studiossakuranbo@gmail.com"
                className="font-medium text-pink-500 hover:underline"
              >
                studiossakuranbo@gmail.com
              </Link>
            </p>
            <form className="flex flex-col gap-4">
              <div className="gap-4 grid grid-cols-1 sm:grid-cols-2">
                <input
                  aria-label="Name"
                  placeholder="Name"
                  className="px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-200 w-full"
                />
                <input
                  aria-label="Email"
                  placeholder="Email*"
                  className="px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-200 w-full"
                />
              </div>

              <textarea
                aria-label="Comment"
                placeholder="Comment"
                className="px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-200 w-full h-40"
              />

              <div className="flex justify-start">
                <Button>Send</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
