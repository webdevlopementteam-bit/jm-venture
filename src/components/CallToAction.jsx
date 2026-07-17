import { Phone } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";

const PHONE = "+919899053053";
const WHATSAPP = "919899053053";

const CallToAction = () => {
  // Google Ads Conversion Tracking
  const gtag_report_conversion = (url) => {
    const callback = () => {
      if (typeof url !== "undefined") {
        window.location = url;
      }
    };

    if (window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-17552957890/-hebCJvm79EcEMLD87FB",
        value: 1.0,
        currency: "INR",
        event_callback: callback,
      });

      return false;
    } else {
      // Agar gtag load na hua ho to direct redirect
      window.location.href = url;
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-3">
      {/* WhatsApp */}
      <button
        onClick={() =>
          gtag_report_conversion(`https://wa.me/${WHATSAPP}`)
        }
        className="group flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl hover:scale-110 transition-all duration-300"
      >
        <BsWhatsapp size={28} />
      </button>

      {/* Call */}
      <a
        href={`tel:${PHONE}`}
        className="group flex items-center justify-center w-14 h-14 rounded-full bg-primary text-white shadow-2xl hover:scale-110 transition-all duration-300"
      >
        <Phone size={24} />
      </a>
    </div>
  );
};

export default CallToAction;