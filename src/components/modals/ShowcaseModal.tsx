import { useState } from 'react';
import { X, Check, Sparkles, Building2, UploadCloud } from 'lucide-react';
import { SHOWCASE_OPPORTUNITIES, ShowcaseOpportunity } from '../../data/talesData';

interface ShowcaseModalProps {
  initialOpportunity?: ShowcaseOpportunity | null;
  onClose: () => void;
}

export function ShowcaseModal({ initialOpportunity, onClose }: ShowcaseModalProps) {
  const [selectedPackage, setSelectedPackage] = useState<string>(
    initialOpportunity?.id || SHOWCASE_OPPORTUNITIES[0].id
  );
  const [brandName, setBrandName] = useState('');
  const [founderName, setFounderName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [portfolioUrl, setPortfolioUrl] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const currentPackage = SHOWCASE_OPPORTUNITIES.find(p => p.id === selectedPackage) || SHOWCASE_OPPORTUNITIES[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="bg-[#FAF7F2] text-[#141210] w-full max-w-3xl max-h-[92vh] overflow-y-auto border border-[#E5DFD5] shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Top Bar */}
        <div className="sticky top-0 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E5DFD5] px-6 py-4 flex items-center justify-between z-20">
          <span className="text-xs uppercase tracking-widest font-sans text-[#58111A] font-semibold">
            Founder & Creator Application · 28 Cavendish Square
          </span>
          <button
            onClick={onClose}
            className="p-1.5 hover:bg-black/5 text-[#141210] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-10">
          {isSubmitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-[#58111A] text-white flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8" />
              </div>
              <span className="text-xs uppercase tracking-[0.25em] font-sans font-semibold text-[#58111A] block mb-2">
                APPLICATION RECEIVED
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#141210] font-normal mb-3">
                Welcome to the Curation Pipeline
              </h3>
              <p className="text-sm font-sans text-[#141210]/80 max-w-md mx-auto mb-6">
                Thank you, <strong className="text-[#141210]">{founderName}</strong>. Your dossier for <strong className="text-[#141210]">{brandName}</strong> ({currentPackage.category}) has been submitted to the TALES House selection committee.
              </p>
              <div className="bg-[#F4EFEA] border border-[#E5DFD5] p-5 max-w-md mx-auto text-xs font-sans text-[#141210]/70 mb-8 text-left space-y-2">
                <p className="font-semibold text-[#141210]">Next Steps:</p>
                <p>1. Our curatorial director reviews your lookbook within <strong>48 hours</strong>.</p>
                <p>2. Qualified applicants receive an invitation for a video consultation or in-person walk-through at 28 Cavendish Square.</p>
                <p>3. Terms and residency dates are confirmed upon mutual agreement.</p>
              </div>
              <button
                onClick={onClose}
                className="px-8 py-3.5 bg-[#141210] text-[#FAF7F2] text-xs font-sans uppercase tracking-widest font-semibold hover:bg-[#58111A] transition-colors"
              >
                Done
              </button>
            </div>
          ) : (
            <div>
              <div className="mb-8">
                <h2 className="font-serif text-3xl sm:text-4xl text-[#141210] font-normal tracking-tight mb-2">
                  Apply for Residency
                </h2>
                <p className="text-xs sm:text-sm text-[#141210]/70 font-sans">
                  Join our permanent roster of visionary African and diaspora luxury brands at London’s premier address.
                </p>
              </div>

              {/* Package Selection Tabs */}
              <div className="mb-8">
                <label className="block text-xs font-sans uppercase tracking-widest text-[#58111A] font-semibold mb-3">
                  Select Showcase Opportunity
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {SHOWCASE_OPPORTUNITIES.map((pkg) => (
                    <button
                      key={pkg.id}
                      type="button"
                      onClick={() => setSelectedPackage(pkg.id)}
                      className={`p-4 text-left border transition-all ${
                        selectedPackage === pkg.id
                          ? 'bg-[#FAF7F2] border-[#58111A] shadow-sm ring-1 ring-[#58111A]'
                          : 'bg-[#F4EFEA] border-[#E5DFD5] hover:border-black/30'
                      }`}
                    >
                      <span className="text-[10px] uppercase font-sans tracking-widest text-[#58111A] font-bold block mb-1">
                        {pkg.category}
                      </span>
                      <span className="font-serif text-lg font-medium text-[#141210] block">
                        {pkg.priceTag}
                      </span>
                      <span className="text-[11px] text-[#141210]/60 font-sans block">
                        {pkg.billing}
                      </span>
                    </button>
                  ))}
                </div>
                <div className="mt-3 p-3 bg-[#F4EFEA] border border-[#E5DFD5] text-xs text-[#141210]/75 font-sans">
                  <strong>Includes:</strong> {currentPackage.features.slice(0, 3).join(' · ')}
                </div>
              </div>

              {/* Application Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-sans text-[#141210]/70 uppercase tracking-wider mb-1">
                      Brand Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={brandName}
                      onChange={(e) => setBrandName(e.target.value)}
                      placeholder="e.g. Sika Studios"
                      className="w-full bg-white border border-[#E5DFD5] px-4 py-2.5 text-xs text-[#141210] focus:outline-none focus:border-[#58111A]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-sans text-[#141210]/70 uppercase tracking-wider mb-1">
                      Founder / Creative Director *
                    </label>
                    <input
                      type="text"
                      required
                      value={founderName}
                      onChange={(e) => setFounderName(e.target.value)}
                      placeholder="e.g. Kweku Asamoah"
                      className="w-full bg-white border border-[#E5DFD5] px-4 py-2.5 text-xs text-[#141210] focus:outline-none focus:border-[#58111A]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-sans text-[#141210]/70 uppercase tracking-wider mb-1">
                      Business Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="founder@brand.com"
                      className="w-full bg-white border border-[#E5DFD5] px-4 py-2.5 text-xs text-[#141210] focus:outline-none focus:border-[#58111A]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-sans text-[#141210]/70 uppercase tracking-wider mb-1">
                      Origin / Headquarters *
                    </label>
                    <input
                      type="text"
                      required
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      placeholder="e.g. Lagos, Nigeria / London, UK"
                      className="w-full bg-white border border-[#E5DFD5] px-4 py-2.5 text-xs text-[#141210] focus:outline-none focus:border-[#58111A]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-sans text-[#141210]/70 uppercase tracking-wider mb-1">
                    Digital Lookbook / Website / Instagram Link *
                  </label>
                  <input
                    type="url"
                    required
                    value={portfolioUrl}
                    onChange={(e) => setPortfolioUrl(e.target.value)}
                    placeholder="https://instagram.com/yourbrand or portfolio link"
                    className="w-full bg-white border border-[#E5DFD5] px-4 py-2.5 text-xs text-[#141210] focus:outline-none focus:border-[#58111A]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-sans text-[#141210]/70 uppercase tracking-wider mb-1">
                    Brand Ethos & Desired Residency Timeline
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Briefly describe your production craftsmanship, target collection pieces, and preferred start date..."
                    className="w-full bg-white border border-[#E5DFD5] px-4 py-2.5 text-xs text-[#141210] focus:outline-none focus:border-[#58111A]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[#141210] text-[#FAF7F2] hover:bg-[#58111A] transition-colors text-xs font-sans tracking-[0.2em] uppercase font-semibold disabled:opacity-50"
                  >
                    {isSubmitting ? 'SUBMITTING DOSSIER...' : 'SUBMIT RESIDENCY APPLICATION →'}
                  </button>
                  <p className="text-[11px] text-[#141210]/50 font-sans text-center mt-2">
                    Curatorial committee meets weekly. You will hear back within 48 hours.
                  </p>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
