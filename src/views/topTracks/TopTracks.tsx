import { FC } from "react";
import { useComponents } from "../../components";
import { useControllers } from "../../controllers";
import type { Track } from "../../interfaces";
import { Slider } from "@mui/material";

export const TopTracks: FC = () => {
  const { useScreenHooks, useGeneralHooks } = useControllers();
  const { useTopTracks } = useScreenHooks();
  const { handleChange, tracks, term } = useTopTracks();
  const { TrackItem } = useComponents();
  const { usePlayer } = useGeneralHooks();
  const { handleSound, nowPlaying } = usePlayer();

  return (
    <div className="w-full">
      <section className="py-8 pb-10 px-8 from-[#363636] to-[#141414] bg-gradient-to-b">
        <h1 className="text-8xl font-bold tracking-tight mb-5">Top Tracks</h1>
        <p>Get the current user's top tracks based on calculated affinity.</p>
      </section>
      <section className="px-5 pb-10">
        <div className="w-full flex justify-end">
          <Slider
            color="primary"
            defaultValue={1}
            marks={[
              { value: 1, label: "1M" },
              { value: 2, label: "6M" },
              { value: 3, label: "All" },
            ]}
            min={1}
            max={3}
            size={"medium"}
            sx={{
              width: 110,
              "& .css-yafthl-MuiSlider-markLabel": {
                color: "white",
              },
              "& .css-1eoe787-MuiSlider-markLabel": {
                color: "white",
              },
            }}
            className="mr-2"
            track={false}
            onChangeCommitted={(ev, value) => handleChange(ev, value)}
            value={term}
          />
        </div>
        {tracks.map((track: Track, idx: number) => (
          <TrackItem
            track={track}
            key={track.id}
            idx={idx}
            nowPlaying={nowPlaying}
            handleSound={handleSound}
          />
        ))}
      </section>
    </div>
  );
};
