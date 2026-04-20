const stacks = [
  {
    icon: '⚛',
    iconBg: 'rgba(127,119,221,0.12)',
    iconColor: '#afa9ec',
    title: 'Frontend',
    items: ['React.js','Redux Toolkit','Tailwind CSS','JavaScript ES6+'],
  },
  {
    icon: '⚡',
    iconBg: 'rgba(93,202,165,0.12)',
    iconColor: '#5dcaa5',
    title: 'Backend',
    items: ['Node.js','Express.js','Go (Golang)','REST APIs','Microservices'],
  },
  {
    icon: '🗄',
    iconBg: 'rgba(239,159,39,0.12)',
    iconColor: '#ef9f27',
    title: 'Databases',
    items: ['MongoDB','PostgreSQL','MySQL','Redis','Mongoose'],
  },
  {
    icon: '🚀',
    iconBg: 'rgba(212,83,126,0.12)',
    iconColor: '#d4537e',
    title: 'DevOps & Cloud',
    items: ['Docker','AWS EC2/S3','CI/CD','GitHub Actions'],
  },
];

export default function TechStack() {
  return (
    <section id="stack" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-14">
        <div className="text-xs text-[#5dcaa5] uppercase tracking-widest mb-2.5">What I Use</div>
        <div className="text-[32px] font-bold mb-2.5">Tech Stack</div>
        <div className="text-[15px] text-[#8888a0] max-w-[480px] mx-auto">
          The tools and technologies I work with daily to build fast, reliable, and maintainable systems.
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stacks.map((s) => (
          <div
            key={s.title}
            className="bg-[#14141f] border border-white/[0.07] rounded-2xl p-5 hover:border-white/[0.12] hover:-translate-y-1 transition-all cursor-default"
          >
            <div
              className="w-10 h-10 rounded-[10px] flex items-center justify-center text-lg mb-3"
              style={{ background: s.iconBg, color: s.iconColor }}
            >
              {s.icon}
            </div>
            <h3 className="text-[14px] font-semibold mb-3 text-[#f0f0f5]">{s.title}</h3>
            <div className="flex flex-wrap gap-1.5">
              {s.items.map(item => (
                <span key={item} className="text-[11px] px-2 py-0.5 bg-white/[0.05] border border-white/[0.07] rounded-[10px] text-[#8888a0]">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
