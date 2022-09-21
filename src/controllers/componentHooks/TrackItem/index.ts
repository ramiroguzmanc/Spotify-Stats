import type { Artist } from "../../../interfaces";

export const useTrackItem = () => {
  const artitsToString = (artists: Array<Artist>): string => {
    let artistsStr = "";
    artists.map((artist, index, arr) => {
      index + 1 === arr.length
        ? (artistsStr += `${artist.name}`)
        : (artistsStr += `${artist.name}, `);
    });
    return artistsStr;
  };

  return { artitsToString };
};
