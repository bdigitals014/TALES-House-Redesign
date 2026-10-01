import { useState } from 'react';
import { ArrowRight, ArrowUpRight, Calendar, Clock, MapPin } from 'lucide-react';
import { UPCOMING_EVENTS, HouseEvent } from '../data/talesData';
import { ImageWithFallback } from './ImageWithFallback';

interface EventsSectionProps {
  onSelectEvent: (event: HouseEvent) => void;
}

export function EventsSection({ onSelectEvent }: EventsSectionProps) {
  const [showAllEvents, setShowAllEvents] = useState(false);

  const featuredEvent = UPCOMING_EVENTS.find(e => e.featured) || UPCOMING_EVENTS[0];
  const secondaryEvents = UPCOMING_EVENTS.filter(e => e.id !== featuredEvent.id);

  return (
    <section id="events" className="py-24 lg:py-32 bg-[#FAF7F2] border-b border-[#E5DFD5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-6 h-[1px] bg-[#58111A]" />
              <span className="text-xs uppercase tracking-[0.25em] font-sans font-semibold text-[#58111A]">
                AT TALES HOUSE
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#141210] font-normal tracking-tight">
              Coming Up
            </h2>
          </div>

          <p className="max-w-md text-sm text-[#141210]/70 font-sans leading-relaxed">
            From intimate founder salons and bespoke masterclasses to seasonal collection previews, experience the cultural heartbeat of Cavendish Square.
          </p>
        </div>

        {/* Prominent Lead Event */}
        <div className="mb-16 border border-[#E5DFD5] bg-[#F4EFEA] overflow-hidden group">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left: Large Event Image */}
            <div className="lg:col-span-7 h-[360px] sm:h-[440px] lg:h-[500px] overflow-hidden relative">
              <ImageWithFallback
                src={featuredEvent.image}
                alt={featuredEvent.title}
                fallbackTitle={featuredEvent.title}
                fallbackCategory={featuredEvent.category}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute top-4 left-4 bg-[#141210] text-[#FAF7F2] px-3.5 py-1 text-[11px] font-sans uppercase tracking-widest">
                Featured Salon
              </div>
            </div>

            {/* Right: Featured Event Details */}
            <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 text-xs font-sans text-[#58111A] uppercase tracking-widest font-semibold mb-3">
                  <span>{featuredEvent.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{featuredEvent.capacity}</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#141210] font-normal tracking-tight mb-4 group-hover:text-[#58111A] transition-colors">
                  {featuredEvent.title}
                </h3>

                {/* Date & Time Clean Metadata */}
                <div className="space-y-1.5 text-xs font-sans text-[#141210]/75 uppercase tracking-wider mb-6 pb-6 border-b border-[#E5DFD5]">
                  <p className="font-medium text-[#141210]">{featuredEvent.displayDate}</p>
                  <p>{featuredEvent.time}</p>
                  <p className="text-[#141210]/60">{featuredEvent.location}</p>
                </div>

                <p className="text-sm font-sans text-[#141210]/80 leading-relaxed mb-6">
                  {featuredEvent.description}
                </p>

                <p className="text-xs font-serif italic text-[#141210]/60 mb-6">
                  With: {featuredEvent.speaker}
                </p>
              </div>

              <div>
                <button
                  onClick={() => onSelectEvent(featuredEvent)}
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#141210] text-[#FAF7F2] hover:bg-[#58111A] transition-colors text-xs font-sans tracking-[0.2em] uppercase font-semibold"
                >
                  <span>VIEW EVENT</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 2–3 Additional Upcoming Events in Compact Editorial Layout */}
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-[#E5DFD5]">
            <span className="text-xs uppercase tracking-[0.2em] font-sans font-semibold text-[#141210]/60">
              Upcoming Salons & Masterclasses
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {secondaryEvents.map((event) => (
              <div
                key={event.id}
                onClick={() => onSelectEvent(event)}
                className="group cursor-pointer flex flex-col justify-between border-t border-[#E5DFD5] pt-6 hover:border-[#58111A] transition-colors"
              >
                <div>
                  <div className="h-48 overflow-hidden bg-[#EAE3D9] mb-4">
                    <ImageWithFallback
                      src={event.image}
                      alt={event.title}
                      fallbackTitle={event.title}
                      fallbackCategory={event.category}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="flex items-center gap-2 text-xs font-sans text-[#58111A] uppercase tracking-widest font-semibold mb-2">
                    <span>{event.category}</span>
                  </div>

                  <h4 className="font-serif text-xl text-[#141210] font-medium tracking-tight mb-2 group-hover:text-[#58111A] transition-colors">
                    {event.title}
                  </h4>

                  <p className="text-xs font-sans text-[#141210]/60 uppercase tracking-wider mb-3">
                    {event.displayDate} · {event.time}
                  </p>

                  <p className="text-xs text-[#141210]/75 font-sans leading-relaxed line-clamp-2 mb-4">
                    {event.description}
                  </p>
                </div>

                <div className="pt-2">
                  <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-sans font-semibold text-[#141210] group-hover:text-[#58111A] transition-colors">
                    <span>Reserve Guest Pass</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Events CTA */}
        <div className="mt-14 pt-8 border-t border-[#E5DFD5] flex items-center justify-center">
          <button
            onClick={() => onSelectEvent(featuredEvent)}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-sans font-semibold text-[#141210] hover:text-[#58111A] transition-colors"
          >
            <span>VIEW ALL UPCOMING EVENTS & SALONS</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
