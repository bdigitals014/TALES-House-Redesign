import { useState } from 'react';
import { X, Calendar, Clock, MapPin, Check, Ticket } from 'lucide-react';
import { HouseEvent } from '../../data/talesData';
import { ImageWithFallback } from '../ImageWithFallback';

interface EventModalProps {
  event: HouseEvent | null;
  onClose: () => void;
}

export function EventModal({ event, onClose }: EventModalProps) {
  const [guestName, setGuestName] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [guestsCount, setGuestsCount] = useState('1');
  const [isReserved, setIsReserved] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!event) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsReserved(true);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="bg-[#FAF7F2] text-[#141210] w-full max-w-3xl max-h-[90vh] overflow-y-auto border border-[#E5DFD5] shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E5DFD5] px-6 py-4 flex items-center justify-between z-20">
          <span className="text-xs uppercase tracking-widest font-sans text-[#58111A] font-semibold">
            House Salon Invitation · {event.category}
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
          {isReserved ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 rounded-full bg-[#58111A] text-white flex items-center justify-center mx-auto mb-6">
                <Ticket className="w-8 h-8" />
              </div>
              <span className="text-xs uppercase tracking-[0.25em] font-sans font-semibold text-[#58111A] block mb-2">
                RSVP CONFIRMED
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#141210] font-normal mb-3">
                Guest Pass Reserved
              </h3>
              <p className="text-sm font-sans text-[#141210]/80 max-w-md mx-auto mb-6">
                Thank you, <strong className="text-[#141210]">{guestName}</strong>. Your invitation for <strong>{guestsCount} guest(s)</strong> has been added to the House guest list for <strong>{event.title}</strong>.
              </p>
              <div className="bg-[#F4EFEA] border border-[#E5DFD5] p-4 max-w-sm mx-auto text-xs font-sans text-[#141210]/70 mb-8 space-y-1">
                <p><strong>Date:</strong> {event.displayDate}</p>
                <p><strong>Time:</strong> {event.time}</p>
                <p><strong>Location:</strong> {event.location}</p>
                <p className="text-[11px] text-[#58111A] mt-2">Check-in with House Concierge upon arrival at 28 Cavendish Square.</p>
              </div>
              <button
                onClick={onClose}
                className="px-8 py-3 bg-[#141210] text-[#FAF7F2] text-xs font-sans uppercase tracking-widest font-semibold hover:bg-[#58111A] transition-colors"
              >
                Close & Return
              </button>
            </div>
          ) : (
            <div>
              <div className="h-64 sm:h-72 w-full overflow-hidden mb-6 bg-[#EAE3D9]">
                <ImageWithFallback
                  src={event.image}
                  alt={event.title}
                  fallbackTitle={event.title}
                  fallbackCategory={event.category}
                  className="w-full h-full object-cover"
                />
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#141210] font-normal tracking-tight mb-4">
                {event.title}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 bg-[#F4EFEA] border border-[#E5DFD5] text-xs font-sans mb-6">
                <div>
                  <span className="text-[#141210]/50 block uppercase tracking-wider text-[10px]">Date</span>
                  <span className="font-medium text-[#141210]">{event.displayDate}</span>
                </div>
                <div>
                  <span className="text-[#141210]/50 block uppercase tracking-wider text-[10px]">Time</span>
                  <span className="font-medium text-[#141210]">{event.time}</span>
                </div>
                <div>
                  <span className="text-[#141210]/50 block uppercase tracking-wider text-[10px]">Venue</span>
                  <span className="font-medium text-[#141210]">{event.location}</span>
                </div>
              </div>

              <p className="text-sm font-sans text-[#141210]/80 leading-relaxed mb-4">
                {event.description}
              </p>

              <div className="border-l border-[#58111A] pl-3 py-1 mb-8 text-xs font-serif italic text-[#141210]/70">
                Speaker & Facilitator: {event.speaker} · {event.capacity}
              </div>

              {/* RSVP Form */}
              <form onSubmit={handleSubmit} className="border-t border-[#E5DFD5] pt-6 space-y-4">
                <h4 className="text-xs uppercase tracking-widest font-sans font-semibold text-[#58111A]">
                  Reserve Your Attendance
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-sans text-[#141210]/70 uppercase tracking-wider mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                      placeholder="e.g. Maya Chen"
                      className="w-full bg-white border border-[#E5DFD5] px-4 py-2.5 text-xs text-[#141210] focus:outline-none focus:border-[#58111A]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-sans text-[#141210]/70 uppercase tracking-wider mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={guestEmail}
                      onChange={(e) => setGuestEmail(e.target.value)}
                      placeholder="e.g. maya@example.com"
                      className="w-full bg-white border border-[#E5DFD5] px-4 py-2.5 text-xs text-[#141210] focus:outline-none focus:border-[#58111A]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-sans text-[#141210]/70 uppercase tracking-wider mb-1">
                    Number of Guests
                  </label>
                  <select
                    value={guestsCount}
                    onChange={(e) => setGuestsCount(e.target.value)}
                    className="w-full bg-white border border-[#E5DFD5] px-4 py-2.5 text-xs text-[#141210] focus:outline-none focus:border-[#58111A]"
                  >
                    <option value="1">1 Person (Just Me)</option>
                    <option value="2">2 Persons (Guest + 1)</option>
                    <option value="3">3 Persons</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-[#141210] text-[#FAF7F2] hover:bg-[#58111A] transition-colors text-xs font-sans tracking-[0.2em] uppercase font-semibold disabled:opacity-50"
                >
                  {isSubmitting ? 'RESERVING GUEST PASS...' : 'CONFIRM RSVP FOR SALON'}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
