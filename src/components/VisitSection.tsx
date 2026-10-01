import { ArrowUpRight, MapPin, Clock, Train, ShieldCheck } from 'lucide-react';
import { VISIT_DETAILS } from '../data/talesData';
import { ImageWithFallback } from './ImageWithFallback';

interface VisitSectionProps {
  onOpenAppointmentModal: () => void;
}

export function VisitSection({ onOpenAppointmentModal }: VisitSectionProps) {
  return (
    <section id="visit" className="py-24 lg:py-32 bg-[#FAF7F2] border-b border-[#E5DFD5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Large Photograph of TALES House Space */}
          <div className="lg:col-span-6">
            <div className="relative h-[480px] sm:h-[580px] w-full overflow-hidden bg-[#EAE3D9] border border-[#E5DFD5] group">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop"
                alt="TALES House 28 Cavendish Square London"
                fallbackTitle="28 Cavendish Square"
                fallbackCategory="Mayfair / Marylebone Sanctuary"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Discreet Physical Plaque Overlay */}
              <div className="absolute top-6 left-6 bg-[#FAF7F2]/95 backdrop-blur-md px-5 py-4 border border-[#E5DFD5] shadow-lg max-w-xs">
                <span className="text-[10px] uppercase tracking-[0.25em] font-sans font-semibold text-[#58111A] block mb-1">
                  PHYSICAL RESIDENCE
                </span>
                <p className="font-serif text-lg text-[#141210] font-medium leading-tight">
                  28 Cavendish Square
                </p>
                <p className="text-xs text-[#141210]/60 font-sans mt-1">
                  London W1G 0DB · Westminster
                </p>
              </div>

              {/* Bottom Quick Badge */}
              <div className="absolute bottom-6 right-6 bg-[#141210] text-[#FAF7F2] px-4 py-2 text-xs font-sans tracking-widest uppercase">
                2 Min Walk from Oxford Circus
              </div>
            </div>
          </div>

          {/* Right Column: Destination Information */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="w-6 h-[1px] bg-[#58111A]" />
                <span className="text-xs uppercase tracking-[0.25em] font-sans font-semibold text-[#58111A]">
                  VISIT US
                </span>
              </div>

              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#141210] font-normal tracking-tight mb-6 [text-wrap:balance]">
                Find us just off <br />
                <span className="italic">Oxford Street.</span>
              </h2>

              <p className="text-base text-[#141210]/75 font-sans leading-relaxed mb-8">
                Tucked into the historic Georgian grandeur of Cavendish Square, TALES House offers a calm, contemplative luxury shopping sanctuary mere moments from the energy of Oxford Circus and Regent Street.
              </p>

              {/* Address Details */}
              <div className="border-t border-b border-[#E5DFD5] py-6 mb-6 space-y-4">
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-sans font-semibold text-[#58111A] mb-1">
                    House Address
                  </h4>
                  <p className="font-serif text-2xl text-[#141210]">
                    {VISIT_DETAILS.addressLine1}
                  </p>
                  <p className="text-sm font-sans text-[#141210]/80">
                    {VISIT_DETAILS.addressLine2}, {VISIT_DETAILS.city} {VISIT_DETAILS.postcode}
                  </p>
                  <p className="text-xs font-serif italic text-[#141210]/60 mt-0.5">
                    {VISIT_DETAILS.landmark}
                  </p>
                </div>

                {/* Opening Hours */}
                <div className="pt-2">
                  <h4 className="text-xs uppercase tracking-widest font-sans font-semibold text-[#58111A] mb-2">
                    Opening Hours
                  </h4>
                  <div className="space-y-1 text-sm font-sans text-[#141210]/80">
                    {VISIT_DETAILS.hours.map((item, idx) => (
                      <div key={idx} className="flex justify-between py-1 border-b border-[#E5DFD5]/40 text-xs sm:text-sm">
                        <span className="text-[#141210]/70">{item.days}</span>
                        <span className="font-medium text-[#141210]">{item.time}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Transit Links */}
                <div className="pt-2">
                  <h4 className="text-xs uppercase tracking-widest font-sans font-semibold text-[#58111A] mb-2">
                    Underground & Access
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-sans text-[#141210]/70">
                    {VISIT_DETAILS.transit.slice(0, 2).map((station, sIdx) => (
                      <div key={sIdx} className="bg-[#F4EFEA] p-3 border border-[#E5DFD5]">
                        <span className="font-semibold text-[#141210] block">{station.station}</span>
                        <span className="text-[11px] block">{station.lines}</span>
                        <span className="text-[11px] text-[#58111A] font-medium">{station.walking}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href={VISIT_DETAILS.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#141210] text-[#FAF7F2] hover:bg-[#58111A] transition-colors text-xs font-sans tracking-[0.2em] uppercase font-semibold text-center"
              >
                <span>GET DIRECTIONS</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenAppointmentModal}
                className="inline-flex items-center justify-center px-8 py-4 border border-[#141210] text-[#141210] hover:bg-[#141210] hover:text-white transition-colors text-xs font-sans tracking-[0.2em] uppercase font-medium text-center"
              >
                BOOK PRIVATE STYLING
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
