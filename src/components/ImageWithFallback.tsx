import { useState } from 'react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
  fallbackCategory?: string;
}

export function ImageWithFallback({
  src,
  alt,
  className = '',
  fallbackTitle,
  fallbackCategory,
}: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  if (hasError) {
    return (
      <div
        className={`bg-gradient-to-br from-[#2D080F] via-[#1C1917] to-[#121110] flex flex-col items-center justify-center p-6 text-center text-[#FAF7F2] select-none ${className}`}
      >
        <div className="w-12 h-12 rounded-full border border-[#FAF7F2]/20 flex items-center justify-center mb-3">
          <span className="font-serif italic text-lg text-[#C4551E]">T</span>
        </div>
        {fallbackCategory && (
          <span className="text-[10px] uppercase tracking-widest text-[#FAF7F2]/60 mb-1 font-sans">
            {fallbackCategory}
          </span>
        )}
        <h4 className="font-serif text-lg text-[#FAF7F2] font-light max-w-xs">
          {fallbackTitle || alt}
        </h4>
        <span className="text-xs text-[#FAF7F2]/40 mt-2 font-serif italic">
          TALES House London · 28 Cavendish Square
        </span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-[#EAE3D9] ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-[#EAE3D9] animate-pulse" />
      )}
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover transition-opacity duration-700 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
}
