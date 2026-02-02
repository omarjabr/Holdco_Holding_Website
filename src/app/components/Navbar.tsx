import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import svgPaths from "@/imports/svg-aawkvi8t3f";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="h-12 w-[120px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 197 49">
                <g clipPath="url(#clip0_1_578)">
                  <path d={svgPaths.p204a9100} fill="white" />
                  <path d={svgPaths.p7a19200} fill="white" />
                  <path d={svgPaths.p15014300} fill="#CA2026" />
                  <path d={svgPaths.p263f9f80} fill="#CA2026" />
                  <path d={svgPaths.p26d37c00} fill="#CA2026" />
                  <path d={svgPaths.p23c03a00} fill="#CA2026" />
                  <g>
                    <path d={svgPaths.p25520880} fill="white" />
                    <path d={svgPaths.pf87be80} fill="white" />
                    <path d={svgPaths.p2188b600} fill="white" />
                    <path d={svgPaths.pe93cb00} fill="white" />
                    <path d={svgPaths.p2ad0af00} fill="white" />
                    <path d={svgPaths.p38b3b200} fill="white" />
                    <path d={svgPaths.p4209d00} fill="white" />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_1_578">
                    <rect fill="white" height="49" width="197" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-white hover:text-[#CA2026] transition-colors duration-200 relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#CA2026] group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#companies" className="text-gray-300 hover:text-white transition-colors duration-200 relative group">
              Companies
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#CA2026] group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-200 relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#CA2026] group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/10">
          <div className="px-4 py-6 space-y-4">
            <a
              href="#about"
              className="block text-white hover:text-[#CA2026] transition-colors duration-200 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#companies"
              className="block text-gray-300 hover:text-white transition-colors duration-200 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Companies
            </a>
            <a
              href="#contact"
              className="block text-gray-300 hover:text-white transition-colors duration-200 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
