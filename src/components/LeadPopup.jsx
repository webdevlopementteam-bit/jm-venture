import { useEffect, useState } from "react";
import { X } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function LeadPopup() {
  const [open, setOpen] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.send(
        "service_b35yyps",
        "template_bp3ht4t",
        {
          form_type: "Popup Lead Form",
          from_name: form.name,
          phone: form.mobile,
          city: form.city,
        },
        "CqaPnjLV5Q0q6hcqK",
      );

      alert("Thank you! We'll contact you shortly.");

      setOpen(false);

      setForm({
        name: "",
        mobile: "",
        city: "",
      });
    } catch (err) {
      console.log(err);
      alert("Something went wrong.");
    }
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
                className="w-full bg-primary text-white py-3 rounded-lg"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
