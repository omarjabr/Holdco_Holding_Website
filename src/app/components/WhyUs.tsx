import { useState } from 'react';
import { Award, Users, MessageSquare, Cpu } from 'lucide-react';
// import imgArtboard42 from "figma:asset/e4d9abe0f304881ad258d8cf4e079ee5584223c9.png";

// import imgArtboard42 from "../assets/e4d9abe0f304881ad258d8cf4e079ee5584223c9.png";

import imgArtboard42 from "../../assets/e4d9abe0f304881ad258d8cf4e079ee5584223c9.png";

const tabs = [
  {
    id: 'experience',
    label: 'Experience',
    icon: Award,
    title: 'Decades of Multi-Sector Expertise',
    content: `With years of proven success across diverse industries from technology and creative 
    services to property and facilities management Holdco Holding brings a wealth of knowledge, 
    operational insight, and strategic perspective. Our multidisciplinary approach allows us to 
    lead companies through complex challenges, ensuring sustainable growth and long-term impact.`,
  },
  {
    id: 'reputation',
    label: 'Reputation',
    icon: Award,
    title: 'Trusted Partner Across Industries',
    content: `We've built a reputation for excellence through consistent delivery and strategic 
    leadership. Our portfolio companies benefit from our proven track record and industry recognition.`,
  },
  {
    id: 'communication',
    label: 'Communication',
    icon: MessageSquare,
    title: 'Transparent and Collaborative',
    content: `Open communication is at the heart of everything we do. We believe in fostering strong 
    relationships through transparency, active listening, and collaborative problem-solving.`,
  },
  {
    id: 'technology',
    label: 'Technology',
    icon: Cpu,
    title: 'Innovation-Driven Solutions',
    content: `We leverage cutting-edge technology and digital transformation strategies to keep our 
    portfolio companies at the forefront of their industries.`,
  },
];

export function WhyUs() {
  const [activeTab, setActiveTab] = useState('experience');

  const activeContent = tabs.find(tab => tab.id === activeTab);

  return (
    <section className="py-24 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-wide uppercase">
            Why Us
          </h2>
          <div className="w-24 h-1 bg-[#CA2026] mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Image */}
          <div className="relative h-[400px] lg:h-[390px] rounded-2xl overflow-hidden">
            <img
              src={imgArtboard42}
              alt="Why choose us"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>

          {/* Right: Tabs */}
          <div className="space-y-8">
            {/* Tab Navigation */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`
                      flex flex-col items-center gap-2 p-4 rounded-xl transition-all duration-300
                      ${activeTab === tab.id
                        ? 'bg-[#CA2026] text-white shadow-lg'
                        : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                      }
                    `}
                  >
                    <Icon className="w-6 h-6" />
                    <span className="text-sm font-medium text-center">{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Tab Content */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">
                {activeContent?.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {activeContent?.content}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
