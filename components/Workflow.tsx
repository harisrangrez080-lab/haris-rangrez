
import React from 'react';

const steps = [
  {
    num: "1",
    title: "Audit",
    description: "We analyze your current manual tasks to find where AI can save you the most time and money."
  },
  {
    num: "2",
    title: "Build",
    description: "Our engineers develop custom AI agents and connect your business systems securely."
  },
  {
    num: "3",
    title: "Launch",
    description: "We deploy the automation, monitor 24/7, and optimize to ensure you get the best ROI."
  }
];

const Workflow: React.FC = () => {
  return (
    <section id="workflow" className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4">How We Work</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            A simple 3-step process to take your business from manual to fully automated.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-blue-100 -translate-y-12"></div>
          {steps.map((step, idx) => (
            <div key={idx} className="relative text-center group">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-8 relative z-10 shadow-xl shadow-blue-200 group-hover:scale-110 transition-transform">
                {step.num}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workflow;
