import { ArrowRight } from 'lucide-react';
// import imgCoronavirus from "figma:asset/67732a80bd4f63d56090e04fe7df39de192d7db6.png";
// import imgModernBuildings from "figma:asset/e24061cd7997a418c4a8848097b2b696a7a6cc0a.png";
// import imgModernSkyscrapers from "figma:asset/13cd83e048603276a23d2653237abafb47d7cc48.png";

import svgPaths from "@/imports/svg-aawkvi8t3f";
import imgCoronavirus from "../../assets/67732a80bd4f63d56090e04fe7df39de192d7db6.png";
import imgModernBuildings from "../../assets/e24061cd7997a418c4a8848097b2b696a7a6cc0a.png";
import imgModernSkyscrapers from "../../assets/13cd83e048603276a23d2653237abafb47d7cc48.png";
import layer1 from "../../assets/Layer_1.png"
import layer2 from "../../assets/Layer_1 (1).png"
import layer3 from "../../assets/Group.png"
const companies = [
  {
    name: 'Holdco',
    image: imgCoronavirus,
    logo: 'holdco',
  },
  {
    name: 'USM',
    image: imgModernBuildings,
    logo: 'usm',
  },
  {
    name: 'Tecleef',
    image: imgModernSkyscrapers,
    logo: 'tecleef',
  },
];

