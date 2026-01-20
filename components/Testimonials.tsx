
import React from 'react';

const reviews = [
  {
    role: "Manufacturing Owner",
    location: "Hubballi",
    text: "MH AI Agency automated our entire inventory tracking. We saved roughly 15 hours of manual data entry every single week. Highly recommended!",
  },
  {
    role: "Real Estate Developer",
    location: "Hubballi",
    text: "The WhatsApp bot they built for us handles all first-level queries. My sales team only talks to qualified leads now. Absolute game changer.",
  },
  {
    role: "Retail Store Manager",
    location: "Dharwad",
    text: "Friendly local team that understands our business culture. Their 24/7 AI support bot is like having an extra employee who never sleeps.",
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Client Success Stories</h2>
          <p className="text-slate-600 text-lg">See how businesses in our region are evolving with automation.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((rev, i) => (
            <div key={i} className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 flex flex-col hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 hover:-translate-y-1">
              <div className="flex text-blue-600 mb-6 space-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-700 font-medium leading-relaxed mb-8 flex-grow">"{rev.text}"</p>
              <div className="flex items-center space-x-4 pt-6 border-t border-slate-200">
                <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-white">
                  <svg className="w-6 h-6 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-slate-900 font-black tracking-tight leading-tight">{rev.role}</p>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">{rev.location} Branch</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
