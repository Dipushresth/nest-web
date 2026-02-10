import Image from "next/image";

export default function Footer() {
  return (
    <footer className="px-4 pb-4 bg-white">
      <div className="bg-[radial-gradient(80%_80%_at_50%_0%,#4f7cff_0%,#003be5_45%,#002bb8_100%)] rounded-lg p-8 md:p-16 relative overflow-hidden text-white shadow-2xl">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="text-[12vw] font-black uppercase tracking-tighter text-white/[0.03] whitespace-nowrap leading-none border-text italic">
            NEST NEPAL
          </span>
        </div>

        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start gap-12 mb-32">
          <Image
            src="/footer-logo.svg"
            alt="Nest Nepal"
            width={213}
            height={28}
            title="Nest Nepal"
          />

          <div className="text-right flex flex-col gap-2 text-sm md:text-base font-medium opacity-90">
            <p className="font-bold">Nepal</p>
            <p>Call us : +977 986-160-1174</p>
            <p>Kupondole, Lalitpur, Nepal</p>
            <p>support@nestsms.com</p>
          </div>
        </div>

        <div className="relative z-10 flex flex-col md:flex-row justify-between items-end gap-8 border-t border-white/10 pt-8">
          <div>
            <span className="text-lg md:text-xl font-medium opacity-90">
              Google Workspace
            </span>
          </div>

          <nav className="flex flex-wrap gap-6 md:gap-10 text-sm md:text-base font-medium">
            <a href="#" className="hover:opacity-70 transition-opacity">
              Why google workspace?
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity">
              Pricing
            </a>
            <a
              href="#"
              className="hover:opacity-70 transition-opacity flex items-center gap-1"
            >
              Get A Quotation
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17l9.2-9.2M17 17V7H7" />
              </svg>
            </a>
          </nav>
        </div>
      </div>

      <style>{`
        .border-text {
          -webkit-text-stroke: 1px rgba(255,255,255,0.05);
          color: transparent;
        }
      `}</style>
    </footer>
  );
}
