import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Data Revive Labs",
  description:
    "Terms and conditions for using Data Revive Labs data recovery services in Nairobi, Kenya.",
};

export default function TermsPage() {
  return (
    <main className="bg-background text-foreground min-h-screen flex flex-col">
      {/* HERO */}
      <section className="border-b bg-gradient-to-b from-background via-background to-muted/40 py-16 md:py-20">
        <div className="container mx-auto px-6 max-w-4xl space-y-6">
          <p className="text-xs font-semibold tracking-[0.25em] text-emerald-500 uppercase">
            TERMS &amp; CONDITIONS
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
            Terms for using{" "}
            <span className="text-emerald-500">Data Revive Labs</span>{" "}
            services.
          </h1>
          <p className="text-sm md:text-base text-muted-foreground">
            Please read these terms carefully before using our data recovery
            services. By submitting a device or engaging us for work, you agree
            to these conditions.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6 max-w-4xl space-y-8 text-xs md:text-sm text-muted-foreground">
          <section className="space-y-2">
            <h2 className="text-sm md:text-base font-semibold text-foreground">
              1. Scope of services
            </h2>
            <p>
              Data Revive Labs provides data recovery and related diagnostic
              services for hard drives, solid state drives, RAID/NAS systems,
              phones and other digital storage devices. We will make reasonable
              efforts, using appropriate tools and techniques, to recover data
              from your device as described during the consultation.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-sm md:text-base font-semibold text-foreground">
              2. No guaranteed outcome
            </h2>
            <p>
              Due to the nature of data loss and varying levels of damage, no
              data recovery company can guarantee a 100% success rate. While we
              always aim for the best possible outcome, we cannot promise that
              specific files or all data will be recoverable from any given
              device.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-sm md:text-base font-semibold text-foreground">
              3. Diagnostics and quotations
            </h2>
            <p>
              In most cases we will perform diagnostics to assess the condition
              of your device. After diagnostics we provide a quotation and an
              estimate of the likelihood of recovery. You can then decide
              whether to approve or decline the recovery work.
            </p>
            <p>
              Any diagnostic fees or non-refundable charges will be explained
              before work begins, especially in cases involving serious physical
              damage or specialised parts.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-sm md:text-base font-semibold text-foreground">
              4. Pricing and payment
            </h2>
            <p>
              Pricing is based on factors such as device type, capacity,
              failure type, complexity and urgency. In some logical cases, a
              &quot;no data, no fee&quot; policy may apply to the recovery work
              itself, but this does not automatically cover diagnostics or
              emergency handling unless clearly stated in writing.
            </p>
            <p>
              Payment terms, accepted methods and any deposits will be
              communicated before recovery begins. Full payment is normally due
              before release of the recovered data.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-sm md:text-base font-semibold text-foreground">
              5. Device handling and risk
            </h2>
            <p>
              Data recovery sometimes involves working with already damaged
              media. While we take care to minimise the risk of further damage,
              there is always some level of risk that a device may become
              unstable or unrecoverable during the process. By submitting a
              device, you acknowledge this risk and agree that Data Revive Labs
              is not responsible for pre-existing damage or underlying faults.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-sm md:text-base font-semibold text-foreground">
              6. Confidentiality
            </h2>
            <p>
              We understand that your data may be sensitive or confidential.
              We treat all customer data as private, limiting access to the
              engineers working on your case. We do not use your recovered data
              for marketing, analytics or training, and we do not share it with
              third parties except where required by law.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-sm md:text-base font-semibold text-foreground">
              7. Data retention and disposal
            </h2>
            <p>
              Working copies or images created during the recovery process are
              retained only as long as necessary to complete the case and verify
              the results with you. After that, they are securely wiped in
              accordance with our internal data handling procedures, unless we
              are required to retain them by law or by a written agreement with
              you.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-sm md:text-base font-semibold text-foreground">
              8. Customer responsibilities
            </h2>
            <p>
              You are responsible for ensuring that you have the right to
              submit the device and its data for recovery. Where the device
              belongs to a business or organisation, you confirm that you are
              authorised to act on its behalf. It is also your responsibility to
              provide accurate information about what happened and what data is
              important to you.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-sm md:text-base font-semibold text-foreground">
              9. Limitation of liability
            </h2>
            <p>
              To the fullest extent permitted by law, Data Revive Labs shall not
              be liable for any indirect, consequential or incidental loss
              arising from a data loss incident or from the use or inability to
              use recovered data, including loss of business, revenue, profits
              or reputation. Our total liability in any case is limited to the
              amount paid to us for the specific service relating to that case.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-sm md:text-base font-semibold text-foreground">
              10. Forensic and legal matters
            </h2>
            <p>
              In forensic or legal cases, additional terms may apply, including
              chain-of-custody procedures and documentation requirements. These
              will be agreed with you in writing before work begins.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-sm md:text-base font-semibold text-foreground">
              11. Changes to these terms
            </h2>
            <p>
              We may update these terms from time to time to reflect changes in
              our services or legal requirements. The latest version will always
              be available on this page and will apply to new cases from the
              date it is posted.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-sm md:text-base font-semibold text-foreground">
              12. Contact
            </h2>
            <p>
              If you have any questions about these terms, please contact us
              using the details provided on our contact page before submitting
              your device or approving recovery work.
            </p>
          </section>

          <p className="text-[11px] md:text-xs text-muted-foreground pt-4">
            This information is provided as a general guide and does not replace
            formal legal advice. If you have specific legal questions or
            obligations, please consult a qualified professional.
          </p>
        </div>
      </section>
    </main>
  );
}
