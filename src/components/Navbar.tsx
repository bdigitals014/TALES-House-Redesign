import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenShowcaseModal: () => void;
  onOpenAppointmentModal: () => void;
}

export function Navbar({ onOpenShowcaseModal, onOpenAppointmentModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Quiet Utility Bar */}
      <div className="bg-[#141210] text-[#FAF7F2]/80 text-[11px] tracking-widest uppercase py-2 px-6 border-b border-white/5 flex items-center justify-between">
        <span className="font-sans">28 Cavendish Square, London · Just off Oxford Street</span>
        <div className="hidden sm:flex items-center gap-4 text-[#FAF7F2]/60">
          <span>Now Open · Mon–Sat 10:00–19:00</span>
        </div>
      </div>

      {/* Main Top Bar Contract: 3 zones */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-sm border-b border-[#E5DFD5]'
            : 'bg-[#FAF7F2] border-b border-[#E5DFD5]/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="font-serif text-2xl lg:text-3xl tracking-[0.2em] font-medium text-[#141210] hover:text-[#58111A] transition-colors whitespace-nowrap"
          >
            TALES HOUSE
          </a>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-8 text-[13px] tracking-wider uppercase font-sans font-medium text-[#141210]/75">
            <a
              href="#brands"
              className="hover:text-[#58111A] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-[#58111A] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
            >
              Resident Brands
            </a>
            <a
              href="#experience"
              className="hover:text-[#58111A] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-[#58111A] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
            >
              The Experience
            </a>
            <a
              href="#story"
              className="hover:text-[#58111A] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-[#58111A] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
            >
              Brand Story
            </a>
            <a
              href="#events"
              className="hover:text-[#58111A] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-[#58111A] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
            >
              Events
            </a>
            <a
              href="#visit"
              className="hover:text-[#58111A] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-[#58111A] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
            >
              Visit
            </a>
            <a
              href="#journal"
              className="hover:text-[#58111A] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-[#58111A] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
            >
              Blog
            </a>
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenShowcaseModal}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-medium tracking-wider uppercase bg-[#141210] text-[#FAF7F2] hover:bg-[#58111A] transition-colors duration-200 border border-[#141210] whitespace-nowrap"
            >
              <span>Showcase Brand</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#141210] hover:text-[#58111A] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FAF7F2] border-b border-[#E5DFD5] px-6 py-8 animate-in fade-in duration-200">
            <div className="flex flex-col gap-6 text-base tracking-widest uppercase font-serif">
              <a
                href="#brands"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#58111A] border-b border-[#E5DFD5]/40 pb-3"
              >
                Resident Brands
              </a>
              <a
                href="#experience"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#58111A] border-b border-[#E5DFD5]/40 pb-3"
              >
                The Experience
              </a>
              <a
                href="#story"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#58111A] border-b border-[#E5DFD5]/40 pb-3"
              >
                Brand Story
              </a>
              <a
                href="#events"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#58111A] border-b border-[#E5DFD5]/40 pb-3"
              >
                Events & Salons
              </a>
              <a
                href="#showcase"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#58111A] border-b border-[#E5DFD5]/40 pb-3"
              >
                Showcase Your Brand
              </a>
              <a
                href="#visit"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#58111A] border-b border-[#E5DFD5]/40 pb-3"
              >
                Visit Cavendish Square
              </a>
              <a
                href="#journal"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#58111A] border-b border-[#E5DFD5]/40 pb-3"
              >
                Journal & Stories
              </a>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E5DFD5] flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenShowcaseModal();
                }}
                className="w-full py-3 text-xs tracking-widest uppercase font-medium bg-[#141210] text-white hover:bg-[#58111A] transition-colors"
              >
                Apply for Residency
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAppointmentModal();
                }}
                className="w-full py-3 text-xs tracking-widest uppercase font-medium border border-[#141210] text-[#141210] hover:bg-[#141210] hover:text-white transition-colors"
              >
                Book Private Styling
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
