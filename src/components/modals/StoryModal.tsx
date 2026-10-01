import { X, Share2, BookOpen } from 'lucide-react';
import { JournalStory } from '../../data/talesData';
import { ImageWithFallback } from '../ImageWithFallback';

interface StoryModalProps {
  story: JournalStory | null;
  onClose: () => void;
}

export function StoryModal({ story, onClose }: StoryModalProps) {
  if (!story) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="bg-[#FAF7F2] text-[#141210] w-full max-w-3xl max-h-[90vh] overflow-y-auto border border-[#E5DFD5] shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Utility Bar */}
        <div className="sticky top-0 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E5DFD5] px-6 py-4 flex items-center justify-between z-20">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-sans text-[#58111A] font-semibold">
            <span>The House Journal</span>
            <span aria-hidden="true">·</span>
            <span>{story.category}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 hover:bg-black/5 text-[#141210] transition-colors"
            aria-label="Close story"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-12">
          {/* Header Metadata */}
          <div className="flex items-center gap-3 text-xs font-sans text-[#141210]/60 uppercase tracking-widest mb-3">
            <span>By {story.author}</span>
            <span>·</span>
            <span>{story.date}</span>
            <span>·</span>
            <span>{story.readTime}</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl text-[#141210] font-normal tracking-tight leading-[1.1] mb-6 [text-wrap:balance]">
            {story.title}
          </h1>

          {/* Lead Image */}
          <div className="h-72 sm:h-96 w-full overflow-hidden bg-[#EAE3D9] mb-8 border border-[#E5DFD5]">
            <ImageWithFallback
              src={story.image}
              alt={story.title}
              fallbackTitle={story.title}
              fallbackCategory={story.category}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Pull Quote */}
          {story.pullQuote && (
            <div className="border-y border-[#58111A]/20 py-6 my-8 text-center max-w-xl mx-auto">
              <p className="font-serif italic text-2xl sm:text-3xl text-[#58111A] leading-relaxed">
                "{story.pullQuote}"
              </p>
            </div>
          )}

          {/* Body Prose with Drop Cap */}
          <div className="space-y-6 text-sm sm:text-base text-[#141210]/85 font-sans leading-relaxed max-w-prose mx-auto">
            {story.contentParagraphs.map((para, idx) => (
              <p
                key={idx}
                className={
                  idx === 0
                    ? 'first-letter:text-5xl first-letter:font-serif first-letter:font-normal first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-[#58111A]'
                    : ''
                }
              >
                {para}
              </p>
            ))}
          </div>

          {/* End Mark */}
          <div className="mt-12 pt-8 border-t border-[#E5DFD5] flex items-center justify-between">
            <span className="font-serif italic text-sm text-[#141210]/60">
              Published at 28 Cavendish Square, London
            </span>

            <button
              onClick={onClose}
              className="px-6 py-2.5 border border-[#141210] text-[#141210] hover:bg-[#141210] hover:text-[#FAF7F2] transition-colors text-xs font-sans uppercase tracking-widest font-semibold"
            >
              Close Reading View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
