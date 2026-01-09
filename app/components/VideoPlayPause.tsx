import { useState, useEffect } from "react";

/**
 * Video Play/Pause Control Component
 * 
 * Reusable play/pause button component for video controls.
 * Matches existing button design patterns in the codebase.
 */

interface VideoPlayPauseProps {
  videoRef: React.RefObject<HTMLVideoElement> | null;
  className?: string;
}

export default function VideoPlayPause({ videoRef, className = "" }: VideoPlayPauseProps) {
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!videoRef) return;
    const video = videoRef.current;
    if (!video) return;

    // Sync state with video element
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);

    // Set initial state
    setIsPlaying(!video.paused);

    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
    };
  }, [videoRef]);
  
  if (!videoRef) return null;

  const togglePlayPause = () => {
    if (!videoRef) return;
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      togglePlayPause();
    }
  };

  return (
    <button
      onClick={togglePlayPause}
      onKeyDown={handleKeyDown}
      className={`backdrop-blur-[5px] backdrop-filter bg-[rgba(255,255,255,0.4)] content-stretch flex items-center justify-center relative rounded-[32px] shrink-0 size-[40px] cursor-pointer hover:bg-[rgba(255,255,255,0.6)] transition-all duration-300 active:scale-95 ${className}`}
      aria-label={isPlaying ? "Pause video" : "Play video"}
      aria-pressed={isPlaying}
    >
      <div className="relative shrink-0 size-[24px]">
        <svg 
          className="block size-full" 
          fill="none" 
          preserveAspectRatio="none" 
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          {isPlaying ? (
            // Pause icon
            <g>
              <rect x="6" y="4" width="4" height="16" fill="white" rx="1" />
              <rect x="14" y="4" width="4" height="16" fill="white" rx="1" />
            </g>
          ) : (
            // Play icon
            <path 
              d="M8 5V19L19 12L8 5Z" 
              fill="white"
            />
          )}
        </svg>
      </div>
    </button>
  );
}