export function Companies() {
  return (
    <section id="companies" className="py-24 bg-gradient-to-b from-[#1a1a1a] to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-wide uppercase">
            Our Group Structure
          </h2>
          <div className="w-24 h-1 bg-[#CA2026] mx-auto"></div>
        </div>

        {/* Companies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {companies.map((company, index) => (
            <div
              key={index}
              className="group relative h-[450px] rounded-2xl overflow-hidden bg-black/40 backdrop-blur-sm border border-white/10 hover:border-[#CA2026]/50 transition-all duration-500"
            >
              {/* Hover Border + Label */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 rounded-2xl border border-[#CA2026]/80" />
                <div className="absolute top-6 left-6">
                  <span className="inline-flex items-center rounded-md bg-black/70 px-3 py-1 text-sm font-normal text-white border border-[#CA2026]/50">
                    test
                  </span>
                </div>
              </div>

              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={company.image}
                  alt={company.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40"></div>
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-8">
                <div className="absolute left-8 top-8 translate-y-[280px] group-hover:translate-y-0 transition-transform duration-700 ease-out">
                  {company.logo === 'holdco' && (
                    <div>
                      <div className="h-12 w-[100px] rounded-lg p-2 flex items-center justify-center">
                        <svg className="h-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 149 35">
                          <g clipPath="url(#clip0_holdco)">
                            <path d={svgPaths.p365693f0} fill="#252524" />
                            <path d={svgPaths.p22471190} fill="#252524" />
                            <path d={svgPaths.p253c1d00} fill="#252524" />
                            <path d={svgPaths.p32203c0} fill="#252524" />
                            <path d={svgPaths.p1ac99c00} fill="#252524" />
                            <path d={svgPaths.p39b67c52} fill="#252524" />
                            <path d={svgPaths.p21539e00} fill="#CA2026" />
                            <path d={svgPaths.p25bccd00} fill="#CA2026" />
                            <path d={svgPaths.p13a2ee80} fill="#CA2026" />
                            <path d={svgPaths.p15d9d400} fill="#CA2026" />
                            <path d={svgPaths.p3049bf80} fill="#CA2026" />
                            <path d={svgPaths.p250df00} fill="#CA2026" />
                            <path d={svgPaths.p1309a280} fill="#CA2026" />
                            <path d={svgPaths.p3696fd00} fill="#CA2026" />
                            <path d={svgPaths.p2ea9a900} fill="#CA2026" />
                            <path d={svgPaths.p36c30200} fill="#CA2026" />
                            <path d={svgPaths.p3e504d00} fill="#CA2026" />
                            <path d={svgPaths.p320d3d80} fill="#CA2026" />
                            <path d={svgPaths.p7128e00} fill="#252524" />
                            <path d={svgPaths.p111aab00} fill="#252524" />
                            <path d={svgPaths.p2290d200} fill="#252524" />
                            <path d={svgPaths.p29eb3170} fill="#252524" />
                          </g>
                          <defs>
                            <clipPath id="clip0_holdco">
                              <rect fill="white" height="35" width="149" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      {/* description */}
                      <div className="backdrop-blur-md rounded-lg flex flex-col gap-4 justify-space-between mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <p className="text-white text-xs w-full">A multidisciplinary powerhouse that includes</p>
                        <img
                          src={layer1}
                          alt="holdco"
                          className="w-[70px] h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />                        
                        <p className="text-white text-xs w-full">Crafting creative content, branding, and digital experiences</p>
                        <img
                          src={layer2}
                          alt="holdco"
                          className="w-[70px] h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <p className="text-white text-xs w-full">Delivering cutting-edge digital solutions and systems integration</p>
  
                        <img
                          src={layer3}
                          alt="holdco"
                          className="w-[70px] h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <p className="text-white text-xs w-full">An intuitive entreprise resource planning system enabling businesses to optimize operations</p>
                      </div>
                    </div>
                  )}
                  {company.logo === 'usm' && (
                    <div>
                        <div className="h-12 w-[100px] rounded-lg p-2 flex items-center justify-center">
                          <svg className="h-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 123 42">
                            <g clipPath="url(#clip0_usm)">
                              <path d={svgPaths.p6983100} fill="#003E7E" />
                              <g>
                                <path d={svgPaths.p2d601370} fill="#003E7E" />
                                <path d={svgPaths.p2eb63180} fill="#003E7E" />
                              </g>
                            </g>
                            <defs>
                              <clipPath id="clip0_usm">
                                <rect fill="white" height="42" width="123" />
                              </clipPath>
                            </defs>
                          </svg>
                      </div>

                      {/* description */}
                      <div className="backdrop-blur-md rounded-lg flex flex-col gap-4 justify-space-between mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <p className="text-white text-xs w-full">Established back in 1971, "USM" is purely dedicated to act as 'the one- stop shop prime quality service provider to selective partners in the Middle East and the GCC countries'.</p>
                        <br />
                        <p className='font-bold text-white text-sm'>Our Services</p>
                        <p className='text-white text-sm'>01 Soft Facility Management (SFM)</p>
                        <p className='text-white text-sm'>02 Facility Management (FM)</p>
                        <p className='text-white text-sm'>03 Hard Facility Management (HFM)</p>
                        <p className='text-white text-sm'>04 Property Management (PM)</p>
                        <p className='text-white text-sm'>05 Workforce Management (WM)</p>
                      </div>

                     
                    </div>
                  )}
                  {company.logo === 'tecleef' && (
                    <div>
                      <div className="h-12 w-[130px] rounded-lg p-2 flex items-center justify-center">
                          <svg className="h-full w-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 163 41">
                            <g>
                              <path d={svgPaths.p3ae03080} fill="#00A5E3" />
                              <path d={svgPaths.p3efb9d00} fill="#00749F" />
                              <path d={svgPaths.p148ac700} fill="#036392" />
                            </g>
                            <g>
                              <path d={svgPaths.pc1fd300} fill="#394B56" />
                              <path d={svgPaths.p24261880} fill="#394B56" />
                              <path d={svgPaths.p233bc080} fill="#394B56" />
                              <path d={svgPaths.p2032df00} fill="#394B56" />
                              <path d={svgPaths.p1c0d7780} fill="#394B56" />
                              <path d={svgPaths.p142f2400} fill="#394B56" />
                              <path d={svgPaths.p2b20b000} fill="#394B56" />
                            </g>
                          </svg>
                      </div>

                       {/* description */}
                       <div className="backdrop-blur-md rounded-lg flex flex-col gap-4 justify-space-between mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <p className="text-white text-xs w-full">Tecleef is the all-in-one property management ecosystem, empowering property owners, managers, and tenants with cutting-edge technology and comprehensive services. Whether you're managing residential, commercial, or mixed-use properties, Tecleef provides the tools and services you need to thrive in Saudi Arabia's evolving real estate landscape.</p>
                        <br />
                        <p className='font-bold text-white text-sm'>Our Products</p>
                        <p className='text-white text-sm'>01 Community Management Saas</p>
                        <p className='text-white text-sm'>02 Property Management App</p>
                        <p className='text-white text-sm'>03 Facility Services Marketplace</p>
                      </div>
                      
                    </div>
                  )}
                </div>

                {/* CTA Button */}
                <button className="flex items-center gap-2 text-white hover:text-[#CA2026] transition-all duration-300 group/btn opacity-100 group-hover:opacity-0">
                  <span className="font-medium">Learn More</span>
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-[#CA2026]/0 group-hover:bg-[#CA2026]/10 transition-colors duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
