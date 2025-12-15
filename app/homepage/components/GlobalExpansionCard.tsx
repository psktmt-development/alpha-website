"use client";

type Props = {
  inline?: boolean;
};

export function GlobalExpansionCard({ inline = false }: Props) {
  const CardContent = (
    <div className="card relative grid w-[320px] min-h-[180px] auto-rows-[80px_1fr] overflow-hidden rounded-[10px] font-sans text-white shadow-[0_10px_20px_rgba(175,35,36,0.2)] border border-white/10">
        <style>{`
          .card:hover .img-section { transform: translateY(1em); }
        `}</style>

        <div className="img-section relative flex items-center justify-center rounded-t-[10px] bg-white transition-transform duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-12 h-12 fill-[#af2324] drop-shadow-sm">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
          </svg>
        </div>

        <div className="card-desc relative -top-2 z-10 flex flex-col gap-3 rounded-[10px] bg-[#af2324] px-5 py-4 shadow-[0_-4px_20px_rgba(0,0,0,0.2)]">
          <div className="card-header flex items-center justify-between">
            <div className="card-title text-[0.8em] font-semibold uppercase tracking-[1px] text-white">The Alpha Circle</div>
            <div className="card-menu flex gap-1">
              <span className="dot h-[5px] w-[5px] rounded-full bg-white" />
              <span className="dot h-[5px] w-[5px] rounded-full bg-white" />
              <span className="dot h-[5px] w-[5px] rounded-full bg-white" />
            </div>
          </div>

          <div className="card-heading text-[1.35em] font-semibold leading-tight text-white">
            Our Global Expansion
          </div>

          <div className="card-body-text text-[0.95em] leading-relaxed text-white/90">
            From our royal roots at Falaknuma Palace, we are now expanding globally.
          </div>

          <div className="card-footer mt-1 border-t border-white/30 pt-3 text-[0.82em] leading-5 text-white/85">
            <strong className="block text-white">Active & Upcoming Circles:</strong>
            Hyderabad, Bangalore, Vizag, Mumbai, Delhi, Chennai, Kolkata | Dubai (2025–2026)
          </div>
        </div>
      </div>
  );

  if (inline) {
    return CardContent;
  }

  return (
    <section className="w-full bg-white py-12 px-4 md:px-8 lg:px-12 flex justify-center">
      {CardContent}
    </section>
  );
}

