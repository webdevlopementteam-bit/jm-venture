import { useEffect, useState } from "react";
import { X } from "lucide-react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

export default function LeadPopup() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("lead_popup_shown")) return;

    const timer = setTimeout(() => {
      setOpen(true);
      sessionStorage.setItem("lead_popup_shown", "true");
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  const [form, setForm] = useState({
    name: "",
    mobile: "",
    city: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);

    const payload = {
      form_type: "Popup Lead Form",
      from_name: form.name,
      phone: form.mobile,
      city: form.city,
    };

    // UI ko instant update karo
    setOpen(false);

    toast.success("Thank you! We'll contact you shortly.");

    setForm({
      name: "",
      mobile: "",
      city: "",
    });

    // Email background me send hogi
    emailjs
      .send("service_b35yyps", "template_bp3ht4t", payload, "CqaPnjLV5Q0q6hcqK")
      .then(() => {
        console.log("Lead sent successfully");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Lead couldn't be sent. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      {open && (
        <div className="fixed inset-0 z-[99999] bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl w-full max-w-md p-8 relative">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4"
            >
              <X size={20} />
            </button>

            <h2 className="text-3xl font-bold mb-2">Get Free Consultation</h2>

            <p className="text-gray-500 mb-6">
              Fill your details and our expert will call you.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="w-full border rounded-lg p-3"
              />

              <input
                type="tel"
                placeholder="Mobile Number"
                value={form.mobile}
                onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                required
                className="w-full border rounded-lg p-3"
              />

              <input
                type="text"
                placeholder="City"
                value={form.city}
                onChange={(e) => setForm({ ...form, city: e.target.value })}
                required
                className="w-full border rounded-lg p-3"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary text-white py-3 rounded-lg disabled:opacity-60"
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
