import { FC } from "react";
import { useGeneralHooks } from "../../controllers/generalHooks";
import type { Track } from "../../interfaces";

type TrackItemProps = {
  track: Track;
  idx: number;
  nowPlaying: string | null;
  handleSound: (url: string, trackID: string) => void;
};

export const TrackItem: FC<TrackItemProps> = ({
  track,
  idx,
  nowPlaying,
  handleSound,
}) => {
  const { msToMinsAndSecs } = useGeneralHooks();

  return (
    <div
      className="rounded flex justify-between items-center mx-auto p-1 w-6/12 cursor-pointer hover:bg-opacity-5 hover:bg-white"
      key={track.id}
      onClick={() => handleSound(track.preview_url, track.id)}
    >
      <div className="flex items-center">
        <div className="w-10 flex justify-center items-center">
          <p
            className={`${
              nowPlaying === track.id ? "text-green" : "text-white"
            }`}
          >
            {idx + 1}
          </p>
        </div>
        <img
          src={track.album.images[2].url}
          alt={track.name}
          className="w-16 h-16"
        />
        <div className="ml-3">
          <p
            className={`font-bold ${
              nowPlaying === track.id ? "text-green" : "text-white"
            }`}
          >
            {track.name}
          </p>
          <div className="flex">
            {track.artists.map((artist, indx, artists) => (
              <span className="text-gray" key={artist.id}>
                {artist.name}
                {indx !== artists.length - 1 && ",\u00A0"}
              </span>
            ))}
          </div>
        </div>
      </div>
      <span
        className={`tracking-tighter ${
          nowPlaying === track.id ? "text-green" : "text-white"
        }`}
      >
        {msToMinsAndSecs(track.duration_ms)}
      </span>
    </div>
  );
};
