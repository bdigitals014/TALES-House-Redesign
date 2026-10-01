import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { EXPERIENCE_STEPS } from '../data/talesData';
import { ImageWithFallback } from './ImageWithFallback';

interface ExperienceSectionProps {
  onPlanVisitClick: () => void;
}

export function ExperienceSection({ onPlanVisitClick }: ExperienceSectionProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const activeStep = EXPERIENCE_STEPS[activeIndex];

  return (
    <section id="experience" className="py-24 lg:py-32 bg-[#F4EFEA] border-b border-[#E5DFD5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-6 h-[1px] bg-[#58111A]" />
            <span className="text-xs uppercase tracking-[0.25em] font-sans font-semibold text-[#58111A]">
              MORE THAN RETAIL
            </span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#141210] font-normal tracking-tight mb-4 [text-wrap:balance]">
            Come for the brands. <br />
            <span className="italic">Stay for the stories.</span>
          </h2>
          <p className="text-base text-[#141210]/75 font-sans leading-relaxed max-w-xl">
            TALES House redefines what physical luxury means in central London: an intimate nexus of retail, dialogue, cultural programming, and lifelong patron community.
          </p>
        </div>

        {/* 2-Column Interactive Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: 4 Interactive Chapters */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {EXPERIENCE_STEPS.map((step, idx) => {
              const isActive = activeIndex === idx;

              return (
                <div
                  key={step.number}
                  onClick={() => setActiveIndex(idx)}
                  onMouseEnter={() => setActiveIndex(idx)}
                  className={`p-6 transition-all duration-300 cursor-pointer border-l-2 ${
                    isActive
                      ? 'border-[#58111A] bg-[#FAF7F2] shadow-sm'
                      : 'border-transparent bg-transparent hover:bg-black/5 hover:border-black/20'
                  }`}
                >
                  <div className="flex items-baseline justify-between mb-2">
                    <span
                      className={`font-serif text-xl sm:text-2xl tracking-widest ${
                        isActive ? 'text-[#58111A] font-semibold' : 'text-[#141210]/40'
                      }`}
                    >
                      {step.number} — {step.title}
                    </span>
                    {isActive && (
                      <span className="text-[10px] uppercase tracking-widest font-sans text-[#58111A] font-semibold">
                        Viewing
                      </span>
                    )}
                  </div>

                  <h3
                    className={`font-serif text-lg sm:text-xl mb-2 transition-colors ${
                      isActive ? 'text-[#141210]' : 'text-[#141210]/70'
                    }`}
                  >
                    {step.headline}
                  </h3>

                  {isActive && (
                    <div className="mt-4 pt-4 border-t border-[#E5DFD5] animate-in fade-in duration-300">
                      <p className="text-xs sm:text-sm text-[#141210]/75 font-sans leading-relaxed mb-4">
                        {step.description}
                      </p>

                      <ul className="space-y-2 mb-6">
                        {step.details.map((detail, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2.5 text-xs text-[#141210]/80">
                            <Check className="w-3.5 h-3.5 text-[#58111A] shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="bg-[#FAF7F2] p-3 border-l border-[#C4551E] text-xs font-serif italic text-[#141210]/70">
                        "{step.curatorNote}"
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            <div className="pt-4">
              <button
                onClick={onPlanVisitClick}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-sans font-semibold text-[#58111A] hover:text-[#141210] transition-colors"
              >
                <span>Plan Your House Visit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Large Dynamic Photography & Curatorial Card */}
          <div className="lg:col-span-7 sticky top-28">
            <div className="relative h-[480px] sm:h-[580px] lg:h-[660px] w-full overflow-hidden bg-[#EAE3D9] border border-[#E5DFD5]">
              <ImageWithFallback
                key={activeStep.image}
                src={activeStep.image}
                alt={activeStep.title}
                fallbackTitle={`${activeStep.number} — ${activeStep.title}`}
                fallbackCategory="The TALES House Experience"
                className="w-full h-full object-cover transition-all duration-700 ease-out"
              />

              {/* Measured Scrim for Editorial Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

              {/* Bottom Editorial Caption */}
              <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                <div className="flex items-center gap-3 text-xs uppercase tracking-widest font-sans text-white/80 mb-2">
                  <span>Chapter {activeStep.number}</span>
                  <span>·</span>
                  <span>{activeStep.subtitle}</span>
                </div>
                <h4 className="font-serif text-2xl sm:text-3xl text-white font-normal mb-1">
                  {activeStep.headline}
                </h4>
                <p className="text-xs text-white/70 font-sans tracking-wide">
                  28 Cavendish Square · Central London Sanctuary
                </p>
              </div>

              {/* Step indicator pills */}
              <div className="absolute top-6 right-6 flex items-center gap-1.5 z-10 bg-black/40 backdrop-blur-md px-3 py-1.5 border border-white/20">
                {EXPERIENCE_STEPS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      activeIndex === i ? 'bg-white scale-110' : 'bg-white/40 hover:bg-white/70'
                    }`}
                    aria-label={`Go to experience chapter ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
