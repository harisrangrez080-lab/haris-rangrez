
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Stats from './components/Stats';
import Workflow from './components/Workflow';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Newsletter from './components/Newsletter';
import ChatWidget from './components/ChatWidget';
import WhatsAppFloat from './components/WhatsAppFloat';
import CallFloat from './components/CallFloat';
import AuditSection from './components/AuditSection';

const App: React.FC = () => {
  const [uplinkActive, setUplinkActive] = useState(false);
  const [notification, setNotification] = useState<{show: boolean, msg: string}>({show: false, msg: ''});

  useEffect(() => {
    const notifyOwnerOfVisit = async () => {
      try {
        let ip = "Unknown IP";
        try {
          const ipRes = await fetch('https://api.ipify.org?format=json');
          const ipData = await ipRes.json();
          ip = ipData.ip;
        } catch (e) {
          console.log("IP detection redirected.");
        }

        const response = await fetch('https://formsubmit.co/ajax/harisrangrez080@gmail.com', {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json' 
          },
          body: JSON.stringify({
            _subject: `🚨 [ALERT] VISITOR DETECTED: ${ip}`,
            message: `New arrival on MH AI Agency platform. IP: ${ip}`,
            visitor_ip: ip,
            browser: navigator.userAgent,
            timestamp: new Date().toLocaleString(),
            owner_notif_target: '8970732147',
            _captcha: "false"
          })
        });

        if (response.ok) {
          setUplinkActive(true);
          setNotification({
            show: true, 
            msg: "Secure Connection: Strategy Node Active."
          });
          setTimeout(() => setNotification({show: false, msg: ''}), 6000);
        }
      } catch (err) {
        setUplinkActive(true);
      }
    };

    if (!sessionStorage.getItem('notified_owner')) {
      notifyOwnerOfVisit();
      sessionStorage.setItem('notified_owner', 'true');
    } else {
      setUplinkActive(true);
    }
  }, []);

  return (
    <div className="min-h-screen relative selection:bg-blue-600/10 selection:text-blue-900">
      {/* Soft Prismatic Auroras */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="aurora-soft top-[-10%] left-[-10%] bg-blue-100 w-[600px] h-[600px]"></div>
        <div className="aurora-soft top-[20%] right-[-10%] bg-purple-50 w-[800px] h-[800px]" style={{ animationDelay: '-5s' }}></div>
        <div className="aurora-soft bottom-[-15%] left-[10%] bg-cyan-50 w-[700px] h-[700px]" style={{ animationDelay: '-10s' }}></div>
      </div>

      {/* Top Professional Status Bar */}
      <div className={`fixed top-0 left-0 w-full h-[2px] z-[100] transition-all duration-1000 ${uplinkActive ? 'bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.3)]' : 'bg-slate-200 animate-pulse'}`}></div>
      
      {/* Refined Notification Pop-up */}
      {notification.show && (
        <div className="fixed top-24 right-8 z-[1000] animate-in fade-in slide-in-from-right-10 duration-700">
          <div className="glass-premium px-6 py-4 rounded-3xl border border-blue-100/50 flex items-center space-x-4">
            <div className="w-10 h-10 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 mb-0.5">System Alert</p>
              <p className="text-sm font-bold tracking-tight text-slate-800">{notification.msg}</p>
            </div>
          </div>
        </div>
      )}

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Stats />
        {/* Registration Part integrated as requested */}
        <AuditSection />
        <Services />
        <Workflow />
        <Testimonials />
        <FAQ />
        <Pricing />
        <Contact />
        <Newsletter />
      </main>
      
      <footer className="bg-white border-t border-slate-100 text-slate-500 py-32 px-10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-3 gap-20 mb-24">
            <div>
              <div className="flex items-center space-x-4 mb-10">
                <div className="bg-blue-600 text-white w-10 h-10 rounded-xl flex items-center justify-center font-black text-xl shadow-lg">MH</div>
                <span className="font-black text-2xl tracking-tighter text-slate-900">AI <span className="text-blue-600">AGENCY</span></span>
              </div>
              <p className="text-sm font-medium leading-relaxed max-w-sm">
                Hubli-Dharwad's premiere AI implementation partner. We architect intelligent systems for the forward-thinking enterprise.
              </p>
            </div>
            <div>
              <h4 className="text-slate-900 font-black mb-10 uppercase text-[11px] tracking-[0.4em]">Official Line</h4>
              <p className="text-xl font-bold text-blue-600 hover:text-blue-700 transition-colors cursor-pointer tracking-tight">harisrangrez080@gmail.com</p>
            </div>
            <div>
              <h4 className="text-slate-900 font-black mb-10 uppercase text-[11px] tracking-[0.4em]">Direct Access</h4>
              <p className="text-3xl font-black text-slate-900 tracking-tighter">+91 89707 321 47</p>
              <p className="text-[10px] font-bold text-slate-400 mt-2 uppercase tracking-[0.2em]">Monitored Strategy Line</p>
            </div>
          </div>
          <div className="pt-16 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-10">
            <p className="text-[11px] font-bold uppercase tracking-[0.4em] opacity-40">&copy; 2026 MH AI AUTOMATION. HUBBALLI-DHARWAD HQ.</p>
            <div className="flex items-center space-x-4 px-5 py-2.5 bg-slate-50 rounded-full border border-slate-100">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-600">Status: High Performance Active</span>
            </div>
          </div>
        </div>
      </footer>
      <ChatWidget />
      <WhatsAppFloat />
      <CallFloat />
    </div>
  );
};

export default App;
