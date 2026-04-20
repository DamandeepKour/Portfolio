const jobs = [
  {
    period: 'Oct-2024 — Present',
    role: 'Software Engineer / MERN Stack Developer',
    company: 'AllHeart Web Pvt. Ltd. · Full-time',
    desc: 'Led development of scalable backend systems, including a logging microservice handling 50,000+ daily events across multiple platforms. Built API monitoring infrastructure covering 45+ endpoints, improving performance visibility and reducing response time by 32%. Managed a shared React & Next.js component library used by 9 developers, accelerating development by 40%. Automated deployments using Docker and CI/CD pipelines, cutting release time to under 15 minutes with a 99.9% success rate.',
    tags: ['React.js','Node.js','MongoDB','Docker','AWS','Redis'],
    dotColor: '#7f77dd',
  },
  {
    period: 'Jan 2023 — Sep 2024',
    role: 'Junior Full Stack Developer',
    company: 'Bhanguz software solutions · Full-time',
    desc: 'Developed backend systems and dashboards for multiple client projects. Built a fleet management system supporting 1,000+ daily tracking events, improving logistics visibility. Engineered a deposit admin system for cross-border transactions (Europe–Australia–Asia) using Yapily APIs, enabling secure bank-to-bank transfers and reducing manual reconciliation effort by 30%. Optimized REST APIs and MySQL queries, improving response time by 35%, and enhanced frontend performance using AJAX, reducing customer support requests by 20%.',
    tags: ['Node.js','React.js','MySQL','JWT','REST APIs','AJAX', 'Payment Gateway','Dashboard Systems', 'Php', 'Laravel'],
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
