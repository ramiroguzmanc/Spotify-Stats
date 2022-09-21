import { useState } from "react";

const player = new Audio();
player.volume = 0.1;

export const usePlayer = () => {
  const [nowPlaying, setNowPlaying] = useState<string | null>(null);
  const [paused, setPaused] = useState<boolean | null>(null);

  const playSound = (url: string, trackID: string): void => {
    player.src = url;
    player.play();
    setNowPlaying(trackID);
    setPaused(false);
  };

  const pauseSound = (): void => {
    player.pause();
    setNowPlaying(null);
    setPaused(true);
  };

  player.addEventListener("ended", () => {
    setNowPlaying(null);
  });

  const handleSound = (url: string, trackID: string): void => {
    if (nowPlaying === null) {
      playSound(url, trackID);
    } else if (nowPlaying === trackID) {
      if (player.paused) {
        player.play();
        setPaused(false);
      } else {
        player.pause();
        setPaused(true);
      }
    } else {
      pauseSound();
      playSound(url, trackID);
    }
  };

  return { handleSound, nowPlaying, paused };
};
