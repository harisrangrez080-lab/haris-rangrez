
import React from 'react';

const plans = [
  {
    name: "Starter",
    price: "Custom",
    period: "Per Project",
    features: ["1 AI Chatbot", "Basic CRM Integration", "Email Support", "Monthly Reports"],
    isPopular: false,
    cta: "Enquire Now"
  },
  {
    name: "Business Pro",
    price: "Custom",
    period: "Scalable",
    features: ["3 Advanced AI Agents", "Full Workflow Automation", "WhatsApp AI Integration", "24/7 Priority Support", "Live Performance Dashboard"],
    isPopular: true,
    cta: "Get a Quote"
  }
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Pricing Tailored for Your Needs</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            We provide bespoke AI solutions. Contact us for a personalized quote based on your business requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {plans.map((plan, idx) => (
            <div 
              key={idx} 
              className={`relative p-10 rounded-3xl border-2 transition-all flex flex-col ${
                plan.isPopular 
                  ? 'border-blue-600 shadow-2xl scale-105 z-10' 
                  : 'border-slate-100 hover:border-slate-200'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-8 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase">
                  Most Recommended
                </div>
              )}
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
              <div className="mb-8">
                <span className="text-4xl font-black text-slate-900">{plan.price}</span>
                <span className="text-slate-500 font-medium ml-2">({plan.period})</span>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center text-slate-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-3" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <a 
                href="#contact" 
                className={`w-full py-4 rounded-xl text-center font-bold transition-all ${
                  plan.isPopular 
                    ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-200' 
                    : 'bg-slate-900 text-white hover:bg-slate-800'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
