import { useState } from 'react';

const links = [
  { icon: '📧', label: 'Email', value: 'daman1901319@gmail.com', bg: 'rgba(127,119,221,0.12)' },
  // { icon: '💻', label: 'GitHub', value: 'github.com/damandeepkour', bg: 'rgba(93,202,165,0.12)' },
  { icon: '🔗', label: 'LinkedIn', value: 'https://www.linkedin.com/in/damandeep-kour-104264251/', bg: 'rgba(239,159,39,0.12)' },
  { icon: '📍', label: 'Location', value: 'Chandigarh, India · Remote OK', bg: 'rgba(212,83,126,0.12)' },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <div className="bg-[#0d0d1a] border-t border-white/[0.07]">
      <section id="contact" className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="text-xs text-[#5dcaa5] uppercase tracking-widest mb-2.5">Let's Build Together</div>
          <div className="text-[32px] font-bold">Get In Touch</div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info */}
          <div>
            <h3 className="text-[22px] font-bold mb-3">Open to opportunities</h3>
            <p className="text-[#8888a0] text-[15px] leading-[1.7] mb-7">
              Whether you need a senior developer for your SaaS product, want to collaborate on something ambitious, or have a complex system you need to scale — I'd love to hear from you.
            </p>
            <div className="flex flex-col gap-3.5">
              {links.map(l => (
                <a
                  key={l.label}
                  href="#"
                  className="flex items-center gap-3 no-underline text-[#8888a0] text-[14px] hover:text-[#f0f0f5] px-3 py-3 border border-white/[0.07] rounded-xl bg-[#14141f] hover:border-white/[0.12] transition-all"
                >
                  <div className="w-9 h-9 rounded-[9px] flex items-center justify-center text-base flex-shrink-0" style={{ background: l.bg }}>
                    {l.icon}
                  </div>
                  <div>
                    <div className="text-[11px] text-[#8888a0] mb-0.5">{l.label}</div>
                    <div className="text-[#f0f0f5] text-[13px]">{l.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-[#14141f] border border-white/[0.07] rounded-[20px] p-7">
            <div className="grid grid-cols-2 gap-3 mb-3">
              <div className="flex flex-col gap-1">
                <label className="text-xs text-[#8888a0]">Name</label>
                <input type="text" placeholder="Your name" className="bg-white/[0.04] border border-white/[0.12] rounded-[10px] px-3.5 py-2.5 text-[#f0f0f5] text-sm font-['inherit'] outline-none focus:border-[#7f77dd] transition-colors" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs text-[#8888a0]">Email</label>
                <input type="email" placeholder="your@email.com" className="bg-white/[0.04] border border-white/[0.12] rounded-[10px] px-3.5 py-2.5 text-[#f0f0f5] text-sm font-['inherit'] outline-none focus:border-[#7f77dd] transition-colors" />
              </div>
            </div>
            <div className="flex flex-col gap-1 mb-3">
              <label className="text-xs text-[#8888a0]">Subject</label>
              <input type="text" placeholder="Project type / opportunity" className="bg-white/[0.04] border border-white/[0.12] rounded-[10px] px-3.5 py-2.5 text-[#f0f0f5] text-sm font-['inherit'] outline-none focus:border-[#7f77dd] transition-colors" />
            </div>
            <div className="flex flex-col gap-1 mb-3">
              <label className="text-xs text-[#8888a0]">Message</label>
              <textarea
                placeholder="Tell me about your project..."
                rows={4}
                className="bg-white/[0.04] border border-white/[0.12] rounded-[10px] px-3.5 py-2.5 text-[#f0f0f5] text-sm font-['inherit'] outline-none focus:border-[#7f77dd] transition-colors resize-y"
              />
            </div>
            <button
              onClick={handleSubmit}
              className="w-full py-3 rounded-xl text-sm font-medium text-white border-none cursor-pointer transition-all"
              style={{ background: sent ? '#5dcaa5' : '#7f77dd' }}
            >
              {sent ? 'Message Sent! ✓' : 'Send Message →'}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
