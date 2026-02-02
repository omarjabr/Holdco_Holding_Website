import imgBackground from "../../assets/378c6c3bbaf702b9c1c93b055944ab141a1b9417.png";

export function About() {
  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-black to-[#1a1a1a]">
      {/* Background with overlay */}
      <div className="absolute inset-0 opacity-10">
        <img src={imgBackground} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-wide uppercase">
            Who We Are
          </h2>
          <div className="w-24 h-1 bg-[#CA2026] mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Image */}
          <div className="relative h-[400px] lg:h-[530px] rounded-2xl overflow-hidden group">
            <img
              src={imgBackground}
              alt="Modern architecture"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          </div>

          {/* Right: Content */}
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-200 leading-tight">
              A Strategic Investment Group Empowering Innovation and Growth Across Industries
            </h3>

            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                Holdco Holding is a dynamic and forward-thinking investment and management group
                that brings together diverse business units under one strategic umbrella. With a
                commitment to innovation, operational excellence, and long-term value creation,
                Holdco Holding supports and empowers its subsidiaries to thrive in competitive markets.
              </p>

              <p>
                At the core of Holdco's philosophy is the belief that synergy between expertise,
                technology, and creativity drives impactful growth. Our group operates across
                multiple sectors, offering a wide spectrum of services from digital transformation
                and creative solutions to enterprise resource planning and HR consulting.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
              <div>
                <div className="text-3xl font-bold text-[#CA2026] mb-1">10+</div>
                <div className="text-sm text-gray-500">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#CA2026] mb-1">5+</div>
                <div className="text-sm text-gray-500">Industries</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#CA2026] mb-1">100%</div>
                <div className="text-sm text-gray-500">Commitment</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
