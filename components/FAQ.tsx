
import React, { useState } from 'react';

const faqs = [
  {
    q: "Is AI automation expensive for small businesses?",
    a: "Not at all. We build bespoke solutions that scale with you. Many of our clients see an ROI within the first 3 months through saved labor costs and increased lead conversion."
  },
  {
    q: "How long does it take to implement?",
    a: "A standard AI Chatbot or WhatsApp integration typically takes 7-14 days from audit to launch."
  },
  {
    q: "Do I need to be a tech expert to use these tools?",
    a: "No. We handle all the 'heavy lifting'. You'll receive a simple dashboard, and our AI agents manage themselves 24/7."
  },
  {
    q: "Can the AI understand local languages like Kannada?",
    a: "Yes! Our custom-trained models can handle multi-lingual interactions, including Kannada, Hindi, and English, to better serve the local Hubli-Dharwad market."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-slate-600">Everything you need to know about starting your AI journey.</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl border border-slate-200 overflow-hidden transition-all shadow-sm hover:shadow-md">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 text-left flex justify-between items-center group"
              >
                <span className="font-bold text-slate-800 group-hover:text-blue-600 transition-colors">{faq.q}</span>
                <span className={`text-blue-600 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-6 text-slate-600 animate-in fade-in slide-in-from-top-2">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
