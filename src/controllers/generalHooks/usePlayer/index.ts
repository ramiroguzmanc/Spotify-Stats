import { useState } from "react";

const player = new Audio();
player.volume = 0.1;

export const usePlayer = () => {
  const [nowPlaying, setNowPlaying] = useState<string | null>(null);

  const playSound = (url: string, trackID: string): void => {
    player.src = url;
    player.play();
    setNowPlaying(trackID);
  };

  const pauseSound = (): void => {
    player.pause();
    setNowPlaying(null);
  };

  const handleSound = (url: string, trackID: string): void => {
    if (nowPlaying === null) {
      playSound(url, trackID);
    } else if (nowPlaying === trackID) {
      player.paused ? player.play() : player.pause();
    } else {
      pauseSound();
      playSound(url, trackID);
    }
  };

  return { handleSound, nowPlaying };
};
