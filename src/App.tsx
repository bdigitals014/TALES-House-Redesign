import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroVideo } from './components/HeroVideo';
import { ResidentBrandsSection } from './components/ResidentBrandsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { EditorialStorySection } from './components/EditorialStorySection';
import { EventsSection } from './components/EventsSection';
import { ShowcaseSection } from './components/ShowcaseSection';
import { VisitSection } from './components/VisitSection';
import { JournalSection } from './components/JournalSection';
import { NewsletterAndFooter } from './components/NewsletterAndFooter';

import { BrandModal } from './components/modals/BrandModal';
import { EventModal } from './components/modals/EventModal';
import { StoryModal } from './components/modals/StoryModal';
import { ShowcaseModal } from './components/modals/ShowcaseModal';
import { AppointmentModal } from './components/modals/AppointmentModal';

import { ResidentBrand, HouseEvent, JournalStory, ShowcaseOpportunity, JOURNAL_STORIES } from './data/talesData';

export default function App() {
  // Modal states
  const [selectedBrand, setSelectedBrand] = useState<ResidentBrand | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<HouseEvent | null>(null);
  const [selectedStory, setSelectedStory] = useState<JournalStory | null>(null);
  const [showcaseModalOpen, setShowcaseModalOpen] = useState(false);
  const [selectedOpportunity, setSelectedOpportunity] = useState<ShowcaseOpportunity | null>(null);
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [appointmentBrandName, setAppointmentBrandName] = useState<string | undefined>(undefined);

  const handleOpenShowcase = (opp?: ShowcaseOpportunity) => {
    setSelectedOpportunity(opp || null);
    setShowcaseModalOpen(true);
  };

  const handleOpenAppointment = (brandName?: string) => {
    setAppointmentBrandName(brandName);
    setAppointmentModalOpen(true);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#141210] flex flex-col font-sans selection:bg-[#58111A] selection:text-white">
      {/* 1. Navigation Top Bar Contract */}
      <Navbar
        onOpenShowcaseModal={() => handleOpenShowcase()}
        onOpenAppointmentModal={() => handleOpenAppointment()}
      />

      <main className="flex-1">
        {/* 1. Full Screen Video Hero */}
        <HeroVideo
          onVisitClick={() => scrollToSection('visit')}
          onDiscoverBrandsClick={() => scrollToSection('brands')}
        />

        {/* 2. Current Resident Brands */}
        <ResidentBrandsSection
          onSelectBrand={(brand) => setSelectedBrand(brand)}
        />

        {/* 3. Experience TALES House (01-Shop, 02-Meet, 03-Experience, 04-Belong) */}
        <ExperienceSection
          onPlanVisitClick={() => scrollToSection('visit')}
        />

        {/* 4. Editorial Brand Story */}
        <EditorialStorySection
          onOpenStoryModal={() => setSelectedStory(JOURNAL_STORIES[0])}
        />

        {/* 5. Coming Up / Events & Cultural Salons */}
        <EventsSection
          onSelectEvent={(event) => setSelectedEvent(event)}
        />

        {/* 6. Showcase Your Brand (For Founders & Creators) */}
        <ShowcaseSection
          onOpenShowcaseModal={(opp) => handleOpenShowcase(opp)}
        />

        {/* 7. Visit TALES House (28 Cavendish Square) */}
        <VisitSection
          onOpenAppointmentModal={() => handleOpenAppointment()}
        />

        {/* 8. Stories / House Journal */}
        <JournalSection
          onSelectStory={(story) => setSelectedStory(story)}
        />
      </main>

      {/* 9. Newsletter Dispatch + Refined Luxury Footer */}
      <NewsletterAndFooter
        onOpenShowcaseModal={() => handleOpenShowcase()}
        onOpenAppointmentModal={() => handleOpenAppointment()}
      />

      {/* Interactive Modals */}
      <BrandModal
        brand={selectedBrand}
        onClose={() => setSelectedBrand(null)}
        onRequestAppointment={(brandName) => handleOpenAppointment(brandName)}
      />

      <EventModal
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />

      <StoryModal
        story={selectedStory}
        onClose={() => setSelectedStory(null)}
      />

      {showcaseModalOpen && (
        <ShowcaseModal
          initialOpportunity={selectedOpportunity}
          onClose={() => {
            setShowcaseModalOpen(false);
            setSelectedOpportunity(null);
          }}
        />
      )}

      {appointmentModalOpen && (
        <AppointmentModal
          initialBrandName={appointmentBrandName}
          onClose={() => {
            setAppointmentModalOpen(false);
            setAppointmentBrandName(undefined);
          }}
        />
      )}
    </div>
  );
}
