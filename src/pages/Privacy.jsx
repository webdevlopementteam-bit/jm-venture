import React from "react";

const Privacy = () => {
  const sections = [
    {
      title: "1. Information We Collect",
      content: (
        <>
          <h3 className="text-lg font-semibold text-[#863953] mb-3">
            Personal Information
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Full Name</li>
            <li>Phone Number</li>
            <li>Email Address</li>
            <li>City and State</li>
            <li>Property Preferences</li>
            <li>Investment Budget</li>
            <li>Any information voluntarily provided by you</li>
          </ul>

          <h3 className="text-lg font-semibold text-[#863953] mt-6 mb-3">
            Automatically Collected Information
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>IP Address</li>
            <li>Browser Type</li>
            <li>Device Information</li>
            <li>Operating System</li>
            <li>Pages Visited</li>
            <li>Date and Time of Visit</li>
            <li>Referring Website</li>
          </ul>
        </>
      ),
    },
    {
      title: "2. How We Use Your Information",
      content: (
        <ul className="list-disc pl-6 space-y-2">
          <li>To respond to inquiries and provide requested information</li>
          <li>To assist with property-related services and consultations</li>
          <li>
            To communicate project updates, offers, and promotional information
          </li>
          <li>To improve website functionality and user experience</li>
          <li>To analyze website traffic and performance</li>
          <li>To comply with legal obligations</li>
          <li>To prevent fraud and enhance website security</li>
        </ul>
      ),
    },
    {
      title: "3. Sharing of Information",
      content: (
        <>
          <p className="mb-4">
            JM Ventures does not sell, rent, or trade your personal information
            to third parties.
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              Real estate developers and project partners when necessary to
              fulfill your request
            </li>
            <li>
              Service providers assisting with website operations, marketing,
              CRM, or analytics
            </li>
            <li>
              Government authorities or legal bodies when required by applicable
              law
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "4. Cookies and Tracking Technologies",
      content: (
        <>
          <p className="mb-4">
            Our website may use cookies and similar technologies to:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Improve website performance</li>
            <li>Remember user preferences</li>
            <li>Analyze visitor behavior</li>
            <li>Enhance marketing effectiveness</li>
          </ul>

          <p className="mt-4">
            You may choose to disable cookies through your browser settings.
            However, some website features may not function properly if cookies
            are disabled.
          </p>
        </>
      ),
    },
    {
      title: "5. Data Security",
      content: (
        <p>
          We implement appropriate technical and organizational measures to
          protect your personal information against unauthorized access,
          disclosure, alteration, or destruction. While we strive to protect
          your data, no method of internet transmission or electronic storage is
          completely secure.
        </p>
      ),
    },
    {
      title: "6. Third-Party Links",
      content: (
        <p>
          Our website may contain links to external websites. We are not
          responsible for the privacy practices, content, or policies of
          third-party websites. Users are encouraged to review the privacy
          policies of any external sites they visit.
        </p>
      ),
    },
    {
      title: "7. Data Retention",
      content: (
        <p>
          We retain personal information only for as long as necessary to
          fulfill the purposes outlined in this Privacy Policy, comply with
          legal obligations, resolve disputes, and enforce agreements.
        </p>
      ),
    },
    {
      title: "8. Your Rights",
      content: (
        <>
          <p className="mb-4">
            Subject to applicable laws, you may have the right to:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Access your personal information</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your personal information</li>
            <li>Withdraw consent where applicable</li>
            <li>Opt out of marketing communications</li>
          </ul>

          <p className="mt-4">
            To exercise these rights, please contact us using the details
            provided below.
          </p>
        </>
      ),
    },
    {
      title: "9. Marketing Communications",
      content: (
        <p>
          By submitting your information through our website, forms,
          advertisements, or lead generation campaigns, you consent to receive
          calls, emails, SMS messages, WhatsApp messages, and other
          communications regarding real estate projects, investment
          opportunities, and related services. You may opt out of marketing
          communications at any time by contacting us.
        </p>
      ),
    },
    {
      title: "10. Children's Privacy",
      content: (
        <p>
          Our services are intended for individuals who are at least 18 years of
          age. We do not knowingly collect personal information from children.
        </p>
      ),
    },
    {
      title: "11. Changes to This Privacy Policy",
      content: (
        <p>
          JM Ventures reserves the right to update this Privacy Policy at any
          time. Any changes will be posted on this page.
        </p>
      ),
    },
  ];

  return (
    <div className="bg-white/80 min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#606061]/70 to-[#863953]/70 py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Privacy Policy
          </h1>

          <p className="text-slate-300 max-w-3xl mx-auto text-lg">
            At JM Ventures, we are committed to protecting your privacy and
            ensuring that your personal information is handled securely and
            responsibly.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white/80 rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
            <div className="p-8 md:p-14">
              <p className="text-gray-700 leading-8 mb-12">
                This Privacy Policy explains how we collect, use, disclose, and
                safeguard your information when you visit our website or
                interact with our services. JM Ventures provides real estate
                consultancy, investment advisory, and related services.
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

              {/* Contact Section */}
              <div className=" rounded-3xl mt-5">
                <h2 className="text-3xl font-bold text-black mb-6">
                  Contact Us
                </h2>

                <p className="text-black mb-8">
                  If you have any questions regarding this Privacy Policy or our
                  data handling practices, please contact us:
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
                  understood, and agreed to this Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;