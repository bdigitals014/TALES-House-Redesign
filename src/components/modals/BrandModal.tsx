import { X, MapPin, Sparkles, Calendar, ArrowRight } from 'lucide-react';
import { ResidentBrand } from '../../data/talesData';
import { ImageWithFallback } from '../ImageWithFallback';

interface BrandModalProps {
  brand: ResidentBrand | null;
  onClose: () => void;
  onRequestAppointment: (brandName: string) => void;
}

export function BrandModal({ brand, onClose, onRequestAppointment }: BrandModalProps) {
  if (!brand) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="bg-[#FAF7F2] text-[#141210] w-full max-w-4xl max-h-[90vh] overflow-y-auto border border-[#E5DFD5] shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header with Close button */}
        <div className="sticky top-0 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E5DFD5] px-6 py-4 flex items-center justify-between z-20">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-sans text-[#58111A] font-semibold">
            <span>Resident Dossier</span>
            <span aria-hidden="true">·</span>
            <span>{brand.category}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 hover:bg-black/5 text-[#141210] transition-colors"
            aria-label="Close dossier"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-10">
          {/* Main Hero Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10 items-start">
            <div className="md:col-span-7 h-[420px] sm:h-[480px] bg-[#EAE3D9] overflow-hidden">
              <ImageWithFallback
                src={brand.image}
                alt={brand.name}
                fallbackTitle={brand.name}
                fallbackCategory={brand.category}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="md:col-span-5 flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] font-sans text-[#141210]/60 block mb-1">
                  Origin: {brand.origin}
                </span>

                <h2 className="font-serif text-3xl sm:text-4xl text-[#141210] font-medium tracking-tight mb-4">
                  {brand.name}
                </h2>

                <div className="border-l-2 border-[#58111A] pl-4 py-1 mb-6">
                  <p className="font-serif italic text-base text-[#141210]/80">
                    "{brand.featuredQuote}"
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-[#141210]/80 font-sans leading-relaxed mb-6">
                  {brand.description}
                </p>

                <div className="bg-[#F4EFEA] p-4 border border-[#E5DFD5] text-xs font-sans space-y-1.5 mb-6">
                  <div className="flex items-center gap-2 text-[#58111A] font-medium uppercase tracking-wider">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>In-House Location:</span>
                  </div>
                  <p className="text-[#141210]">{brand.showroomLocation}</p>
                  <p className="text-[#141210]/60 text-[11px]">28 Cavendish Square, London W1G 0DB</p>
                </div>
              </div>

              <button
                onClick={() => {
                  onClose();
                  onRequestAppointment(brand.name);
                }}
                className="w-full py-3.5 bg-[#141210] text-[#FAF7F2] hover:bg-[#58111A] transition-colors text-xs font-sans tracking-[0.2em] uppercase font-semibold text-center"
              >
                REQUEST PRIVATE VIEWING
              </button>
            </div>
          </div>

          {/* Specialties / Highlights */}
          <div className="pt-8 border-t border-[#E5DFD5]">
            <h4 className="text-xs uppercase tracking-widest font-sans font-semibold text-[#58111A] mb-4">
              Current Resident Collection Highlights
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {brand.specialties.map((item, idx) => (
                <div key={idx} className="p-4 bg-[#F4EFEA] border border-[#E5DFD5] text-xs font-sans">
                  <span className="text-[10px] text-[#58111A] font-bold block mb-1">0{idx + 1}</span>
                  <span className="font-medium text-[#141210]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
