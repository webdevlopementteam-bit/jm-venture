import { Phone, MessageCircle } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";


const PHONE = "+919899053053";
const WHATSAPP = "919899053053";

const CallToAction = () => {
  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-3">
      {/* WhatsApp */}
      <a
        href={`https://wa.me/${WHATSAPP}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl hover:scale-110 transition-all duration-300"
      >
        <BsWhatsapp size={28} />
      </a>

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