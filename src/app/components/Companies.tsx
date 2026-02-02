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
                          <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" viewBox="0 0 612.1 153.36"><defs><style> .cls-1 { fill: #1aa4de; } .cls-2 { fill: #0575a0; } .cls-3 { fill: #096493; } .cls-4 { fill: #3a4c56; } </style></defs><g><path class="cls-1" d="M172.6,15.14h0c-8.36-14.47-26.87-19.43-41.34-11.08l-20.82,12.02c7.62,14.33,2.57,32.22-11.59,40.4l-36.19,20.89v45.73c0,16.71,13.55,30.26,30.26,30.26h0c16.71,0,30.26-13.55,30.26-30.26v-44.49l38.33-22.13c14.47-8.36,19.43-26.87,11.08-41.34Z"/><path class="cls-2" d="M62.68,61.03c.04-10.41,5.46-20.52,15.13-26.11l32.64-18.85c-.17-.31-.33-.63-.51-.94h0C101.58.66,83.07-4.3,68.59,4.06L15.14,34.92C.66,43.28-4.3,61.79,4.06,76.26h0c8.36,14.47,26.87,19.43,41.34,11.08l17.27-9.97v-16c0-.11,0-.23,0-.34Z"/><path class="cls-3" d="M110.44,16.08l-32.64,18.85c-9.67,5.58-15.08,15.69-15.13,26.11,0,.11,0,.23,0,.34v16l36.19-20.89c14.16-8.18,19.21-26.07,11.59-40.4Z"/></g><g><path class="cls-4" d="M244.53,106.92v17.07h-10.24c-7.3,0-12.99-1.78-17.07-5.36-4.08-3.57-6.12-9.39-6.12-17.48v-35.1h-8v-16.71h8v-18.57h20.13v18.57h13.18v16.71h-13.18v35.33c0,1.96.47,3.38,1.41,4.24.94.86,2.51,1.29,4.71,1.29h7.18Z"/><path class="cls-4" d="M317.26,95.04h-45.55c.31,4.08,1.63,7.2,3.94,9.36,2.31,2.16,5.16,3.24,8.53,3.24,5.02,0,8.51-2.12,10.47-6.35h21.42c-1.1,4.32-3.08,8.2-5.94,11.65-2.87,3.45-6.45,6.16-10.77,8.12-4.32,1.96-9.14,2.94-14.48,2.94-6.44,0-12.16-1.37-17.18-4.12-5.02-2.75-8.95-6.67-11.77-11.77-2.82-5.1-4.24-11.06-4.24-17.89s1.39-12.79,4.18-17.89c2.78-5.1,6.69-9.02,11.71-11.77,5.02-2.75,10.79-4.12,17.3-4.12s12.01,1.34,16.95,4c4.94,2.67,8.81,6.47,11.59,11.42,2.78,4.94,4.18,10.71,4.18,17.3,0,1.88-.12,3.85-.35,5.88ZM297.02,83.85c0-3.45-1.18-6.2-3.53-8.24-2.35-2.04-5.3-3.06-8.83-3.06s-6.22.98-8.53,2.94c-2.32,1.96-3.75,4.75-4.3,8.36h25.19Z"/><path class="cls-4" d="M328.39,72.32c2.78-5.1,6.67-9.02,11.65-11.77,4.98-2.75,10.69-4.12,17.12-4.12,8.24,0,15.12,2.16,20.66,6.47,5.53,4.32,9.16,10.4,10.89,18.24h-21.42c-1.81-5.02-5.3-7.53-10.47-7.53-3.69,0-6.63,1.43-8.83,4.29-2.2,2.87-3.3,6.96-3.3,12.3s1.1,9.44,3.3,12.3c2.19,2.87,5.14,4.3,8.83,4.3,5.18,0,8.67-2.51,10.47-7.53h21.42c-1.73,7.69-5.37,13.73-10.95,18.13-5.57,4.4-12.44,6.59-20.6,6.59-6.44,0-12.14-1.37-17.12-4.12-4.98-2.75-8.87-6.67-11.65-11.77-2.79-5.1-4.18-11.06-4.18-17.89s1.39-12.79,4.18-17.89Z"/><path class="cls-4" d="M419.54,35.95v88.04h-20.13V35.95h20.13Z"/><path class="cls-4" d="M495.69,95.04h-45.55c.31,4.08,1.63,7.2,3.94,9.36,2.31,2.16,5.16,3.24,8.53,3.24,5.02,0,8.51-2.12,10.47-6.35h21.42c-1.1,4.32-3.08,8.2-5.94,11.65-2.87,3.45-6.45,6.16-10.77,8.12-4.32,1.96-9.14,2.94-14.48,2.94-6.44,0-12.16-1.37-17.18-4.12-5.02-2.75-8.95-6.67-11.77-11.77-2.82-5.1-4.24-11.06-4.24-17.89s1.39-12.79,4.18-17.89c2.78-5.1,6.69-9.02,11.71-11.77,5.02-2.75,10.79-4.12,17.3-4.12s12.01,1.34,16.95,4c4.94,2.67,8.81,6.47,11.59,11.42,2.78,4.94,4.18,10.71,4.18,17.3,0,1.88-.12,3.85-.35,5.88ZM475.45,83.85c0-3.45-1.18-6.2-3.53-8.24-2.35-2.04-5.3-3.06-8.83-3.06s-6.22.98-8.53,2.94c-2.32,1.96-3.75,4.75-4.3,8.36h25.19Z"/><path class="cls-4" d="M568.2,95.04h-45.55c.31,4.08,1.63,7.2,3.94,9.36,2.31,2.16,5.16,3.24,8.53,3.24,5.02,0,8.51-2.12,10.47-6.35h21.42c-1.1,4.32-3.08,8.2-5.94,11.65-2.87,3.45-6.45,6.16-10.77,8.12-4.32,1.96-9.14,2.94-14.48,2.94-6.44,0-12.16-1.37-17.18-4.12-5.02-2.75-8.95-6.67-11.77-11.77-2.82-5.1-4.24-11.06-4.24-17.89s1.39-12.79,4.18-17.89c2.78-5.1,6.69-9.02,11.71-11.77,5.02-2.75,10.79-4.12,17.3-4.12s12.01,1.34,16.95,4c4.94,2.67,8.81,6.47,11.59,11.42,2.78,4.94,4.18,10.71,4.18,17.3,0,1.88-.12,3.85-.35,5.88ZM547.95,83.85c0-3.45-1.18-6.2-3.53-8.24-2.35-2.04-5.3-3.06-8.83-3.06s-6.22.98-8.53,2.94c-2.32,1.96-3.75,4.75-4.3,8.36h25.19Z"/><path class="cls-4" d="M612.1,74.09h-10.83v49.9h-20.13v-49.9h-7.3v-16.71h7.3v-1.89c0-8.08,2.31-14.22,6.94-18.42,4.63-4.2,11.42-6.3,20.36-6.3,1.49,0,2.94.09,3.65.17v17.07c-3.85-.24-6.9.27-8.47,1.6-1.57,1.34-2.35,3.73-2.35,7.18v.59h10.83v16.71Z"/></g></svg>
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
