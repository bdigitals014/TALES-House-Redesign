import { ArrowRight, ArrowUpRight, Sparkles } from 'lucide-react';
import { SHOWCASE_OPPORTUNITIES, ShowcaseOpportunity } from '../data/talesData';

interface ShowcaseSectionProps {
  onOpenShowcaseModal: (opportunity?: ShowcaseOpportunity) => void;
}

export function ShowcaseSection({ onOpenShowcaseModal }: ShowcaseSectionProps) {
  return (
    <section id="showcase" className="py-24 lg:py-32 bg-[#F4EFEA] border-b border-[#E5DFD5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-6 h-[1px] bg-[#58111A]" />
            <span className="text-xs uppercase tracking-[0.25em] font-sans font-semibold text-[#58111A]">
              FOR FOUNDERS & CREATORS
            </span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#141210] font-normal tracking-tight mb-4 [text-wrap:balance]">
            Your next chapter <br />
            <span className="italic">could begin here.</span>
          </h2>
          <p className="text-base text-[#141210]/75 font-sans leading-relaxed">
            TALES House provides permanent physical retail presence, full sales management, and direct access to London’s international luxury clientele. We welcome visionary fashion, leathergoods, jewellery, fragrance, and design houses.
          </p>
        </div>

        {/* 3 Clean Visual Preview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {SHOWCASE_OPPORTUNITIES.map((opp) => (
            <div
              key={opp.id}
              onClick={() => onOpenShowcaseModal(opp)}
              className="bg-[#FAF7F2] p-8 border border-[#E5DFD5] hover:border-[#58111A] transition-all duration-300 flex flex-col justify-between group cursor-pointer shadow-sm hover:shadow-md"
            >
              <div>
                <span className="text-xs uppercase tracking-[0.25em] font-sans font-semibold text-[#58111A] block mb-3">
                  {opp.category}
                </span>

                <div className="mb-4">
                  <span className="font-serif text-2xl lg:text-3xl font-medium text-[#141210] block">
                    {opp.priceTag}
                  </span>
                  <span className="text-xs text-[#141210]/60 font-sans tracking-wide">
                    {opp.billing}
                  </span>
                  {opp.discountNote && (
                    <span className="block mt-1 text-[11px] font-sans text-[#C4551E] font-medium tracking-wide">
                      {opp.discountNote}
                    </span>
                  )}
                </div>

                <p className="text-xs text-[#141210]/75 font-sans leading-relaxed mb-6 pt-3 border-t border-[#E5DFD5]">
                  {opp.overview}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E5DFD5] flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest font-sans font-semibold text-[#141210] group-hover:text-[#58111A] transition-colors">
                  View Opportunity
                </span>
                <ArrowUpRight className="w-4 h-4 text-[#141210] group-hover:text-[#58111A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
            </div>
          ))}
        </div>

        {/* Primary Action Button */}
        <div className="flex flex-col sm:flex-row items-center justify-between p-8 bg-[#141210] text-[#FAF7F2] gap-6">
          <div>
            <h4 className="font-serif text-2xl lg:text-3xl text-white font-normal mb-1">
              Ready to showcase at 28 Cavendish Square?
            </h4>
            <p className="text-xs sm:text-sm text-[#FAF7F2]/70 font-sans">
              Residency curation review takes 48 hours. Submit your brand lookbook and preferred dates.
            </p>
          </div>

          <button
            onClick={() => onOpenShowcaseModal()}
            className="px-8 py-4 bg-[#FAF7F2] text-[#141210] hover:bg-[#C4551E] hover:text-white transition-colors duration-300 font-sans text-xs tracking-[0.2em] uppercase font-semibold whitespace-nowrap"
          >
            SHOWCASE YOUR BRAND →
          </button>
        </div>
      </div>
    </section>
  );
}
