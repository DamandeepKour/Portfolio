export default function Navbar() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="sticky top-0 z-50 bg-[rgba(8,8,16,0.85)] backdrop-blur-xl border-b border-white/[0.07] flex items-center justify-between px-8 py-3.5">
      <div className="text-[15px] font-semibold tracking-wide text-[#f0f0f5]">
        DK<span className="text-[#7f77dd]">.</span>dev
      </div>
      <div className="hidden md:flex gap-7">
        {['about','experience','projects','skills','contact'].map(s => (
          <button
            key={s}
            onClick={() => scrollTo(s)}
            className="text-[13px] text-[#8888a0] hover:text-[#f0f0f5] transition-colors capitalize cursor-pointer bg-transparent border-none"
          >
            {s}
          </button>
        ))}
      </div>
      <button
        onClick={() => scrollTo('contact')}
        className="bg-[#7f77dd] text-white border-none px-[18px] py-[7px] rounded-[20px] text-[13px] cursor-pointer hover:opacity-85 transition-opacity"
      >
        Hire Me
      </button>
    </nav>
  );
}
