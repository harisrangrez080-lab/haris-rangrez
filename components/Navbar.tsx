
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-8 w-full z-50 px-8">
      <div className="max-w-7xl mx-auto glass-premium rounded-3xl px-8 py-4 flex justify-between items-center border border-white/50">
        <div className="flex items-center space-x-3 group cursor-pointer">
          <div className="bg-slate-900 text-white w-9 h-9 rounded-xl flex items-center justify-center font-black text-lg shadow-lg">MH</div>
          <span className="font-black text-xl tracking-tighter text-slate-900">AI <span className="text-blue-600 italic">AGENCY</span></span>
        </div>
        
        <div className="hidden lg:flex items-center space-x-12 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
          <a href="#services" className="hover:text-slate-900 transition-colors">Services</a>
          <a href="#workflow" className="hover:text-slate-900 transition-colors">Workflow</a>
          <a href="#pricing" className="hover:text-slate-900 transition-colors">Pricing</a>
          <a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a>
        </div>

        <div className="flex items-center space-x-6">
          <a 
            href="tel:8970732147" 
            className="hidden sm:flex bg-slate-900 text-white px-8 py-3.5 rounded-2xl hover:bg-blue-600 transition-all shadow-lg font-black text-[10px] uppercase tracking-widest"
          >
            Call Us
          </a>
          <button className="lg:hidden text-slate-900">
             <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;