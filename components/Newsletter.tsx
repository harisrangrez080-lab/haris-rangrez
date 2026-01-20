
import React, { useState } from 'react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(email) setDone(true);
  };

  return (
    <section className="py-24 px-6 bg-blue-600">
      <div className="max-w-4xl mx-auto text-center text-white">
        {!done ? (
          <>
            <h2 className="text-4xl font-extrabold mb-4">Get Our Free AI Growth Guide</h2>
            <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
              Join 200+ Hubli-Dharwad entrepreneurs. We send weekly tips on how to use AI to save 10+ hours a week.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
              <input 
                type="email" 
                placeholder="Enter your email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-6 py-4 rounded-xl text-slate-900 w-full sm:max-w-sm outline-none focus:ring-4 focus:ring-blue-400 transition-all"
              />
              <button 
                type="submit" 
                className="px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all shadow-xl"
              >
                Send Me The Guide
              </button>
            </form>
          </>
        ) : (
          <div className="animate-in zoom-in duration-300">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-4xl font-extrabold mb-2">Check Your Inbox!</h2>
            <p className="text-blue-100">The guide is on its way. Welcome to the MH AI community.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Newsletter;
