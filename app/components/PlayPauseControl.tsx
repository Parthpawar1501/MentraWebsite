"use client";

import { useState, useEffect } from "react";

interface PlayPauseControlProps {
  videoRef: React.RefObject<HTMLVideoElement>;
  className?: string;
}

export function PlayPauseControl({ videoRef, className = "" }: PlayPauseControlProps) {
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Sync state with video
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);

    // Check initial state
    setIsPlaying(!video.paused);

    return () => {
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
    };
  }, [videoRef]);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().catch((err) => {
        console.error("Error playing video:", err);
      });
    } else {
      video.pause();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      togglePlayPause();
    }
  };

  return (
    <button
      onClick={togglePlayPause}
      onKeyDown={handleKeyDown}
      className={`backdrop-blur-[5px] backdrop-filter bg-[rgba(255,255,255,0.4)] content-stretch flex items-center justify-center relative rounded-[32px] shrink-0 size-[40px] hover:bg-[rgba(255,255,255,0.6)] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent ${className}`}
      aria-label={isPlaying ? "Pause video" : "Play video"}
      aria-pressed={isPlaying}
    >
      {isPlaying ? (
        // Pause icon (two vertical bars)
        <svg
          className="w-5 h-5 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
        </svg>
      ) : (
        // Play icon (triangle)
        <svg
          className="w-5 h-5 text-white ml-0.5"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M8 5v14l11-7z" />
        </svg>
      )}
    </button>
  );
}
