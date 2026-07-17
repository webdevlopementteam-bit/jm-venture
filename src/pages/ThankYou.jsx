import { useEffect } from "react";

const ThankYou = () => {
  useEffect(() => {
    // Handles the real lead flow: Contact/LeadPopup redirect here via
    // client-side navigation (no full page load), so server.js's injected
    // <script> for this route (which only runs on a direct/hard page load)
    // never executes — this effect is what actually fires the conversion.
    // The __conversionsFired guard skips it on a direct load of /thank-you,
    // where that injected script already fired it.
    if (window.gtag && !window.__conversionsFired?.["/thank-you"]) {
      window.gtag("event", "conversion", {
        send_to: "AW-17552957890/6FFiCIGQws8cEMLD87FB",
      });
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
      <div className="bg-white shadow-xl rounded-lg p-10 text-center max-w-lg">
        <h1 className="text-4xl font-bold text-green-600 mb-4">
          Thank You!
        </h1>

        <p className="text-gray-600 mb-6">
          Your inquiry has been submitted successfully.
          Our team will contact you shortly.
        </p>

        <a
          href="/"
          className="inline-block bg-primary text-white px-6 py-3 rounded-md"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default ThankYou;