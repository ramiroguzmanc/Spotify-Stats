import { useControllers } from "../../controllers";
import type { Track } from "../../interfaces";

type TrackItemProps = {
  track: Track;
  idx: number;
  nowPlaying: string | null;
  handleSound: (url: string, trackID: string) => void;
};

export const TrackItem = ({
  track,
  idx,
  nowPlaying,
  handleSound,
}: TrackItemProps) => {
  const { useGeneralHooks, useComponentHooks } = useControllers();
  const { msToMinsAndSecs } = useGeneralHooks();
  const { useTrackItem } = useComponentHooks();
  const { artitsToString } = useTrackItem();

  return (
    <div
      className="rounded flex justify-between items-center mx-auto p-1 cursor-pointer hover:bg-opacity-5 hover:bg-white w-10/12 max-w-xl"
      key={track.id}
      onClick={() => handleSound(track.preview_url, track.id)}
    >
      <div className="flex items-center w-full">
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
        <div className="ml-3 w-full">
          <p
            className={`font-bold ${
              nowPlaying === track.id ? "text-green" : "text-white"
            }`}
          >
            {track.name}
          </p>
          <div className="flex w-full">
            <p className="text-gray">{artitsToString(track.artists)}</p>
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
