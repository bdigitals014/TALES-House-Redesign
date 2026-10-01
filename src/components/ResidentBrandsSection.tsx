import { useState } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { RESIDENT_BRANDS, ResidentBrand } from '../data/talesData';
import { ImageWithFallback } from './ImageWithFallback';

interface ResidentBrandsSectionProps {
  onSelectBrand: (brand: ResidentBrand) => void;
}

export function ResidentBrandsSection({ onSelectBrand }: ResidentBrandsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [showAllBrands, setShowAllBrands] = useState<boolean>(false);

  const categories = ['All', 'Haute Couture & Tailoring', 'Fine Leather & Bags', 'Jewellery & Adornment', 'Ready-to-Wear & Silks'];

  const filteredBrands = selectedCategory === 'All'
    ? RESIDENT_BRANDS
    : RESIDENT_BRANDS.filter(b => b.category === selectedCategory);

  const displayedBrands = showAllBrands ? filteredBrands : filteredBrands.slice(0, 4);

  return (
    <section id="brands" className="py-24 lg:py-32 bg-[#FAF7F2] border-b border-[#E5DFD5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-6 h-[1px] bg-[#58111A]" />
              <span className="text-xs uppercase tracking-[0.25em] font-sans font-semibold text-[#58111A]">
                NOW IN RESIDENCE
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#141210] font-normal tracking-tight [text-wrap:balance]">
              Meet the brands <br />
              <span className="italic">inside TALES House.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm text-[#141210]/70 font-sans leading-relaxed">
            A permanent stage for visionary creators from across Africa and the diaspora.
            Each residence is selected for exemplary craftsmanship, heritage materials, and contemporary luxury design.
          </p>
        </div>

        {/* Category Filters (Clean Segmented Text Tabs) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 border-b border-[#E5DFD5]/60 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs font-sans tracking-wider uppercase transition-colors whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-[#141210] text-[#FAF7F2] font-medium'
                  : 'text-[#141210]/60 hover:text-[#141210] hover:bg-black/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Asymmetric Editorial Brand Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {displayedBrands.map((brand, index) => {
            // Asymmetric layout logic: 1st and 4th card take 7 columns, 2nd and 3rd take 5 columns
            const isLarge = index % 3 === 0;
            const colSpan = isLarge ? 'md:col-span-7' : 'md:col-span-5';
            const imageHeight = isLarge ? 'h-[500px] lg:h-[600px]' : 'h-[420px] lg:h-[480px]';

            return (
              <div
                key={brand.id}
                className={`${colSpan} group cursor-pointer flex flex-col justify-between`}
                onClick={() => onSelectBrand(brand)}
              >
                {/* Large Editorial Photograph */}
                <div className={`relative overflow-hidden w-full ${imageHeight} bg-[#EAE3D9] mb-6`}>
                  <ImageWithFallback
                    src={brand.image}
                    alt={brand.name}
                    fallbackTitle={brand.name}
                    fallbackCategory={brand.category}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
                  
                  {/* Origin Badge */}
                  <div className="absolute top-4 left-4 bg-[#FAF7F2]/90 backdrop-blur-md px-3 py-1 text-[11px] font-sans uppercase tracking-widest text-[#141210]">
                    {brand.origin}
                  </div>

                  {/* Quick Action Overlay */}
                  <div className="absolute bottom-4 right-4 bg-[#141210] text-white p-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Unboxed Editorial Metadata (Zero-Pill Discipline) */}
                <div>
                  <div className="flex items-center gap-2 text-xs font-sans text-[#141210]/60 uppercase tracking-widest mb-1.5">
                    <span>{brand.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>Residency {brand.established}</span>
                  </div>

                  <h3 className="font-serif text-2xl lg:text-3xl text-[#141210] font-medium tracking-tight mb-2 group-hover:text-[#58111A] transition-colors">
                    {brand.name}
                  </h3>

                  <p className="font-serif italic text-base text-[#141210]/75 line-clamp-2 mb-4 leading-snug">
                    "{brand.tagline}"
                  </p>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectBrand(brand);
                    }}
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-sans font-semibold text-[#58111A] group-hover:translate-x-1 transition-all"
                  >
                    <span>Discover the Brand</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Brands CTA */}
        <div className="mt-16 pt-10 border-t border-[#E5DFD5] flex flex-col sm:flex-row items-center justify-between gap-6">
          <span className="text-xs font-sans uppercase tracking-widest text-[#141210]/60">
            Showing {displayedBrands.length} of {filteredBrands.length} resident houses
          </span>

          <button
            onClick={() => setShowAllBrands(!showAllBrands)}
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-[#141210] text-[#141210] hover:bg-[#141210] hover:text-[#FAF7F2] transition-colors text-xs font-sans tracking-[0.2em] uppercase font-medium"
          >
            <span>{showAllBrands ? 'SHOW LESS' : 'VIEW ALL RESIDENT BRANDS'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
