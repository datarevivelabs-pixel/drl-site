import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Data Revive Labs",
  description:
    "Read the privacy policy for Data Revive Labs. How we handle your personal information, case details and recovered data.",
};

export default function PrivacyPage() {
  return (
    <main className="bg-background text-foreground min-h-screen flex flex-col">
      {/* HERO */}
      <section className="border-b bg-gradient-to-b from-background via-background to-muted/40 py-16 md:py-20">
        <div className="container mx-auto px-6 max-w-4xl space-y-6">
          <p className="text-xs font-semibold tracking-[0.25em] text-emerald-500 uppercase">
            PRIVACY POLICY
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
            How Data Revive Labs handles{" "}
            <span className="text-emerald-500">your data and privacy.</span>
          </h1>
          <p className="text-sm md:text-base text-muted-foreground">
            This page explains what information we collect, how we use it and
            how we protect the devices and data you entrust to us.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6 max-w-4xl space-y-8 text-xs md:text-sm text-muted-foreground">
          <section className="space-y-2">
            <h2 className="text-sm md:text-base font-semibold text-foreground">
              1. Who we are
            </h2>
            <p>
              Data Revive Labs is a data recovery service based in Nairobi,
              Kenya. We work with individuals, businesses and organisations to
              recover data from hard drives, solid state drives, RAID/NAS
              systems, phones and other digital media.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-sm md:text-base font-semibold text-foreground">
              2. Information we collect
            </h2>
            <p>
              We collect only the information needed to handle your case and to
              communicate with you, for example:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Your name and contact details (phone, email, company name)</li>
              <li>
                Basic device details (type of drive or phone, capacity, model)
              </li>
              <li>
                A short description of what happened and what data is important
                to you
              </li>
              <li>
                In some cases, billing details necessary to issue an invoice
              </li>
            </ul>
            <p>
              We do not use your recovered data itself for analytics, training
              or marketing. The contents of your files remain private to you.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-sm md:text-base font-semibold text-foreground">
              3. How we use your information
            </h2>
            <p>We use the information you provide in order to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Evaluate your case and advise you on possible outcomes</li>
              <li>Contact you with quotes, updates and final results</li>
              <li>Prepare invoices and receipts where work is carried out</li>
              <li>
                Improve our services in general (for example, understanding
                common failure patterns)
              </li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-sm md:text-base font-semibold text-foreground">
              4. Recovered data and confidentiality
            </h2>
            <p>
              We treat all media and recovered data as confidential. Only the
              engineers assigned to your case access your device and its
              contents during the recovery process.
            </p>
            <p>
              Working copies or images of your media that we create in our lab
              are stored securely and wiped on a defined schedule after the case
              is closed, unless we are required by law to retain them for a
              longer period (for example, in certain forensic cases).
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-sm md:text-base font-semibold text-foreground">
              5. Data retention
            </h2>
            <p>
              We keep your contact and billing information for as long as
              necessary to manage our relationship with you and comply with
              legal and tax obligations. Recovered data stored on our systems is
              kept only as long as needed to verify the results with you and to
              complete the handover.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-sm md:text-base font-semibold text-foreground">
              6. Sharing of information
            </h2>
            <p>
              We do not sell your personal data or recovered data to any third
              party. We may share limited information with:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Service providers that help us operate our business (for
                example, email or invoicing tools)
              </li>
              <li>
                Law enforcement or regulatory authorities, if required by the
                laws of Kenya or a valid legal process
              </li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-sm md:text-base font-semibold text-foreground">
              7. Security
            </h2>
            <p>
              We take reasonable technical and organisational measures to keep
              your information and recovered data secure, including restricted
              access in the lab, use of dedicated recovery systems and secure
              wiping of working copies when a case is closed.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-sm md:text-base font-semibold text-foreground">
              8. Your rights
            </h2>
            <p>
              Depending on local law, you may have rights to access, correct or
              request deletion of the personal information we hold about you.
              You can contact us using the details on the contact page to make
              such a request, and we will respond within a reasonable time.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-sm md:text-base font-semibold text-foreground">
              9. Updates to this policy
            </h2>
            <p>
              We may update this privacy policy from time to time to reflect
              changes in our services or legal requirements. The latest version
              will always be available on this page.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-sm md:text-base font-semibold text-foreground">
              10. How to contact us
            </h2>
            <p>
              If you have any questions about this policy or how we handle your
              information, please contact us using the details on our contact
              page.
            </p>
          </section>

          <p className="text-[11px] md:text-xs text-muted-foreground pt-4">
            This page is provided for general information and does not constitute
            legal advice. If you have specific legal questions, you should
            consult a qualified professional.
          </p>
        </div>
      </section>
    </main>
  );
}
