export default function Footer() {
  return (
    <footer className="bg-[#080810] border-t border-white/[0.07] px-8 py-6 flex items-center justify-between flex-wrap gap-4">
      <div className="text-[13px] text-[#8888a0]">
        © 2024 Damandeep Kour · Built with React & Framer Motion
      </div>
      <div className="flex gap-5">
        <button
          onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
          className="text-[13px] text-[#8888a0] hover:text-[#f0f0f5] transition-colors bg-transparent border-none cursor-pointer"
        >
          Back to top ↑
        </button>
        <a href="#" className="text-[13px] text-[#8888a0] hover:text-[#f0f0f5] transition-colors no-underline">
          Download CV
        </a>
      </div>
    </footer>
  );
}
