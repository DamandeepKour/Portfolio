const projects = [
  {
    icon: '🪵',
    bg: 'linear-gradient(135deg, #1a0a2e, #2a1a4e)',
    badge: 'Architecture',
    badgeClass:
      'bg-[rgba(127,119,221,0.2)] text-[#afa9ec] border border-[rgba(127,119,221,0.3)]',
    title: 'Log Microservices',
    desc: 'Distributed logging system with centralized monitoring, log aggregation across services, real-time alerting, and scalable ingestion pipeline handling 100k+ events/day.',
    tech: ['Node.js', 'Kafka', 'MongoDB', 'Docker', 'Redis'],
    metrics: [
      { val: '100k+', key: 'Events/day' },
      { val: '5ms', key: 'Avg latency' },
      { val: '99.9%', key: 'Uptime' },
    ],
  },

  {
    icon: '🏢',
    bg: 'linear-gradient(135deg, #0a1e1a, #0d2e25)',
    badge: 'Live',
    badgeClass:
      'bg-[rgba(93,202,165,0.2)] text-[#5dcaa5] border border-[rgba(93,202,165,0.3)]',
    title: 'Ekanat SaaS Platform',
    desc: 'Multi-tenant SaaS with full tenant isolation, secure API gateway, role-based access control, subscription billing, and white-label support for enterprise clients.',
    tech: ['React', 'Express', 'PostgreSQL', 'AWS', 'Stripe'],
    metrics: [
      { val: '50+', key: 'Tenants' },
      { val: '40%', key: 'Faster APIs' },
      { val: '0', key: 'Data leaks' },
    ],
  },

  {
    icon: '🧠',
    bg: 'linear-gradient(135deg, #0f172a, #111827)',
    badge: 'AI SaaS',
    badgeClass:
      'bg-[rgba(93,202,165,0.2)] text-[#5dcaa5] border border-[rgba(93,202,165,0.3)]',
    title: 'FitNova AI',
    desc: 'AI-powered fitness and nutrition SaaS platform that generates personalized Indian diet plans, workout routines, calorie tracking, weight analytics, AI feedback, and smart health dashboards with secure authentication and real-time progress tracking.',
    tech: [
      'React.js',
      'Node.js',
      'Express.js',
      'MySQL',
      'Redis',
      'Groq AI',
      'JWT',
      'Tailwind CSS',
    ],
    metrics: [
      { val: 'AI', key: 'Personalized plans' },
      { val: '7-Day', key: 'Diet & workout generation' },
      { val: 'Real-time', key: 'Calorie tracking' },
    ],
    live: 'https://ai-fitness-frontend-one.vercel.app/',
  },

  {
    icon: '💳',
    bg: 'linear-gradient(135deg, #0a1520, #0d2030)',
    badge: 'Fintech System',
    badgeClass:
      'bg-[rgba(93,202,165,0.2)] text-[#5dcaa5] border border-[rgba(93,202,165,0.3)]',
    title: 'Cross-Border Deposit Management System',
    desc: 'Built a secure admin platform to manage cross-border bank transactions across Europe, Australia, and Asia using Yapily (Open Banking) APIs.',
    tech: [
      'Node.js',
      'Express.js',
      'MySQL',
      'Yapily API',
      'JWT',
      'REST APIs',
    ],
    metrics: [
      { val: '1000+', key: 'Daily transactions' },
      { val: '30%', key: 'Manual effort reduced' },
      { val: 'Multi-region', key: 'EU, AU, APAC' },
    ],
  },
];

export default function Projects() {
  return (
    <div className="bg-[#0d0d1a] border-y border-white/[0.07]">
      <section
        id="projects"
        className="py-20 px-6 max-w-6xl mx-auto"
      >
        <div className="text-center mb-14">
          <div className="text-xs text-[#5dcaa5] uppercase tracking-widest mb-2.5">
            What I've Built
          </div>

          <div className="text-[32px] font-bold">
            Featured Projects
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5">
          {projects.map((p) => {
            const CardWrapper = p.live ? 'a' : 'div';

            return (
              <CardWrapper
                key={p.title}
                href={p.live}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div
                  className="bg-[#14141f] border border-white/[0.07] rounded-[20px] overflow-hidden hover:border-[rgba(127,119,221,0.4)] hover:-translate-y-1.5 transition-all duration-300 cursor-pointer h-full"
                  style={{ boxShadow: 'none' }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.boxShadow =
                      '0 20px 60px rgba(127,119,221,0.08)')
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.boxShadow = 'none')
                  }
                >
                  <div
                    className="h-40 relative flex items-center justify-center"
                    style={{ background: p.bg }}
                  >
                    <span className="text-5xl opacity-60">
                      {p.icon}
                    </span>

                    <span
                      className={`absolute top-3 right-3 text-[10px] px-2 py-0.5 rounded-[10px] font-medium ${p.badgeClass}`}
                    >
                      {p.badge}
                    </span>
                  </div>

                  <div className="p-5">
                    <h3 className="text-[16px] font-semibold mb-2">
                      {p.title}
                    </h3>

                    <p className="text-[13px] text-[#8888a0] leading-[1.65] mb-3.5">
                      {p.desc}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-3.5">
                      {p.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[11px] px-2 py-0.5 bg-white/[0.05] border border-white/[0.07] rounded-[10px] text-[#8888a0]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3.5 pt-3.5 border-t border-white/[0.07]">
                      {p.metrics.map((m) => (
                        <div
                          key={m.key}
                          className="text-center"
                        >
                          <div className="text-[14px] font-semibold text-[#5dcaa5]">
                            {m.val}
                          </div>

                          <div className="text-[10px] text-[#8888a0] mt-0.5">
                            {m.key}
                          </div>
                        </div>
                      ))}
                    </div>

                    {p.live && (
                      <div className="mt-4 text-[#5dcaa5] text-sm font-medium">
                        Live Preview →
                      </div>
                    )}
                  </div>
                </div>
              </CardWrapper>
            );
          })}
        </div>
      </section>
    </div>
  );
}