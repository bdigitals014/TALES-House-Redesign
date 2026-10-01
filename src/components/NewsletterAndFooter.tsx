import { useState } from 'react';
import { ArrowRight, Check, Instagram, Linkedin, Mail, MapPin } from 'lucide-react';
import { VISIT_DETAILS } from '../data/talesData';

interface NewsletterAndFooterProps {
  onOpenShowcaseModal: () => void;
  onOpenAppointmentModal: () => void;
}

export function NewsletterAndFooter({ onOpenShowcaseModal, onOpenAppointmentModal }: NewsletterAndFooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubscribed(true);
      setEmail('');
    }, 600);
  };

  return (
    <>
      {/* Newsletter Section */}
      <section className="py-20 lg:py-28 bg-[#141210] text-[#FAF7F2] border-b border-white/10 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C4551E]" />
            <span className="text-xs uppercase tracking-[0.25em] font-sans font-semibold text-[#FAF7F2]/80">
              THE HOUSE DISPATCH
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#FAF7F2] font-normal tracking-tight mb-4 [text-wrap:balance]">
            Stay close to the House.
          </h2>

          <p className="text-sm sm:text-base text-[#FAF7F2]/75 font-sans leading-relaxed max-w-xl mx-auto mb-8">
            Discover new brands, upcoming events, stories and what's happening at TALES House. Delivered with curatorial restraint.
          </p>

          {subscribed ? (
            <div className="bg-white/5 border border-white/20 p-6 max-w-md mx-auto animate-in fade-in duration-300">
              <div className="flex items-center justify-center gap-2 text-[#C4551E] mb-2">
                <Check className="w-5 h-5" />
                <span className="font-serif text-lg text-white">Welcome to the House circle.</span>
              </div>
              <p className="text-xs text-[#FAF7F2]/70 font-sans">
                You will receive our seasonal collection preview and salon invitations.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 bg-white/5 border border-white/20 px-5 py-3.5 text-xs sm:text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#C4551E] font-sans"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3.5 bg-[#FAF7F2] text-[#141210] hover:bg-[#C4551E] hover:text-white transition-colors text-xs font-sans tracking-[0.15em] uppercase font-semibold whitespace-nowrap disabled:opacity-50"
              >
                {isSubmitting ? 'JOINING...' : 'JOIN THE HOUSE'}
              </button>
            </form>
          )}

          <p className="text-[11px] text-[#FAF7F2]/40 font-sans mt-4">
            No spam. We respect your privacy. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* Refined Luxury Footer */}
      <footer className="bg-[#121110] text-[#FAF7F2] pt-20 pb-12 border-t border-white/5 font-sans">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <a
                href="#"
                className="font-serif text-3xl tracking-[0.2em] font-medium text-white block mb-4"
              >
                TALES HOUSE
              </a>
              <p className="text-sm font-serif italic text-[#FAF7F2]/75 max-w-sm mb-6 leading-relaxed">
                A permanent destination for African and diaspora luxury. Located at 28 Cavendish Square, Westminster, London.
              </p>
              <div className="text-xs text-[#FAF7F2]/60 space-y-1">
                <p>28 Cavendish Square, London W1G 0DB</p>
                <p>Monday – Saturday: 10:00 – 19:00 · Sunday: 12:00 – 18:00</p>
              </div>
            </div>

            {/* Navigation Column */}
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] text-[#FAF7F2]/50 font-semibold mb-4">
                Explore
              </h4>
              <ul className="space-y-2.5 text-xs text-[#FAF7F2]/80">
                <li><a href="#brands" className="hover:text-white transition-colors">Resident Brands</a></li>
                <li><a href="#experience" className="hover:text-white transition-colors">The Experience</a></li>
                <li><a href="#story" className="hover:text-white transition-colors">Brand Story</a></li>
                <li><a href="#events" className="hover:text-white transition-colors">Events & Salons</a></li>
                <li><a href="#journal" className="hover:text-white transition-colors">Stories & Journal</a></li>
                <li><a href="#visit" className="hover:text-white transition-colors">Visit Cavendish Square</a></li>
              </ul>
            </div>

            {/* Founders & Residencies Column */}
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] text-[#FAF7F2]/50 font-semibold mb-4">
                For Founders
              </h4>
              <ul className="space-y-2.5 text-xs text-[#FAF7F2]/80">
                <li>
                  <button onClick={onOpenShowcaseModal} className="hover:text-white transition-colors text-left">
                    Residency Opportunities
                  </button>
                </li>
                <li>
                  <button onClick={onOpenShowcaseModal} className="hover:text-white transition-colors text-left">
                    Clothing & Fashion (From £1,500)
                  </button>
                </li>
                <li>
                  <button onClick={onOpenShowcaseModal} className="hover:text-white transition-colors text-left">
                    Accessories Vitrine (From £500)
                  </button>
                </li>
                <li>
                  <button onClick={onOpenShowcaseModal} className="hover:text-white transition-colors text-left">
                    Daily Pop-up Space (£330/day)
                  </button>
                </li>
                <li>
                  <button onClick={onOpenShowcaseModal} className="text-[#C4551E] hover:underline font-medium text-left">
                    Apply for Residency →
                  </button>
                </li>
              </ul>
            </div>

            {/* Concierge & Contact */}
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] text-[#FAF7F2]/50 font-semibold mb-4">
                Concierge
              </h4>
              <ul className="space-y-2.5 text-xs text-[#FAF7F2]/80">
                <li>
                  <button onClick={onOpenAppointmentModal} className="hover:text-white transition-colors text-left">
                    Private Styling Bookings
                  </button>
                </li>
                <li>
                  <a href="mailto:concierge@taleshouselondon.co.uk" className="hover:text-white transition-colors">
                    concierge@taleshouselondon.co.uk
                  </a>
                </li>
                <li>
                  <a href="tel:+442079460128" className="hover:text-white transition-colors">
                    +44 (0) 20 7946 0128
                  </a>
                </li>
                <li className="pt-2 flex items-center gap-4 text-[#FAF7F2]/70">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="mailto:press@taleshouselondon.co.uk"
                    className="hover:text-white transition-colors"
                    aria-label="Email Press"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Rules & Copyright */}
          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#FAF7F2]/50 gap-4">
            <p>© {new Date().getFullYear()} TALES House London Ltd. All rights reserved. 28 Cavendish Square, London W1G 0DB.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Residence</a>
              <a href="#" className="hover:text-white transition-colors">Visitor Protocol</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
