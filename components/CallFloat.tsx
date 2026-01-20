
import React from 'react';

const CallFloat: React.FC = () => {
  return (
    <a 
      href="tel:8970732147" 
      className="fixed bottom-24 left-8 z-[9997] w-14 h-14 bg-blue-600 rounded-full shadow-2xl flex items-center justify-center text-white hover:scale-110 transition-transform active:scale-95 group border-2 border-white"
      title="Call Us Now"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
      <span className="absolute left-16 bg-slate-900 text-white text-xs font-bold py-1 px-3 rounded shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Call Expert Now
      </span>
    </a>
  );
};

export default CallFloat;
