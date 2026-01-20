
import React from 'react';

const stats = [
  { 
    label: "Efficiency Reclaimed", 
    value: "40+", 
    unit: "Hrs/Wk",
    icon: "⚡",
    color: "bg-blue-600"
  },
  { 
    label: "Response Velocity", 
    value: "<1", 
    unit: "Min",
    icon: "🚀",
    color: "bg-amber-500"
  },
  { 
    label: "Automation Level", 
    value: "100%", 
    unit: "End-to-End",
    icon: "💎",
    color: "bg-emerald-500"
  },
  { 
    label: "Service Rating", 
    value: "4.9/5", 
    unit: "CSAT Score",
    icon: "🌟",
    color: "bg-purple-600"
  },
];

const Stats: React.FC = () => {
  return (
    <section className="py-32 relative">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((stat, i) => (
            <div key={i} className="group relative">
              <div className="relative glass-premium p-12 rounded-[3.5rem] border-white shadow-[0_20px_40px_-15px_rgba(0,0,0,0.03)] transition-all duration-700 flex flex-col items-center">
                <div className={`w-16 h-16 mb-10 rounded-2xl ${stat.color} flex items-center justify-center text-3xl shadow-lg transform group-hover:-translate-y-2 transition-transform duration-500`}>
                  {stat.icon}
                </div>
                
                <div className="text-center">
                  <p className="text-6xl font-black text-slate-900 mb-2 tracking-tighter">
                    {stat.value}
                  </p>
                  <p className="text-blue-600 text-[10px] font-black uppercase tracking-[0.4em] mb-8">{stat.unit}</p>
                  
                  <div className={`h-1.5 w-10 ${stat.color} rounded-full mx-auto opacity-20 group-hover:w-20 group-hover:opacity-100 transition-all duration-700`}></div>
                  
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mt-8 leading-tight max-w-[140px]">
                    {stat.label}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
