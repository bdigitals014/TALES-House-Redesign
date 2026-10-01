import { ArrowRight, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

interface EditorialStorySectionProps {
  onOpenStoryModal: () => void;
}

export function EditorialStorySection({ onOpenStoryModal }: EditorialStorySectionProps) {
  return (
    <section id="story" className="relative w-full py-28 lg:py-36 bg-[#24070C] text-[#FAF7F2] overflow-hidden border-b border-[#3D0B12]">
      {/* Background Editorial Image Layer */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1800&auto=format&fit=crop"
          alt="Artisanal African textile craftsmanship"
          fallbackTitle="Ancestral Weave & Contemporary Tailoring"
          fallbackCategory="Craftsmanship Heritage"
          className="w-full h-full object-cover opacity-25 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#24070C] via-[#24070C]/90 to-[#24070C]/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-black/40 via-transparent to-black/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Story Text Block */}
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[1px] bg-[#C4551E]" />
              <span className="text-xs uppercase tracking-[0.3em] font-sans font-semibold text-[#E5DFD5]">
                THE STORIES WE CARRY
              </span>
            </div>

            <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-[#FAF7F2] leading-[1.08] mb-8 [text-wrap:balance]">
              "Every piece <br />
              <span className="italic font-normal text-[#FAF7F2]/90">begins somewhere."</span>
            </h2>

            <p className="font-serif text-xl sm:text-2xl text-[#FAF7F2]/80 leading-relaxed font-light max-w-2xl mb-8">
              In the sunlit ateliers of Lagos and the heritage handlooms of West Africa, silk, gold, and leather meet centuries of ancestral memory before arriving at Cavendish Square.
            </p>

            <div className="border-l-2 border-[#C4551E] pl-6 py-2 mb-10 max-w-xl">
              <p className="text-sm font-sans text-[#FAF7F2]/70 leading-relaxed">
                Featured Brand Profile: <strong className="text-white font-medium">Atelier Omoluabi</strong>. 
                Discover how founder Adeola Adeleke reclaims ancestral Yoruba Aso Oke weaving to craft bespoke double-breasted overcoats for the modern London vanguard.
              </p>
            </div>

            <div>
              <button
                onClick={onOpenStoryModal}
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#FAF7F2] text-[#141210] hover:bg-[#C4551E] hover:text-white transition-colors duration-300 font-sans text-xs tracking-[0.2em] uppercase font-semibold group shadow-xl"
              >
                <span>Discover Atelier Omoluabi's Story</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Visual Composition (Editorial Portrait / Detail) */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="relative p-3 border border-white/20 bg-white/5 backdrop-blur-sm">
              <div className="h-[460px] overflow-hidden bg-black/40">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop"
                  alt="Atelier Omoluabi Couture"
                  fallbackTitle="Atelier Omoluabi"
                  fallbackCategory="Savile Row Silhouette"
                  className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="mt-3 flex items-center justify-between text-[11px] font-sans text-white/60 tracking-widest uppercase">
                <span>Figure 01 · Aso Oke Suit</span>
                <span>London Salon</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
