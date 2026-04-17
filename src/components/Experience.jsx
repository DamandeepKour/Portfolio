const jobs = [
  {
    period: '2023 — Present',
    role: 'Senior MERN Stack Developer',
    company: 'Ekanat Technologies · Full-time',
    desc: 'Lead engineer on a multi-tenant SaaS platform serving enterprise clients. Architected microservices infrastructure, reduced API latency by 40%, and mentored a team of 3 junior developers. Introduced CI/CD pipelines that cut deployment time from 2 hours to 15 minutes.',
    tags: ['React.js','Node.js','MongoDB','Docker','AWS','Redis'],
    dotColor: '#7f77dd',
  },
  {
    period: '2022 — 2023',
    role: 'Full Stack Developer',
    company: 'EV Rickshaw Platform · Contract',
    desc: 'Built a fleet management system from scratch — subscription billing, real-time analytics dashboard, owner-driver ecosystem, and payment integrations. Handled end-to-end architecture decisions and delivered MVP in 4 months.',
    tags: ['Express.js','PostgreSQL','Redux','Razorpay API','Chart.js'],
    dotColor: '#5dcaa5',
  },
  {
    period: '2021 — 2022',
    role: 'Junior Backend Developer',
    company: 'Freelance / Agency Work',
    desc: 'Built REST APIs and backend services for various clients. Gained hands-on experience with database design, authentication systems (JWT, OAuth), and cloud deployment. Completed 8+ client projects across e-commerce, fintech, and education verticals.',
    tags: ['Node.js','MySQL','JWT','REST APIs','Nginx'],
    dotColor: '#ef9f27',
  },
];

export default function Experience() {
  return (
    <div className="bg-[#0d0d1a] border-y border-white/[0.07]">
      <section id="experience" className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="text-xs text-[#5dcaa5] uppercase tracking-widest mb-2.5">Career Path</div>
          <div className="text-[32px] font-bold">Experience</div>
        </div>

        <div className="relative pl-8 max-w-[700px] mx-auto">
          <div className="absolute left-[10px] top-0 bottom-0 w-px bg-gradient-to-b from-[#7f77dd] via-[#5dcaa5] to-transparent" />
          {jobs.map((job, i) => (
            <div key={i} className="relative mb-10">
              <div
                className="absolute -left-7 top-1 w-3 h-3 rounded-full border-2 border-[#080810]"
                style={{ background: job.dotColor }}
              />
              <div className="text-xs mb-1.5" style={{ color: '#5dcaa5' }}>{job.period}</div>
              <div className="text-[17px] font-semibold mb-1">{job.role}</div>
              <div className="text-[13px] text-[#8888a0] mb-2.5">{job.company}</div>
              <div className="text-[14px] text-[#8888a0] leading-[1.65] mb-2.5">{job.desc}</div>
              <div className="flex flex-wrap gap-1.5">
                {job.tags.map(t => (
                  <span key={t} className="text-[11px] px-2 py-0.5 rounded-[10px] bg-white/[0.05] text-[#8888a0] border border-white/[0.07]">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
