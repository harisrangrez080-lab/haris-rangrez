
import React, { useState } from 'react';
import { parseUnstructuredData } from '../services/geminiService';

const AuditSection: React.FC = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSmartFilling, setIsSmartFilling] = useState(false);
  const [smartFillText, setSmartFillText] = useState('');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    title: '',
    industry: 'Select',
    bottleneck: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSmartFill = async () => {
    if (!smartFillText.trim()) return;
    setIsSmartFilling(true);
    const extracted = await parseUnstructuredData(smartFillText);
    if (extracted) {
      setFormData(prev => ({
        ...prev,
        name: extracted.name || prev.name,
        email: extracted.email || prev.email,
        phone: extracted.phone || prev.phone,
        company: extracted.company || prev.company,
        title: extracted.title || prev.title,
      }));
      setSmartFillText('');
    } else {
      alert("AI couldn't find enough details. Please fill manually or try a different snippet.");
    }
    setIsSmartFilling(false);
  };

  const nextStep = () => {
    if (step === 1) {
      if (!formData.name || !formData.email || !formData.company || !formData.phone) {
        alert("Please fill in all details, including your phone number, so we can contact you.");
        return;
      }
    }
    setStep(s => Math.min(s + 1, 3));
  };
  
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const handleFinalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('https://formsubmit.co/ajax/harisrangrez080@gmail.com', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `🚨 [PRIORITY] AI AUDIT REQUEST: ${formData.company}`,
          message: `A new client has requested a strategic AI audit through the portal.`,
          ...formData,
          phone_number: formData.phone,
          _captcha: "false"
        })
      });
      if (response.ok) {
        alert("Success! Your audit request has been sent to our technical team. We will contact you via phone or email within 2 hours.");
        setStep(1);
        setFormData({ name: '', email: '', phone: '', company: '', title: '', industry: 'Select', bottleneck: '' });
      } else {
        throw new Error("Service unavailable");
      }
    } catch (e) {
      alert("Notification Active: Our system is processing your request. If you don't hear from a strategist within 1 hour, please use the direct WhatsApp link.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="audit" className="py-32 px-6 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center space-x-3 px-5 py-2.5 bg-blue-50 border border-blue-100 rounded-2xl mb-10 shadow-sm">
              <span className="w-2.5 h-2.5 bg-blue-600 rounded-full animate-pulse"></span>
              <span className="text-[11px] font-black text-blue-700 uppercase tracking-[0.2em]">Strategy Registration Phase</span>
            </div>
            
            <h2 className="text-6xl md:text-8xl font-black text-slate-900 mb-10 tracking-tighter leading-[0.85]">
              Claim Your <br/>
              <span className="text-prismatic">Strategic Audit</span>
            </h2>
            
            <p className="text-slate-500 text-2xl mb-16 leading-relaxed font-medium max-w-lg">
              Unlock Enterprise-Grade <span className="text-slate-900 font-bold">Automation Roadmaps</span> customized for your regional business operations.
            </p>
            
            <div className="space-y-8">
              {[
                { t: "Executive Context", d: "Verify identity and operational authority." },
                { t: "Industry Mapping", d: "Align automation with market vertical." },
                { t: "Operational Pain-Points", d: "Isolate high-friction manual bottlenecks." }
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-8 p-6 glass-premium rounded-[2.5rem] border border-white transition-all hover:translate-x-2">
                  <div className="w-16 h-16 rounded-[1.5rem] bg-slate-900 flex items-center justify-center text-white font-black text-2xl shadow-xl">
                    {i + 1}
                  </div>
                  <div>
                    <p className="font-black text-slate-900 text-lg leading-none mb-2 tracking-tight">{item.t}</p>
                    <p className="text-sm text-slate-400 font-bold uppercase tracking-widest">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 glass-premium p-10 md:p-16 rounded-[4.5rem] shadow-[0_50px_100px_-30px_rgba(0,0,0,0.05)] border border-white relative overflow-hidden group">
             {/* Decorative Internal Glow */}
             <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>

             <div className="flex justify-between items-center mb-14">
                <span className="text-[11px] font-black text-blue-600 uppercase tracking-[0.4em]">Protocol {step} of 3</span>
                <div className="flex space-x-3">
                   {[1,2,3].map(i => (
                     <div key={i} className={`h-1.5 rounded-full transition-all duration-700 shadow-sm ${step >= i ? 'w-14 bg-blue-600' : 'w-5 bg-slate-100'}`}></div>
                   ))}
                </div>
             </div>

             <div className="min-h-[520px]">
                {step === 1 && (
                  <div className="animate-in fade-in slide-in-from-right-12 duration-700">
                    <h4 className="text-4xl font-black text-slate-900 mb-3 tracking-tighter">Identity Details</h4>
                    <p className="text-xs text-slate-400 mb-10 font-bold uppercase tracking-[0.2em]">Secure verification for report delivery</p>
                    
                    {/* AI Smart Fill Component */}
                    <div className="mb-12 bg-blue-50/40 p-8 rounded-[2.5rem] border border-blue-100/50 border-dashed relative group overflow-hidden">
                      <div className="absolute inset-0 bg-white/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="flex items-center space-x-3 mb-4 relative z-10">
                         <span className="text-xs font-black text-blue-600 uppercase tracking-[0.3em] flex items-center">
                           <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                           Smart Scan
                         </span>
                         <span className="text-[10px] text-slate-400 font-bold tracking-widest uppercase">(Paste Signature)</span>
                      </div>
                      <textarea 
                        value={smartFillText}
                        onChange={(e) => setSmartFillText(e.target.value)}
                        placeholder="haris V, CEO @ TechHub Hubli, haris@hub.ai, +91 8970732147..."
                        rows={2}
                        className="w-full bg-transparent border-none outline-none text-sm text-slate-700 font-bold resize-none placeholder:text-slate-300 mb-3 relative z-10"
                      />
                      <button 
                        onClick={handleSmartFill}
                        disabled={isSmartFilling || !smartFillText.trim()}
                        className="bg-slate-900 text-white px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 transition-all shadow-lg disabled:opacity-30 relative z-10"
                      >
                        {isSmartFilling ? "Analyzing..." : "Auto-Fill"}
                      </button>
                    </div>

                    <div className="space-y-8">
                      <div className="group relative">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-3 block ml-6">Full Name</label>
                        <input 
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          type="text" 
                          placeholder="Full Name" 
                          className="w-full px-10 py-6 bg-white border border-slate-100 rounded-[2.5rem] outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-600 transition-all font-black text-slate-900 shadow-sm"
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="group relative">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-3 block ml-6">Enterprise</label>
                          <input 
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            type="text" 
                            placeholder="Company" 
                            className="w-full px-10 py-6 bg-white border border-slate-100 rounded-[2.5rem] outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-600 transition-all font-black text-slate-900 shadow-sm"
                          />
                        </div>
                        <div className="group relative">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-3 block ml-6">Role</label>
                          <input 
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            type="text" 
                            placeholder="e.g. Director" 
                            className="w-full px-10 py-6 bg-white border border-slate-100 rounded-[2.5rem] outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-600 transition-all font-black text-slate-900 shadow-sm"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="group relative">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-3 block ml-6">Email Node</label>
                          <input 
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            type="email" 
                            placeholder="harisrangrez080@email.com" 
                            className="w-full px-10 py-6 bg-white border border-slate-100 rounded-[2.5rem] outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-600 transition-all font-black text-slate-900 shadow-sm"
                          />
                        </div>
                        <div className="group relative">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-3 block ml-6">Phone Number</label>
                          <input 
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            type="tel" 
                            placeholder="+91" 
                            className="w-full px-10 py-6 bg-white border border-slate-100 rounded-[2.5rem] outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-600 transition-all font-black text-slate-900 shadow-sm"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="animate-in fade-in slide-in-from-right-12 duration-700">
                    <h4 className="text-4xl font-black text-slate-900 mb-3 tracking-tighter">Sector Mapping</h4>
                    <p className="text-xs text-slate-400 mb-12 font-bold uppercase tracking-[0.2em]">Categorizing for industry-specific RAG pipelines</p>
                    <div className="space-y-10">
                      <div className="relative group">
                        <label className="text-[11px] font-black text-slate-400 uppercase tracking-[0.4em] mb-4 block ml-8">Primary Market vertical</label>
                        <select 
                          name="industry"
                          value={formData.industry}
                          onChange={handleChange}
                          className="w-full px-10 py-7 bg-white border border-slate-100 rounded-[3rem] outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-600 transition-all font-black text-slate-900 appearance-none shadow-sm"
                        >
                           <option value="Select">Your need in</option>
                           <option value="Software & Technology">Software & Technology</option>
                           <option value="Tech & Manufacturing">Tech & Manufacturing</option>
                           <option value="Real Estate & Dev">Real Estate & Dev</option>
                           <option value="Regional Retail">Regional Retail</option>
                           <option value="Medical Ops">Medical Ops</option>
                           <option value="Logistics">Logistics</option>
                           <option value="Hospitality">Hospitality</option>
                           <option value="Others">Others</option>
                        </select>
                        <div className="absolute right-10 bottom-7 pointer-events-none text-blue-600">
                          <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="animate-in fade-in slide-in-from-right-12 duration-700">
                    <h4 className="text-4xl font-black text-slate-900 mb-3 tracking-tighter">what u need from us</h4>
                    <p className="text-xs text-slate-400 mb-12 font-bold uppercase tracking-[0.2em]">Define the automation target</p>
                    <textarea 
                      name="bottleneck"
                      value={formData.bottleneck}
                      onChange={handleChange}
                      placeholder="e.g. Inbound inquiry processing is manual and slow..." 
                      rows={8}
                      className="w-full px-10 py-8 bg-white border border-slate-100 rounded-[3.5rem] outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-600 transition-all font-bold text-slate-900 resize-none placeholder:text-slate-200 shadow-sm"
                    ></textarea>
                  </div>
                )}
             </div>

             <div className="mt-16 flex space-x-6">
                {step > 1 && (
                  <button 
                    onClick={prevStep}
                    disabled={isSubmitting}
                    className="flex-1 py-6 bg-white border border-slate-100 text-slate-900 rounded-[2.5rem] font-black text-[11px] uppercase tracking-[0.3em] hover:bg-slate-50 transition-all shadow-sm"
                  >
                    Back
                  </button>
                )}
                <button 
                  onClick={step === 3 ? (e) => handleFinalSubmit(e as any) : nextStep}
                  disabled={isSubmitting}
                  className="flex-[2] py-6 bg-slate-900 text-white rounded-[2.5rem] font-black text-[11px] uppercase tracking-[0.3em] hover:bg-blue-600 transition-all shadow-2xl hover:-translate-y-1 active:translate-y-0"
                >
                  {isSubmitting ? "Syncing..." : (step === 3 ? "Initialize Audit Request" : "Next Protocol")}
                </button>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuditSection;
