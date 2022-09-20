import { FC } from "react";

import { useComponents } from "../../components";
import { useViews } from "../../views";

export const Home: FC = () => {
  const { NavBar } = useComponents();
  const { TopTracks } = useViews();

  return (
    <div className="bg-Spotifyblack min-h-screen text-white flex">
      <NavBar />
      <TopTracks />
    </div>
  );
};
