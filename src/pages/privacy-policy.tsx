import Layout from "@/components/common/layout";
import { getCommonData } from "@/controllers/common.controller";
import { getPage } from "@/controllers/page.controller";
import { GetStaticProps, InferGetStaticPropsType } from "next";

export const getStaticProps = (async (context) => {
  const { footer } = await getCommonData();

  /* Page specific data */
  const privacyPolicy = await getPage({
    slug: "privacy-policy",
  });

  console.log(privacyPolicy);

  return {
    revalidate: 60,
    props: {
      footer,
    },
  };
}) satisfies GetStaticProps<any>;

export default function PrivacyPolicyPage({
  footer,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout footer={footer}>
      <section className="mx-auto px-6 py-12 text-gray-800 text-sm leading-relaxed container">
        <div className="space-y-6 mx-auto max-w-5xl">
          <h1 className="mb-4 font-semibold text-lg">Privacy Policy</h1>

          <p>
            This Privacy Policy describes how <strong>SideWalks</strong> (the
            "Site", "we", "us", or "our") collects, uses, and discloses your
            personal information when you visit, use our services, or make a
            purchase from <strong>sidewalks.com</strong> (the "Site") or
            otherwise communicate with us (collectively, the "Services"). For
            purposes of this Privacy Policy, "you" and "your" means you as the
            user of the Services, whether you are a customer, website visitor,
            or another individual whose information we have collected pursuant
            to this Privacy Policy.
          </p>

          <p>
            Please read this Privacy Policy carefully. By using and accessing
            any of the Services, you agree to the collection, use, and
            disclosure of your information as described in this Privacy Policy.
            If you do not agree to this Privacy Policy, please do not use or
            access any of the Services.
          </p>

          <h2 className="mt-8 font-medium text-lg">
            Changes to This Privacy Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time, including to
            reflect changes to our practices or for other operational, legal, or
            regulatory reasons. We will post the revised Privacy Policy on the
            Site, update the "Last updated" date and take any other steps
            required by applicable law.
          </p>

          <h2 className="mt-8 font-medium text-lg">
            How We Collect and Use Your Personal Information
          </h2>
          <p>
            To provide the Services, we collect and have collected over the past
            12 months personal information about you from a variety of sources,
            as set out below. The information that we collect and use varies
            depending on how you interact with us.
          </p>
          <p>
            In addition to the specific uses set out below, we may use
            information we collect about you to communicate with you, provide
            the Services, comply with any applicable legal obligations, enforce
            any applicable terms of service, and to protect or defend the
            Services, our rights, and the rights of our users or others.
          </p>

          <h3 className="mt-6 font-medium text-base">
            Information We Collect Directly from You
          </h3>
          <ul className="space-y-2 ml-5 list-disc">
            <li>
              Basic contact details including your name, address, phone number,
              and email.
            </li>
            <li>
              Order information including billing, shipping, and payment
              details.
            </li>
            <li>
              Account information such as username, password, and security
              questions.
            </li>
            <li>
              Shopping and browsing activity such as viewed or saved items.
            </li>
            <li>
              Customer support details including messages and correspondence.
            </li>
          </ul>

          <h3 className="mt-6 font-medium text-base">
            Information We Collect through Cookies
          </h3>
          <p>
            We also automatically collect certain information about your
            interaction with the Services ("Usage Data") using cookies, pixels,
            and similar technologies. Usage Data may include device details,
            browser type, IP address, and your interaction with our Site.
          </p>

          <h2 className="mt-8 font-medium text-lg">
            How We Use Your Personal Information
          </h2>
          <ul className="space-y-2 ml-5 list-disc">
            <li>
              <strong>Providing Products and Services:</strong> To process
              payments, fulfill orders, and manage your account.
            </li>
            <li>
              <strong>Marketing and Advertising:</strong> To send promotional
              offers and improve our advertising relevance.
            </li>
            <li>
              <strong>Security and Fraud Prevention:</strong> To detect and
              prevent fraudulent or malicious activities.
            </li>
            <li>
              <strong>Communicating with You:</strong> To provide customer
              support and service updates.
            </li>
          </ul>

          <h2 className="mt-8 font-medium text-lg">Cookies</h2>
          <p>
            Like many websites, we use cookies on our Site to personalize and
            improve your experience. You can manage or disable cookies in your
            browser settings, but doing so may limit functionality.
          </p>

          <h2 className="mt-8 font-medium text-lg">
            How We Disclose Personal Information
          </h2>
          <p>
            We may disclose your information to trusted service providers such
            as payment processors, delivery partners, and marketing platforms in
            order to provide and improve our services.
          </p>

          <h2 className="mt-8 font-medium text-lg">User Generated Content</h2>
          <p>
            Any content you share publicly (e.g., reviews or posts) will be
            visible to others. Please exercise caution before sharing personal
            details publicly.
          </p>

          <h2 className="mt-8 font-medium text-lg">
            Third Party Websites and Links
          </h2>
          <p>
            Our Site may contain links to third-party websites. We are not
            responsible for their privacy or security practices. Please review
            their policies before interacting with them.
          </p>

          <h2 className="mt-8 font-medium text-lg">Children’s Data</h2>
          <p>
            The Services are not intended for children, and we do not knowingly
            collect data from individuals under 16 years old. If you believe a
            child has provided us data, contact us to delete it.
          </p>

          <h2 className="mt-8 font-medium text-lg">
            Security and Retention of Your Information
          </h2>
          <p>
            We take reasonable steps to protect your information but cannot
            guarantee absolute security. We retain data only as long as needed
            for legitimate business, legal, or security purposes.
          </p>

          <h2 className="mt-8 font-medium text-lg">Your Rights and Choices</h2>
          <p>
            Depending on your location, you may have the right to access,
            delete, correct, or limit the processing of your personal data. You
            may exercise these rights by contacting us at{" "}
            <a
              href="mailto:atsidewalks@gmail.com"
              className="text-pink-500 hover:underline"
            >
              atsidewalks@gmail.com
            </a>
            .
          </p>

          <h2 className="mt-8 font-medium text-lg">Contact</h2>
          <p>
            If you have any questions about this Privacy Policy or our data
            practices, please contact us at:{" "}
            <a
              href="mailto:atsidewalks@gmail.com"
              className="text-pink-500 hover:underline"
            >
              atsidewalks@gmail.com
            </a>
          </p>
        </div>
      </section>
    </Layout>
  );
}
