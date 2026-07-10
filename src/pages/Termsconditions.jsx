import React from "react";

const Termsconditions = () => {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: (
        <>
          <p>
            These Terms and Conditions ("Terms") govern your access to and use of the website www.jm-ventures.in ("Website"), and any advisory, investment, or communication services offered by JM Ventures ("JM Ventures", "we", "us", or "our"). By accessing the Website, submitting an enquiry, or engaging with our services, you agree to be bound by these Terms. If you do not agree, please discontinue use of the Website immediately.
          </p>

          <p className="mt-4">
            These Terms should be read together with our Privacy Policy, which forms an integral part of this agreement.
          </p>
        </>
      ),
    },

    {
      title: "2. About JM Ventures",
      content: (
        <p>
          JM Ventures is a boutique real estate development and investment advisory firm. We advise families, Non-Resident Indians (NRIs), and institutional capital on real estate opportunities across regions including Delhi NCR and Dholera, Gujarat. We are not, in all cases, the developer of record for every project referenced on this Website; where we act as an advisor, channel partner, or intermediary, project execution, construction, and possession commitments rest with the respective developer or landowning entity, as applicable.
        </p>
      ),
    },

    {
      title: "3. Eligibility",
      content: (
        <>
          <p className="mb-4">
            By using this Website or our services, you confirm that you:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Are at least 18 years of age;</li>
            <li>
              Are legally competent to enter into a binding contract under the Indian Contract Act, 1872;
            </li>
            <li>
              Are not otherwise restricted from availing of such services under applicable law.
            </li>
          </ul>
        </>
      ),
    },

    {
      title: "4. Services Offered",
      content: (
        <>
          <p className="mb-4">JM Ventures provides, among other things:</p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Real estate investment advisory and consultation.</li>
            <li>
              Due diligence, structuring, and underwriting support for land and plotted developments.
            </li>
            <li>
              Facilitation of site visits and introductions to developers/landowning entities.
            </li>
            <li>
              Portfolio guidance for families, NRIs, and institutional investors.
            </li>
            <li>
              General information regarding projects and regions we cover, including Delhi NCR and Dholera.
            </li>
            <li>
              Nothing on this Website constitutes a binding offer for sale of any property or investment product. Any transaction is subject to a separate, signed agreement between you and the relevant selling/developing entity.
            </li>
          </ul>
        </>
      ),
    },

    {
      title: "5. Use of the Website",
      content: (
        <>
          <p className="mb-4">You agree not to:</p>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              Use the Website for any unlawful, fraudulent, or misleading purpose.
            </li>
            <li>
              Scrape, copy, republish, or commercially exploit Website content without our prior written consent.
            </li>
            <li>
              Attempt unauthorized access to our systems, data, or accounts.
            </li>
            <li>
              Transmit spam, malware, or unsolicited communications through or via the Website;
Impersonate any person or entity in your dealings with us.
            </li>
          </ul>

          <p className="mt-4">
            We reserve the right to restrict or terminate access to the Website
            for any breach of these Terms.
          </p>
        </>
      ),
    },

    {
      title: "6. Accuracy of Project & Investment Information",
      content: (
        <p>
          Details relating to projects, land parcels, pricing, layouts, timelines, and regulatory approvals (including RERA status, where applicable) are provided for general informational purposes and are subject to change without notice. JM Ventures does not guarantee the completeness or continuing accuracy of such information. Images, renders, and illustrative material are conceptual and may not reflect final outcomes. We strongly encourage independent legal, financial, and technical due diligence before making any investment decision.
        </p>
      ),
    },

    {
      title: "7. Communication Consent (Calls, SMS, WhatsApp & RCS)",
      content: (
        <>
          <p>
            By submitting your contact details on this Website, via WhatsApp, via Rich Communication Services (RCS), or through any other channel, you expressly consent to being contacted by JM Ventures or its authorised representatives for informational and promotional purposes, including via:
          </p>

          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Phone calls</li>
            <li>SMS</li>
            <li>WhatsApp messages</li>
            <li>Rich Communication Services (RCS) messages</li>
            <li>Email</li>
          </ul>

          <p className="mt-4">
            This consent applies even if your mobile number is registered under the National Customer Preference Register (NCPR) / Do Not Disturb (DND) list, to the extent permitted by applicable law, since such communication is at your explicit request and relates to services you have sought.
          </p>

          <p className="mt-4">
           You may opt out of receiving further messages at any time by replying STOP to any SMS/RCS message, or by writing to us at info@jm-ventures.in. Please note that opting out may limit our ability to share time-sensitive project updates or respond to your enquiries.
          </p>

          <p className="mt-4">
           Message and data rates may apply depending on your telecom operator and plan. JM Ventures is not responsible for charges levied by your carrier.
          </p>
        </>
      ),
    },

    {
      title: "8. Intellectual Property",
      content: (
        <p>
          All content on this Website — including text, graphics, logos, layouts, and images — is the property of JM Ventures or its licensors and is protected under applicable Indian intellectual property law. No content may be reproduced, distributed, or used commercially without our prior written permission.
        </p>
      ),
    },

    {
      title: "9. Third-Party Links & Developer Content",
      content: (
        <p>
          The Website may reference or link to third-party developers, landowning entities, or external resources. JM Ventures does not control and is not responsible for the accuracy of third-party content or the fulfilment of third-party commitments. We recommend reviewing the terms and policies of any third party you engage with directly.
        </p>
      ),
    },

    {
      title: "10. Disclaimer of Warranties",
      content: (
        <p>
          The Website and its content are provided on an "as is" and "as available" basis, without warranties of any kind, express or implied, including as to accuracy, completeness, merchantability, or fitness for a particular purpose. JM Ventures does not warrant uninterrupted or error-free access to the Website.
        </p>
      ),
    },

    {
      title: "11. Limitation of Liability",
      content: (
        <p>
          To the maximum extent permitted by law, JM Ventures, its partners, employees, and representatives shall not be liable for any direct, indirect, incidental, or consequential loss arising from: (a) use of, or inability to use, the Website; (b) investment or purchase decisions made based on Website content; or (c) acts, delays, or defaults of third-party developers or landowning entities. Our aggregate liability in connection with any specific engagement shall not exceed the advisory fee, if any, paid by you to JM Ventures for that engagement.
        </p>
      ),
    },

    {
      title: "12. Indemnification",
      content: (
        <p>
          You agree to indemnify and hold harmless JM Ventures, its partners, employees, and representatives from any claims, damages, or expenses (including reasonable legal fees) arising from your breach of these Terms or misuse of the Website or our services.
        </p>
      ),
    },

    {
      title: "13. Governing Law & Dispute Resolution",
      content: (
        <p>
          These Terms are governed by the laws of India. Any dispute arising out of or relating to these Terms shall first be addressed through good-faith discussion within 30 days of written notice. If unresolved, the dispute shall be subject to the exclusive jurisdiction of the courts at [City, e.g., New Delhi], or resolved by arbitration under the Arbitration and Conciliation Act, 1996, at the parties' election.
        </p>
      ),
    },

    {
      title: "14. Amendments",
      content: (
        <p>
          JM Ventures may revise these Terms from time to time. Changes take effect upon posting to this page with an updated "Last Updated" date. Continued use of the Website after changes are posted constitutes acceptance of the revised Terms.
        </p>
      ),
    },

    {
      title: "15. Severability",
      content: (
        <p>
          If any provision of these Terms is held invalid or unenforceable, that provision shall be modified to the minimum extent necessary, and the remaining provisions shall continue in full force.
        </p>
      ),
    },
  ];

  return (
    <div className="bg-white/80 min-h-screen">
      <section className="bg-gradient-to-b from-[#606061]/70 to-[#863953]/70 py-32">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Terms & Conditions
          </h1>

          <p className="text-white/90">
            Last Updated: July 03, 2026
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white/80 rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
            <div className="p-8 md:p-14">
              <p className="text-gray-700 leading-8 mb-12">
                These Terms & Conditions govern your access to and use of the
                JM Ventures website and services, including our real estate
                advisory, investment consultation, and related offerings.
              </p>

              <div className="space-y-12">
                {sections.map((section, index) => (
                  <div
                    key={index}
                    className="border-b border-slate-200 pb-10 last:border-0 last:pb-0"
                  >
                    <h2 className="text-2xl md:text-3xl font-bold text-[#0D203D] mb-6">
                      {section.title}
                    </h2>

                    <div className="text-gray-700 leading-8">
                      {section.content}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <h2 className="text-3xl font-bold text-black mb-6">
                  Contact Us
                </h2>

                <p className="text-black mb-8">
                  For questions about these Terms, or to withdraw communication
                  consent, please contact:
                </p>

                <div className="space-y-4 text-black">
                  <p className="text-xl font-semibold text-[#863953]">
                    JM Ventures
                  </p>

                  <p>🌐 www.jm-ventures.in</p>
                  <p>📧 info@jm-ventures.in</p>
                  <p>📞 +91 98990 53053</p>
                </div>
              </div>

              <div className="mt-10 text-center border-t border-slate-200 pt-8">
                <p className="text-gray-600">
                  By using our website, you acknowledge that you have read,
                  understood, and agreed to these Terms & Conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Termsconditions;
