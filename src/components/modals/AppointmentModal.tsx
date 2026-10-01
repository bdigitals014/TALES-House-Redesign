import { useState } from 'react';
import { X, Check, Calendar, Clock, Sparkles } from 'lucide-react';

interface AppointmentModalProps {
  initialBrandName?: string;
  onClose: () => void;
}

export function AppointmentModal({ initialBrandName, onClose }: AppointmentModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('2026-10-12');
  const [time, setTime] = useState('14:00');
  const [interest, setInterest] = useState(initialBrandName ? `Private Viewing for ${initialBrandName}` : 'General Private Styling & Tour');
  const [isBooked, setIsBooked] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsBooked(true);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="bg-[#FAF7F2] text-[#141210] w-full max-w-xl max-h-[90vh] overflow-y-auto border border-[#E5DFD5] shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E5DFD5] px-6 py-4 flex items-center justify-between z-20">
          <span className="text-xs uppercase tracking-widest font-sans text-[#58111A] font-semibold">
            House Concierge · Private Appointment
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
          {isBooked ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 rounded-full bg-[#58111A] text-white flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8" />
              </div>
              <span className="text-xs uppercase tracking-[0.25em] font-sans font-semibold text-[#58111A] block mb-2">
                APPOINTMENT RESERVED
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#141210] font-normal mb-3">
                We Look Forward to Welcoming You
              </h3>
              <p className="text-sm font-sans text-[#141210]/80 max-w-md mx-auto mb-6">
                A dedicated House Stylist has been assigned for your visit on <strong>{date} at {time}</strong>.
              </p>
              <div className="bg-[#F4EFEA] border border-[#E5DFD5] p-4 text-xs font-sans text-[#141210]/70 mb-8 space-y-1 text-left">
                <p><strong>Location:</strong> 28 Cavendish Square, London W1G 0DB</p>
                <p><strong>Service:</strong> {interest}</p>
                <p className="text-[11px] text-[#58111A] mt-2">Includes complimentary champagne reception and private dressing suite.</p>
              </div>
              <button
                onClick={onClose}
                className="px-8 py-3 bg-[#141210] text-[#FAF7F2] text-xs font-sans uppercase tracking-widest font-semibold hover:bg-[#58111A] transition-colors"
              >
                Done
              </button>
            </div>
          ) : (
            <div>
              <div className="mb-6">
                <h2 className="font-serif text-3xl text-[#141210] font-normal tracking-tight mb-2">
                  Book Private Styling
                </h2>
                <p className="text-xs sm:text-sm text-[#141210]/70 font-sans">
                  Experience personal curation, bespoke fittings, and private access to our Cavendish Square salons.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-sans text-[#141210]/70 uppercase tracking-wider mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Lady Clara Morrison"
                    className="w-full bg-white border border-[#E5DFD5] px-4 py-2.5 text-xs text-[#141210] focus:outline-none focus:border-[#58111A]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-sans text-[#141210]/70 uppercase tracking-wider mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="client@domain.com"
                      className="w-full bg-white border border-[#E5DFD5] px-4 py-2.5 text-xs text-[#141210] focus:outline-none focus:border-[#58111A]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-sans text-[#141210]/70 uppercase tracking-wider mb-1">
                      Telephone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+44 7..."
                      className="w-full bg-white border border-[#E5DFD5] px-4 py-2.5 text-xs text-[#141210] focus:outline-none focus:border-[#58111A]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-sans text-[#141210]/70 uppercase tracking-wider mb-1">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full bg-white border border-[#E5DFD5] px-4 py-2.5 text-xs text-[#141210] focus:outline-none focus:border-[#58111A]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-sans text-[#141210]/70 uppercase tracking-wider mb-1">
                      Preferred Time Slot
                    </label>
                    <select
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full bg-white border border-[#E5DFD5] px-4 py-2.5 text-xs text-[#141210] focus:outline-none focus:border-[#58111A]"
                    >
                      <option value="11:00">11:00 BST (Morning Salon)</option>
                      <option value="14:00">14:00 BST (Afternoon Styling)</option>
                      <option value="16:30">16:30 BST (Late Afternoon)</option>
                      <option value="18:00">18:00 BST (Evening Private Access)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-sans text-[#141210]/70 uppercase tracking-wider mb-1">
                    Special Styling Requests / Designers of Interest
                  </label>
                  <input
                    type="text"
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    placeholder="e.g. Atelier Omoluabi tailoring, Sankofa leathergoods..."
                    className="w-full bg-white border border-[#E5DFD5] px-4 py-2.5 text-xs text-[#141210] focus:outline-none focus:border-[#58111A]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-[#141210] text-[#FAF7F2] hover:bg-[#58111A] transition-colors text-xs font-sans tracking-[0.2em] uppercase font-semibold disabled:opacity-50"
                >
                  {isSubmitting ? 'CONFIRMING APPOINTMENT...' : 'CONFIRM PRIVATE APPOINTMENT'}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
