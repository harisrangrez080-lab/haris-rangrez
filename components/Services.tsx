
import React from 'react';

const services = [
  {
    title: "Enterprise AI Chatbots",
    description: "Intelligent support and sales agents deployed in Kannada, Hindi, and English. Trained on your specific company data.",
    metric: "92% Resolution",
    stack: ["RAG Architecture", "LangGraph"],
    icon: "🤖",
    accent: "bg-blue-600"
  },
  {
    title: "WhatsApp Flow AI",
    description: "The definitive WhatsApp business ecosystem. Automated ordering, CRM syncing, and intelligent transaction logic.",
    metric: "4.5x Growth",
    stack: ["Meta Cloud API", "Intercom"],
    icon: "💬",
    accent: "bg-emerald-500"
  },
  {
    title: "Workflow Autopilot",
    description: "Connecting legacy systems with autonomous neural logic. Eliminating manual data entry at the core.",
    metric: "20hrs/Wk Saved",
    stack: ["Make.ai", "Python Cloud"],
    icon: "⚙️",
    accent: "bg-purple-600"
  },
  {
    title: "AI Lead Generation",
    description: "Intelligent web mining that identifies high-intent signals across the digital landscape for your sales team.",
    metric: "3x Pipeline Speed",
    stack: ["Claude 3.5", "Custom Scrapers"],
    icon: "🎯",
    accent: "bg-orange-500"
  },
  {
    title: "Vision AI Capture",
    description: "Transforming chaotic physical documents into structured enterprise data with 99.9% precision.",
    metric: "Zero Data Error",
    stack: ["Vision LLM", "Azure OCR"],
    icon: "📄",
    accent: "bg-cyan-500"
  },
  {
    title: "Growth Appointment AI",
    description: "Voice and text agents that qualify leads and schedule high-ticket meetings on a 24/7 autonomous loop.",
    metric: "80% Show Rate",
    stack: ["Vapi", "Retell AI"],
    icon: "📅",
    accent: "bg-indigo-600"
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-40 px-6 relative bg-slate-50/50">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-4xl mb-32">
          <span className="text-blue-600 font-black tracking-[0.5em] uppercase text-[11px] mb-8 block">Deployment Capabilities</span>
          <h2 className="text-6xl md:text-8xl font-black mb-10 leading-[0.85] tracking-tighter text-slate-900">
            Professional <br/>
            <span className="text-prismatic">AI Infrastructure</span>
          </h2>
          <p className="text-slate-500 text-2xl leading-relaxed font-medium max-w-2xl">
            We architect high-fidelity <span className="text-slate-900 font-bold">Autonomous Intelligence</span> designed specifically for the Hubli-Dharwad enterprise landscape.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, idx) => (
            <div key={idx} className="group relative">
              <div className="h-full glass-premium p-14 rounded-[3.5rem] border-white flex flex-col transition-all duration-700 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] hover:-translate-y-3 relative overflow-hidden">
                <div className={`w-20 h-20 ${service.accent} rounded-3xl flex items-center justify-center text-4xl shadow-lg mb-12 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border-4 border-white/20`}>
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-black mb-4 text-slate-900 tracking-tight">{service.title}</h3>
                <p className="text-blue-600 text-[11px] font-black uppercase tracking-[0.3em] mb-8 flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                  {service.metric}
                </p>
                
                <p className="text-slate-500 text-lg leading-relaxed mb-12 flex-grow font-medium">
                  {service.description}
                </p>
                
                <div className="border-t border-slate-100 pt-10">
                   <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.4em] mb-5">Tech Foundation</p>
                   <div className="flex flex-wrap gap-3">
                      {service.stack.map(s => (
                        <span key={s} className="px-4 py-1.5 bg-slate-100 rounded-2xl text-[10px] font-black text-slate-600 border border-slate-200">{s}</span>
                      ))}
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
