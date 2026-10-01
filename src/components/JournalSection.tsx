import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { JOURNAL_STORIES, JournalStory } from '../data/talesData';
import { ImageWithFallback } from './ImageWithFallback';

interface JournalSectionProps {
  onSelectStory: (story: JournalStory) => void;
}

export function JournalSection({ onSelectStory }: JournalSectionProps) {
  return (
    <section id="journal" className="py-24 lg:py-32 bg-[#FAF7F2] border-b border-[#E5DFD5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-6 h-[1px] bg-[#58111A]" />
              <span className="text-xs uppercase tracking-[0.25em] font-sans font-semibold text-[#58111A]">
                FROM THE HOUSE
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#141210] font-normal tracking-tight">
              Stories worth discovering.
            </h2>
          </div>

          <p className="max-w-md text-sm text-[#141210]/70 font-sans leading-relaxed">
            Essays on craft, archival conversations, and behind-the-scenes dispatches from the designers reshaping the global luxury landscape.
          </p>
        </div>

        {/* 3 Editorial Article Previews */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {JOURNAL_STORIES.map((story) => (
            <article
              key={story.id}
              onClick={() => onSelectStory(story)}
              className="group cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Article Image */}
                <div className="h-64 sm:h-72 w-full overflow-hidden bg-[#EAE3D9] mb-5 border border-[#E5DFD5]">
                  <ImageWithFallback
                    src={story.image}
                    alt={story.title}
                    fallbackTitle={story.title}
                    fallbackCategory={story.category}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Minimal Metadata (Zero-Pill Rule) */}
                <div className="flex items-center gap-2 text-xs font-sans uppercase tracking-widest text-[#58111A] font-semibold mb-2">
                  <span>{story.category}</span>
                  <span aria-hidden="true" className="text-[#141210]/30">·</span>
                  <span className="text-[#141210]/60 font-normal">{story.readTime}</span>
                </div>

                {/* Article Headline */}
                <h3 className="font-serif text-2xl text-[#141210] font-normal tracking-tight leading-snug mb-3 group-hover:text-[#58111A] transition-colors">
                  {story.title}
                </h3>

                {/* Excerpt */}
                <p className="text-xs sm:text-sm text-[#141210]/70 font-sans leading-relaxed line-clamp-3 mb-6">
                  {story.excerpt}
                </p>
              </div>

              <div className="pt-3 border-t border-[#E5DFD5]/60 flex items-center justify-between">
                <span className="text-xs font-serif italic text-[#141210]/50">
                  By {story.author}
                </span>

                <span className="inline-flex items-center gap-1.5 text-xs font-sans uppercase tracking-widest font-semibold text-[#141210] group-hover:text-[#58111A] transition-colors">
                  <span>Read Story</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Explore All Stories CTA */}
        <div className="mt-16 pt-8 border-t border-[#E5DFD5] flex items-center justify-center">
          <button
            onClick={() => onSelectStory(JOURNAL_STORIES[0])}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-sans font-semibold text-[#141210] hover:text-[#58111A] transition-colors"
          >
            <span>EXPLORE ALL STORIES & THE HOUSE JOURNAL</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
