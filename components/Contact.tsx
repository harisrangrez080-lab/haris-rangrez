
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('https://formsubmit.co/ajax/harisrangrez080@gmail.com', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json' 
        },
        body: JSON.stringify({
          _subject: `🚨 [INQUIRY] NEW MESSAGE from ${data.name}`,
          ...data,
          _captcha: "false"
        })
      });

      if (response.ok) {
        alert("Message Sent! Our technical team has been notified. We will get back to you within 2 hours.");
        form.reset();
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      alert("Submission prioritizing. If you don't receive a reply in 60 minutes, please use the direct WhatsApp link.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
          <div className="grid md:grid-cols-2">
            <div className="p-12 md:p-16 bg-blue-600 text-white">
              <h2 className="text-4xl font-bold mb-6">Let's Talk Automation</h2>
              <p className="text-blue-100 text-lg mb-12">
                Ready to transform your business? Send us a message or call us directly. We usually respond within 2 hours.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold">Phone</p>
                    <a href="tel:8970732147" className="text-2xl font-black hover:text-blue-200 transition-colors tracking-tight">89707 321 47</a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold">Location</p>
                    <p className="text-xl">Hubli-Dharwad, Karnataka</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-12 md:p-16">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                  <input 
                    name="name"
                    type="text" 
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                  <input 
                    name="email"
                    type="email" 
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="name@business.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Business Type</label>
                  <input 
                    name="business_type"
                    type="text" 
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="e.g. Real Estate"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                  <textarea 
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="Tell us about your automation needs..."
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-100 disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="mt-20 p-12 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl text-center text-white shadow-2xl">
          <h2 className="text-3xl md:text-5xl font-black mb-4">Talk to an Expert Now</h2>
          <a href="tel:8970732147" className="text-4xl md:text-6xl font-black hover:text-blue-200 transition-colors">89707 321 47</a>
          <p className="mt-4 text-blue-100 font-medium">Click the number to call directly for a 15-min discovery call</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
