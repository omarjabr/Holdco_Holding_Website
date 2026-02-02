import { ArrowRight } from 'lucide-react';
import imgArtboardSs1 from "../../assets/c0f50119c3f9d824af0249064884c317966911b5.png";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={imgArtboardSs1}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black"></div>
      </div>
      
      {/* Content */}
      {/* <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 pt-40"> */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 pt-40">
        <div className="max-w-7xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Driving Growth by Building, Managing, and Elevating{' '}
            <span className="text-[#CA2026]">High-Performance Companies</span>{' '}
            Across Key Sectors
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
            At Holdco Holding, we provide the foundation for success connecting expertise,
            resources, and leadership across every business we own.
          </p>

          <a
            href="#about"
            className="inline-flex items-center gap-2 bg-[#CA2026] hover:bg-[#a01a1f] text-white px-8 py-4 rounded-full transition-all duration-300 group shadow-lg hover:shadow-xl hover:shadow-[#CA2026]/20"
          >
            <span className="font-medium">Know More</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-2 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
