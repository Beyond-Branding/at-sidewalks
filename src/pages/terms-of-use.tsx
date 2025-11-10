// pages/terms-of-use.tsx
import Head from "next/head";
import Layout from "@/components/common/layout";
import { getCommonData } from "@/controllers/common.controller";
import { GetStaticProps, InferGetStaticPropsType } from "next";
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

export default function TermsOfUsePage(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  return (
    <Layout footer={props.footer}>
      <Head>
        <title>Terms of Use | SideWalks</title>
      </Head>

      <section className="mx-auto px-6 py-12 container text-sm leading-relaxed text-gray-800">
        <div className="mx-auto max-w-5xl space-y-6">
          <h1 className="text-lg font-semibold">Terms of Use</h1>

          <p className="text-sm">
            PLEASE READ THIS TERMS OF USE AGREEMENT (“TERMS OF USE”) CAREFULLY AS
            IT FORMS A BINDING LEGAL AGREEMENT BETWEEN YOU AND SIDEWALKS. SideWalks
            (“SideWalks”, “we”, or “us”) owns and operates the website made
            available to you at <strong>http://sidewalks.com</strong> (the
            “Website”) and these Terms of Use govern your access to and use of
            the Website, including any products purchased through the Website
            (“Products”), and any other services made available through the
            Website (collectively, with the Products and Website, the
            “Service” or “Services”).
          </p>

          <p className="text-sm">
            PLEASE BE AWARE THAT SECTION 13 OF THIS AGREEMENT, BELOW, CONTAINS
            PROVISIONS GOVERNING HOW CLAIMS THAT YOU AND WE HAVE AGAINST EACH
            OTHER ARE RESOLVED, INCLUDING, WITHOUT LIMITATION, ANY CLAIMS THAT
            AROSE OR WERE ASSERTED PRIOR TO THE EFFECTIVE DATE OF THIS
            AGREEMENT. IN PARTICULAR, IT CONTAINS AN ARBITRATION AGREEMENT WHICH
            WILL, WITH LIMITED EXCEPTIONS, REQUIRE DISPUTES BETWEEN US TO BE
            SUBMITTED TO BINDING AND FINAL ARBITRATION. UNLESS YOU OPT OUT OF THE
            ARBITRATION AGREEMENT: (1) YOU WILL ONLY BE PERMITTED TO PURSUE
            CLAIMS AND SEEK RELIEF AGAINST US ON AN INDIVIDUAL BASIS, NOT AS A
            PLAINTIFF OR CLASS MEMBER IN ANY CLASS OR REPRESENTATIVE ACTION OR
            PROCEEDING; AND (2) YOU ARE WAIVING YOUR RIGHT TO SEEK RELIEF IN A
            COURT OF LAW AND TO HAVE A JURY TRIAL ON YOUR CLAIMS.
          </p>

          <p className="text-sm">
            ANY DISPUTE OR CLAIM RELATING IN ANY WAY TO YOUR USE OF THE WEBSITE
            WILL BE GOVERNED AND INTERPRETED BY AND UNDER THE LAWS OF THE STATE
            OF CALIFORNIA, CONSISTENT WITH THE FEDERAL ARBITRATION ACT, WITHOUT
            GIVING EFFECT TO ANY PRINCIPLES THAT PROVIDE FOR THE APPLICATION OF
            THE LAW OF ANY OTHER JURISDICTION. THE UNITED NATIONS CONVENTION ON
            CONTRACTS FOR THE INTERNATIONAL SALE OF GOODS IS EXPRESSLY EXCLUDED
            FROM THIS AGREEMENT.
          </p>

          <p className="text-sm">
            Your use of, and participation in, certain Services may be subject
            to additional terms (“Supplemental Terms”) and such Supplemental
            Terms will either be listed in the Terms of Use or will be
            presented to you for your acceptance when you sign up to use the
            supplemental Service. If the Terms of Use are inconsistent with the
            Supplemental Terms, the Supplemental Terms shall control with
            respect to such Service. The Terms of Use and any applicable
            Supplemental Terms are referred to herein as the “Terms.”
          </p>

          <p className="text-sm">
            PLEASE NOTE THAT the Terms are subject to change by SideWalks in its
            sole discretion at any time. When changes are made, SideWalks will
            make a new copy of the Terms of Use available at the Website and
            any new Supplemental Terms will be made available from within, or
            through, the affected Service on the Website. We will also update
            the “Last Updated” date at the top of the Terms of Use. If you do
            not agree to any change(s) after receiving a notice of such change,
            you shall stop using the Website and/or the Services. Otherwise,
            your continued use of the Website and/or Services constitutes your
            acceptance of such change(s). PLEASE REGULARLY CHECK THE WEBSITE TO
            VIEW THE THEN-CURRENT TERMS.
          </p>

          <h2 className="text-lg font-medium mt-6">Use of the Services and SideWalks Properties</h2>
          <p className="text-sm">
            The Website, the Services, and the information and content available
            on the Website and the Services (collectively, the “SideWalks
            Properties”) are protected by copyright laws throughout the world.
            Subject to the Terms, SideWalks grants you a limited license to
            reproduce portions of SideWalks Properties for the sole purpose of
            using the Services for your personal or internal business purposes.
            Unless otherwise specified by SideWalks in a separate license, your
            right to use any SideWalks Properties is subject to the Terms.
          </p>

          <h3 className="text-base font-medium mt-4">Updates</h3>
          <p className="text-sm">
            You understand that SideWalks Properties are evolving. As a result,
            SideWalks may require you to accept updates to SideWalks Properties
            that you have installed on your computer or mobile device. You
            acknowledge and agree that SideWalks may update SideWalks Properties
            with or without notifying you. You may need to update third-party
            software from time to time in order to use SideWalks Properties.
          </p>

          <h3 className="text-base font-medium mt-4">Certain Restrictions</h3>
          <p className="text-sm">
            The rights granted to you in the Terms are subject to the following
            restrictions: (a) you shall not license, sell, resell, upload, use,
            copy, rent, lease, lend, transfer, assign, reproduce, distribute,
            host or otherwise commercially exploit SideWalks Properties or any
            portion of SideWalks Properties; (b) you shall not frame or utilize
            framing techniques to enclose any trademark, logo, or other
            SideWalks Properties; (c) you shall not use any metatags or other
            “hidden text” using SideWalks’s name or trademarks; (d) you shall
            not modify, translate, adapt, merge, make derivative works of,
            disassemble, decompile, reverse compile or reverse engineer any part
            of SideWalks Properties except to the extent the foregoing
            restrictions are expressly prohibited by applicable law; (e) you
            shall not use any manual or automated software, devices or other
            processes (including but not limited to spiders, robots, scrapers,
            crawlers, avatars, data mining tools or the like) to access,
            monitor, copy or use the SideWalks Properties; (f) you shall not
            access SideWalks Properties in order to build a similar or
            competitive website, application or service; (g) except as
            expressly stated herein, no part of SideWalks Properties may be
            copied, reproduced, distributed, republished, downloaded, displayed,
            posted or transmitted in any form or by any means; (h) you shall
            not take any action that imposes any unreasonable or
            disproportionately large load on the SideWalks Properties; (i) you
            shall not take any action in connection with your use of the
            SideWalks Properties which violates any applicable local, state,
            national or international law; (j) you shall not otherwise use the
            SideWalks Properties for any unlawful or abusive purposes, including
            posting or distribution of Malicious Code; and (k) you shall not
            remove or destroy any copyright notices or other proprietary
            markings contained on or in SideWalks Properties. Any unauthorized
            use of SideWalks Properties terminates the licenses granted by
            SideWalks pursuant to the Terms.
          </p>

          <h3 className="text-base font-medium mt-4">Third-Party Materials</h3>
          <p className="text-sm">
            As a part of SideWalks Properties, you may have access to materials
            that are hosted by another party. You agree that it is impossible
            for SideWalks to monitor such materials and that you access these
            materials at your own risk.
          </p>

          <h2 className="text-lg font-medium mt-6">Registration</h2>

          <h3 className="text-base font-medium mt-4">Registering Your Account</h3>
          <p className="text-sm">
            In order to access certain features of SideWalks Properties you may
            be required to become a Registered User. For purposes of the Terms,
            a “Registered User” is a user who has registered an account on the
            Website (“Account”).
          </p>

          <h3 className="text-base font-medium mt-4">Registration Data</h3>
          <p className="text-sm">
            In registering an account on the Website, you agree to (1) provide
            true, accurate, current and complete information about yourself as
            prompted by the registration form (the “Registration Data”); and (2)
            maintain and promptly update the Registration Data to keep it true,
            accurate, current and complete. You represent that you are (1) at
            least eighteen (18) years old; (2) of legal age to form a binding
            contract; and (3) not a person barred from using SideWalks
            Properties under the laws of the United States, your place of
            residence or any other applicable jurisdiction. You are responsible
            for all activities that occur under your Account. You agree that you
            shall monitor your Account to restrict use by minors, and you will
            accept full responsibility for any unauthorized use of SideWalks
            Properties by minors. If you provide any information that is
            untrue, inaccurate, not current or incomplete, SideWalks has the
            right to suspend or terminate your Account and refuse any and all
            current or future use of SideWalks Properties.
          </p>

          <h2 className="text-lg font-medium mt-6">Responsibility for Content</h2>
          <p className="text-sm">
            You acknowledge that all files, materials, data, text, audio,
            video, images or other content (“Content”) is the sole
            responsibility of the party from whom such Content originated. This
            means that you, and not SideWalks, are entirely responsible for all
            Content that you upload, post, e-mail, transmit or otherwise make
            available (“Your Content”), and that you and other users of
            SideWalks Properties, and not SideWalks, are similarly responsible
            for all Content they Make Available through SideWalks Properties.
          </p>

          <h2 className="text-lg font-medium mt-6">Ownership</h2>
          <p className="text-sm">
            SideWalks and its suppliers own all rights, title and interest in
            SideWalks Properties (including but not limited to computer code,
            artwork, designs, themes, and server software). You will not remove,
            alter or obscure any copyright, trademark, service mark or other
            proprietary rights notices incorporated in or accompanying the
            Website, the Services, or SideWalks Properties.
          </p>

          <h3 className="text-base font-medium mt-4">Trademarks</h3>
          <p className="text-sm">
            SideWalks and related graphics, logos, service marks and trade names
            used on or in connection with SideWalks Properties are the
            trademarks of SideWalks and may not be used without permission. Other
            trademarks that appear on SideWalks Properties are the property of
            their respective owners.
          </p>

          <h3 className="text-base font-medium mt-4">License to Your Content</h3>
          <p className="text-sm">
            You grant SideWalks a non-exclusive, perpetual, worldwide, fully
            sublicensable, royalty-free license to use, reproduce, modify,
            adapt, publish, translate, create derivative works from, distribute,
            perform and display any content you post on SideWalks Properties,
            for the purposes of operating and providing SideWalks Properties to
            you and other users.
          </p>

          <h2 className="text-lg font-medium mt-6">Third-Party Services</h2>
          <p className="text-sm">
            SideWalks Properties may contain affiliate links and links to
            third-party websites and applications. When you click a link to a
            third party, you leave SideWalks Properties and are subject to that
            third party’s terms and privacy policies. SideWalks is not
            responsible for third-party sites or services and provides such
            links only as a convenience.
          </p>

          <h2 className="text-lg font-medium mt-6">Product Purchase Terms</h2>

          <h3 className="text-base font-medium mt-4">Products</h3>
          <p className="text-sm">
            Certain Products may be available exclusively online through the
            Website and may have limited quantities. Descriptions and pricing
            are subject to change. Any offer for any Product is void where
            prohibited.
          </p>

          <h3 className="text-base font-medium mt-4">Payments</h3>
          <p className="text-sm">
            You agree to pay charges at the amounts in effect when such charges
            are incurred. You must provide a valid payment method as a condition
            to making payments. SideWalks and its service providers (e.g.,
            payment processors) are authorized to immediately charge your
            account for applicable fees and charges.
          </p>

          <h3 className="text-base font-medium mt-4">Taxes</h3>
          <p className="text-sm">
            If Products or payments are subject to Sales Tax, you are
            responsible for payment of such Sales Tax and any related penalties
            or interest. You may be required to provide receipts or evidence of
            payment upon request.
          </p>

          <h3 className="text-base font-medium mt-4">Orders & Cancellations</h3>
          <p className="text-sm">
            SideWalks may limit or refuse orders. SideWalks reserves the right
            to cancel or reverse any payment due to error (e.g., mistaken
            pricing) and to refuse orders that appear to be for reselling.
          </p>

          <h3 className="text-base font-medium mt-4">Transfer of Risk and Title</h3>
          <p className="text-sm">
            Risk of loss of the Product passes to you on delivery of the
            Product to the carrier. Claims against carriers for damage during
            shipping are your responsibility.
          </p>

          <h3 className="text-base font-medium mt-4">Third Party Providers</h3>
          <p className="text-sm">
            SideWalks uses third parties to fulfill orders; by purchasing you
            agree to third-party terms and privacy policies and consent to the
            sharing of information necessary to complete transactions.
          </p>

          <h3 className="text-base font-medium mt-4">Refund Policy</h3>
          <p className="text-sm">
            ALL SALES ARE FINAL unless otherwise specified. SideWalks reserves
            the right to refuse returns.
          </p>

          <h3 className="text-base font-medium mt-4">Price Adjustments</h3>
          <p className="text-sm">
            SideWalks does not offer price matches or sale adjustments unless
            specifically posted.
          </p>

          <h2 className="text-lg font-medium mt-6">Indemnification</h2>
          <p className="text-sm">
            You agree to indemnify and hold SideWalks, its affiliates,
            officers, employees, agents and licensors harmless from losses,
            costs, liabilities and expenses (including reasonable attorneys’
            fees) arising out of (a) content you post, (b) your use of or
            inability to use SideWalks Properties, (c) your violation of the
            Terms, (d) your violation of any rights of another party, or (e)
            your violation of applicable laws.
          </p>

          <h2 className="text-lg font-medium mt-6">Disclaimer of Warranties and Conditions</h2>
          <p className="text-sm">
            TO THE EXTENT PERMITTED BY APPLICABLE LAW, YOUR USE OF SIDEWALKS
            PROPERTIES IS AT YOUR SOLE RISK, AND SIDEWALKS PROPERTIES ARE
            PROVIDED ON AN “AS IS” AND “AS AVAILABLE” BASIS. SIDEWALKS DISCLAIMS
            ALL WARRANTIES, WHETHER EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF
            MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
            NON-INFRINGEMENT.
          </p>

          <h2 className="text-lg font-medium mt-6">Limitation of Liability</h2>
          <p className="text-sm">
            IN NO EVENT SHALL SIDEWALKS PARTIES BE LIABLE FOR ANY INDIRECT,
            INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES ARISING OUT OF OR IN
            CONNECTION WITH SIDEWALKS PROPERTIES. THE FOREGOING CAP DOES NOT
            APPLY TO LIABILITY FOR DEATH OR PERSONAL INJURY CAUSED BY
            NEGLIGENCE, FRAUD, OR OTHER LIABILITY THAT CANNOT BE EXCLUDED BY LAW.
          </p>

          <h2 className="text-lg font-medium mt-6">Remedies</h2>
          <p className="text-sm">
            If SideWalks becomes aware of possible violations by you of the
            Terms, SideWalks may investigate and refer matters to law
            enforcement. SideWalks may disclose information to comply with laws,
            enforce Terms, respond to claims, or protect rights, property or
            safety.
          </p>

          <h2 className="text-lg font-medium mt-6">Term and Termination</h2>
          <p className="text-sm">
            The Terms commence when you accept them and remain in effect while
            you use SideWalks Properties. SideWalks may suspend or terminate
            Services for non-payment, material breach, legal requirements, or
            for any reason in its discretion.
          </p>

          <h2 className="text-lg font-medium mt-6">International Users</h2>
          <p className="text-sm">
            SideWalks Properties can be accessed from countries around the
            world. Those who access or use SideWalks Properties from other
            countries do so at their own volition and are responsible for
            compliance with local law.
          </p>

          <h2 className="text-lg font-medium mt-6">Dispute Resolution & Arbitration</h2>
          <p className="text-sm">
            Please read the Arbitration Agreement in this Section carefully.
            It requires arbitration for most disputes and limits how you can
            seek relief. You may opt out of arbitration where the Terms permit
            and as specified below.
          </p>

          <h3 className="text-base font-medium mt-4">Applicability of Arbitration Agreement</h3>
          <p className="text-sm">
            Any dispute relating to your access or use of the Website, to any
            products sold through the Website, or to your relationship with
            SideWalks, will be resolved by binding arbitration rather than in
            court, except that you may bring claims in small claims court if
            they qualify, and either party may seek equitable relief for IP
            infringement in court.
          </p>

          <h3 className="text-base font-medium mt-4">Arbitration Rules and Forum</h3>
          <p className="text-sm">
            The Federal Arbitration Act governs interpretation and enforcement
            of the Arbitration Agreement. To begin arbitration you must send a
            letter requesting arbitration and describing your claim to our
            registered agent or email <a href="mailto:atsidewalks@gmail.com" className="text-pink-500 hover:underline">atsidewalks@gmail.com</a>.
            The arbitration will be conducted by JAMS or a comparable forum if
            JAMS is unavailable. If you cannot afford JAMS fees, SideWalks may
            pay them for you as described in the arbitration rules.
          </p>

          <h3 className="text-base font-medium mt-4">Waiver of Jury Trial & Class Relief</h3>
          <p className="text-sm">
            YOU AND SIDEWALKS WAIVE THE RIGHT TO A JURY TRIAL. CLAIMS SUBJECT TO
            ARBITRATION MUST BE BROUGHT INDIVIDUALLY — CLASS OR COLLECTIVE
            ACTIONS ARE WAIVED, EXCEPT IN THE LIMITED CIRCUMSTANCES DESCRIBED
            ABOVE.
          </p>

          <h3 className="text-base font-medium mt-4">30-Day Right to Opt Out</h3>
          <p className="text-sm">
            You may opt out of the Arbitration Agreement within 30 days after
            first becoming subject to it by sending written notice to SideWalks
            at <a href="mailto:atsidewalks@gmail.com" className="text-pink-500 hover:underline">atsidewalks@gmail.com</a>.
          </p>

          <h2 className="text-lg font-medium mt-6">General Provisions</h2>
          <p className="text-sm">
            <strong>Electronic Communications.</strong> Communications between you
            and SideWalks are electronic; you consent to receive communications
            electronically.
          </p>

          <p className="text-sm">
            <strong>Release.</strong> You release SideWalks Parties from claims
            related to your use of SideWalks Properties to the extent permitted
            by law, except for fraud or unconscionable commercial practices by
            SideWalks.
          </p>

          <p className="text-sm">
            <strong>Assignment.</strong> You may not assign or transfer the
            Terms without SideWalks’ prior written consent.
          </p>

          <p className="text-sm">
            <strong>Force Majeure.</strong> SideWalks is not liable for delays or
            failures due to events outside reasonable control (acts of God,
            strikes, war, etc.). SideWalks will notify you and extend
            performance as needed.
          </p>

          <p className="text-sm">
            <strong>Questions, Complaints, Claims.</strong> If you have any
            questions, complaints, or claims, please contact us at{" "}
            <a href="mailto:atsidewalks@gmail.com" className="text-pink-500 hover:underline">atsidewalks@gmail.com</a>.
          </p>

          <p className="text-sm">
            <strong>Exclusive Venue & Governing Law.</strong> Where litigation is
            permitted, both parties agree matters will be litigated in courts
            located in Los Angeles County, California. The Terms are governed by
            California law consistent with the Federal Arbitration Act.
          </p>

          <p className="text-sm">
            <strong>Waiver & Severability.</strong> Failure to enforce a
            provision is not a waiver. If any portion is held invalid, the
            remainder remains in effect.
          </p>

          <p className="text-sm">
            <strong>Export Control.</strong> You may not use, export, import, or
            transfer SideWalks Properties except as authorized by U.S. law and
            other applicable laws.
          </p>

          <p className="text-sm">
            <strong>Consumer Complaints.</strong> If you are a California
            resident, you may report complaints to the Complaint Assistance Unit
            of the Division of Consumer Services of the California Department of
            Consumer Affairs at 400 R Street, Sacramento, CA 95814 or by phone:
            (800) 952-5210.
          </p>

          <p className="text-sm">
            <strong>Entire Agreement.</strong> The Terms are the final, complete
            and exclusive agreement of the parties with respect to the subject
            matter hereof and supersede all prior discussions.
          </p>

          </div>
      </section>
    </Layout>
  );
}
