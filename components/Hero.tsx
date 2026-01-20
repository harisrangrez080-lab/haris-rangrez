
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-64 pb-48 px-6 overflow-hidden min-h-screen flex items-center">
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center relative z-10">
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center space-x-3 py-2 px-5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black tracking-[0.3em] uppercase mb-12 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            <span>Enterprise AI: Hubballi-Dharwad</span>
          </div>
          
          <h1 className="text-7xl md:text-8xl lg:text-[105px] font-black leading-[0.85] mb-14 tracking-tighter">
            <span className="text-slate-gradient block mb-2">AI Automation</span>
            <span className="text-prismatic">Agency</span>
          </h1>
          
          <p className="text-2xl text-slate-500 mb-16 max-w-xl leading-relaxed mx-auto lg:mx-0 font-medium">
            Architecting next-gen <span className="text-slate-900 font-bold underline decoration-blue-500/30 underline-offset-4">Autonomous Systems</span> for regional leaders. We handle the complexity, you claim the efficiency.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-5 sm:space-y-0 sm:space-x-8 justify-center lg:justify-start">
            <a 
              href="tel:8970732147" 
              className="px-16 py-6 bg-slate-900 text-white rounded-[2.5rem] font-black text-lg hover:bg-blue-600 transition-all shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:-translate-y-1.5 active:translate-y-0 flex items-center justify-center group"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Talk to a Strategist
            </a>
          </div>
          
          <div className="mt-24 flex items-center justify-center lg:justify-start space-x-12 opacity-80">
             <div className="flex -space-x-4">
               {[1,2,3,4].map(i => (
                 <div key={i} className={`w-14 h-14 rounded-2xl border-4 border-white bg-slate-100 flex items-center justify-center text-[10px] font-black text-slate-400 shadow-sm hover:translate-y-[-4px] transition-transform`}>AI</div>
               ))}
             </div>
             <div className="text-left">
               <p className="text-xs font-black text-slate-900 uppercase tracking-[0.3em] mb-1">Global Stack</p>
               <p className="text-[10px] text-blue-500 font-bold uppercase tracking-widest">NVIDIA & Anthropic Integration</p>
             </div>
          </div>
        </div>
        
        <div className="relative perspective-2500 hidden lg:block">
          <div className="relative w-full aspect-square flex items-center justify-center preserve-3d animate-float-complex">
            {/* High-Fidelity Glass Console */}
            <div className="relative w-[500px] h-[380px] glass-premium rounded-[4rem] border-white shadow-[0_80px_160px_-40px_rgba(0,0,0,0.1)] preserve-3d rotate-y-[-12deg] rotate-x-[8deg] overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50"></div>
               <div className="p-12 h-full flex flex-col relative z-10">
                  <div className="flex space-x-3 mb-10">
                    <div className="w-3.5 h-3.5 rounded-full bg-slate-200"></div>
                    <div className="w-3.5 h-3.5 rounded-full bg-slate-100"></div>
                    <div className="w-3.5 h-3.5 rounded-full bg-blue-500/20 shadow-[0_0_10px_rgba(59,130,246,0.2)]"></div>
                  </div>
                  <div className="flex-1 space-y-6">
                    <div className="h-2 w-1/2 bg-slate-100 rounded-full"></div>
                    <div className="h-2 w-3/4 bg-slate-50 rounded-full"></div>
                    <div className="h-2 w-2/3 bg-blue-400/20 rounded-full animate-pulse"></div>
                    <div className="h-2 w-full bg-slate-50 rounded-full"></div>
                  </div>
                  <div className="mt-auto flex justify-between items-end">
                    <div className="w-18 h-18 rounded-[2rem] bg-slate-900 flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform">
                       <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    </div>
                    <div className="text-right">
                       <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mb-2">Efficiency Index</div>
                       <div className="text-4xl font-black text-slate-900 tracking-tighter">99.8%</div>
                    </div>
                  </div>
               </div>
            </div>

            {/* Floating Info Pods */}
            <div className="absolute -top-12 -right-12 w-72 p-10 bg-white/90 backdrop-blur-3xl rounded-[3.5rem] shadow-2xl border border-white preserve-3d translate-z-[120px] rotate-y-[15deg]">
               <p className="text-[10px] font-black text-blue-600 uppercase tracking-[0.4em] mb-4">Live Scaling</p>
               <div className="flex items-baseline space-x-3">
                 <p className="text-5xl font-black text-slate-900 tracking-tighter">2.4k</p>
                 <span className="text-xs font-bold text-slate-400">ops/s</span>
               </div>
               <div className="mt-6 h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                 <div className="h-full bg-blue-600 w-[80%]"></div>
               </div>
            </div>

            <div className="absolute -bottom-16 -left-12 w-64 p-8 bg-slate-900 rounded-[3.5rem] shadow-2xl preserve-3d translate-z-[180px] rotate-y-[-15deg]">
               <div className="flex items-center space-x-5">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-white">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <div>
                    <p className="text-white font-black text-2xl leading-none">ACTIVE</p>
                    <p className="text-slate-400 text-[9px] font-bold uppercase tracking-widest mt-1.5">Encrypted Node</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
