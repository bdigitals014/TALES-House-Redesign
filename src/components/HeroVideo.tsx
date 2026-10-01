import { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, ArrowRight, ArrowUpRight } from 'lucide-react';
import { VIDEO_REELS } from '../data/talesData';

interface HeroVideoProps {
  onVisitClick: () => void;
  onDiscoverBrandsClick: () => void;
}

export function HeroVideo({ onVisitClick, onDiscoverBrandsClick }: HeroVideoProps) {
  const [activeReelIndex, setActiveReelIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const currentReel = VIDEO_REELS[activeReelIndex];

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section className="relative w-full h-[calc(100vh-80px)] min-h-[640px] max-h-[1080px] bg-[#121110] text-[#FAF7F2] overflow-hidden flex flex-col justify-between">
      {/* Background Video Layer */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <video
          key={currentReel.url}
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          poster={currentReel.poster}
          className="w-full h-full object-cover scale-105 transition-transform duration-1000 ease-out"
        >
          <source src={currentReel.url} type="video/mp4" />
        </video>

        {/* Cinematic Scrim Gradient (Measured dark overlay for 4.5:1 text contrast) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#141210]/95 via-[#141210]/55 to-[#141210]/35 z-10 pointer-events-none" />

        {/* Subtle Luxury Film Grain Texture */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/20 to-black/60 z-10 pointer-events-none" />
      </div>

      {/* Top Spacer & Video Reel Selector */}
      <div className="relative z-20 max-w-7xl mx-auto w-full px-6 lg:px-10 pt-8 flex items-center justify-between">
        <div className="inline-flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#C4551E] animate-pulse" />
          <span className="text-[11px] tracking-[0.25em] uppercase font-sans text-[#FAF7F2]/80 font-medium">
            Cavendish Square Cinema Reel
          </span>
        </div>

        {/* Discrete Reel Switcher & Audio Controls */}
        <div className="flex items-center gap-4 text-xs font-sans">
          <div className="hidden md:flex items-center gap-1 border border-white/15 bg-black/30 backdrop-blur-md p-1">
            {VIDEO_REELS.map((reel, idx) => (
              <button
                key={reel.id}
                onClick={() => setActiveReelIndex(idx)}
                className={`px-3 py-1 text-[11px] tracking-widest uppercase transition-colors ${
                  activeReelIndex === idx
                    ? 'bg-[#FAF7F2] text-[#141210] font-medium'
                    : 'text-[#FAF7F2]/70 hover:text-white'
                }`}
              >
                {reel.title.split(' ')[1] || reel.title}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-1 border border-white/15 bg-black/30 backdrop-blur-md p-1">
            <button
              onClick={togglePlay}
              className="p-1.5 text-[#FAF7F2]/80 hover:text-white transition-colors"
              title={isPlaying ? 'Pause video' : 'Play video'}
              aria-label={isPlaying ? 'Pause video' : 'Play video'}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={toggleMute}
              className="p-1.5 text-[#FAF7F2]/80 hover:text-white transition-colors"
              title={isMuted ? 'Unmute video' : 'Mute video'}
              aria-label={isMuted ? 'Unmute video' : 'Mute video'}
            >
              {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Main Center Editorial Content */}
      <div className="relative z-20 max-w-7xl mx-auto w-full px-6 lg:px-10 py-12 flex flex-col justify-center">
        <div className="max-w-4xl">
          {/* Location / Supporting Eyebrow */}
          <div className="mb-4">
            <span className="text-xs md:text-sm tracking-[0.3em] uppercase font-sans text-[#E5DFD5] font-semibold">
              OXFORD STREET, LONDON.
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[1.02] font-normal text-[#FAF7F2] mb-6 [text-wrap:balance]">
            AFRICAN LUXURY <br className="hidden sm:inline" />
            HAS A NEW HOME.
          </h1>

          {/* Supporting Copy */}
          <p className="font-serif italic text-lg sm:text-xl md:text-2xl text-[#FAF7F2]/90 max-w-2xl font-light mb-8 leading-relaxed">
            Not a pop-up. Not a moment. <br className="hidden sm:inline" />
            A permanent home for African and diaspora brands.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <button
              onClick={onVisitClick}
              className="px-8 py-4 bg-[#FAF7F2] text-[#141210] hover:bg-[#C4551E] hover:text-white transition-colors duration-300 font-sans text-xs tracking-[0.2em] uppercase font-semibold text-center border border-[#FAF7F2] shadow-lg"
            >
              VISIT TALES HOUSE
            </button>

            <button
              onClick={onDiscoverBrandsClick}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-[#FAF7F2] hover:bg-white/10 transition-colors duration-300 font-sans text-xs tracking-[0.2em] uppercase font-medium border border-white/30 backdrop-blur-sm group"
            >
              <span>DISCOVER THE BRANDS</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Information Strip */}
      <div className="relative z-20 border-t border-white/15 bg-black/40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex flex-col sm:flex-row items-center justify-between text-xs tracking-widest uppercase font-sans text-[#FAF7F2]/85 gap-3">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FAF7F2]" />
            <span>28 Cavendish Square, London</span>
          </div>

          <div className="hidden sm:block text-white/30">|</div>

          <div className="flex items-center gap-2">
            <span className="text-[#C4551E] font-semibold">●</span>
            <span className="font-medium text-[#FAF7F2]">Now Open</span>
          </div>

          <div className="hidden sm:block text-white/30">|</div>

          <div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=28+Cavendish+Square+London+W1G+0DB"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#FAF7F2] hover:text-[#C4551E] transition-colors underline underline-offset-4"
            >
              <span>Get Directions</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
