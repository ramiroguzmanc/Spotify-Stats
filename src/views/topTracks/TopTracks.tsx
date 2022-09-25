import { useComponents } from "../../components";
import { useControllers } from "../../controllers";
import type { Track } from "../../interfaces";

export const TopTracks = () => {
  const { useScreenHooks, useGeneralHooks } = useControllers();
  const { useTopTracks } = useScreenHooks();
  const { handleChange, tracks, term } = useTopTracks();
  const { TrackItem, MuiSlider } = useComponents();
  const { usePlayer } = useGeneralHooks();
  const { handleSound, nowPlaying, paused } = usePlayer();

  return (
    <div className="w-full">
      <section className="py-8 pb-10 px-8 text-center from-[#363636] to-[#141414] bg-gradient-to-b">
        <h1 className="text-8xl font-bold tracking-tight mb-5">Top Tracks</h1>
        <p>
          These are your top tracks based on calculated affinity. Tap on a Track
          to show a preview.
        </p>
      </section>
      <section className="pb-10">
        <div className="max-w-xl mx-auto px-4 py-4 w-10/12">
          <MuiSlider handleChange={handleChange} value={term} />
        </div>
        {tracks.map((track: Track, idx: number) => (
          <TrackItem
            track={track}
            key={track.id}
            idx={idx}
            nowPlaying={nowPlaying}
            handleSound={handleSound}
            paused={paused}
          />
        ))}
      </section>
    </div>
  );
};
