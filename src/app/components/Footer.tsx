import svgPaths from "@/imports/svg-aawkvi8t3f";

export function Footer() {
  return (
    <footer className="bg-[#0d0d0d] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="h-14 w-[140px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 227 56">
              <g clipPath="url(#clip0_footer)">
                <path d={svgPaths.p6b3aa60} fill="white" />
                <path d={svgPaths.p1ab95e0} fill="white" />
                <path d={svgPaths.p31f62f80} fill="#CA2026" />
                <path d={svgPaths.p3c36e800} fill="#CA2026" />
                <path d={svgPaths.p2f2c9f00} fill="#CA2026" />
                <path d={svgPaths.p376a8700} fill="#CA2026" />
                <g>
                  <path d={svgPaths.p14b00d80} fill="white" />
                  <path d={svgPaths.p3b71a200} fill="white" />
                  <path d={svgPaths.p6976280} fill="white" />
                  <path d={svgPaths.p3213fe00} fill="white" />
                  <path d={svgPaths.p9be3070} fill="white" />
                  <path d={svgPaths.p39017580} fill="white" />
                  <path d={svgPaths.p2be07b80} fill="white" />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_footer">
                  <rect fill="white" height="56" width="227" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-gray-500 text-sm tracking-widest uppercase">
            © {new Date().getFullYear()} Holdco Holding - All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
