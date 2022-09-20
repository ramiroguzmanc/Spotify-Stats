import { FC } from "react";
import { useLogos } from "../../assets/logos";
import { useIcons } from "../../assets/icons";

export const NavBar: FC = () => {
  const { SpotifyLogoGreen } = useLogos();
  const { MusicIcon } = useIcons();

  return (
    <nav className="bg-black min-h-screen p-5">
      <h1 className="text-3xl font-bold inline-flex items-center justify-center my-2  w-max">
        My
        <span>
          <img src={SpotifyLogoGreen} className="h-[1.875rem] mx-2" />
        </span>
        stats
      </h1>
      <div className="m-3">
        <ul>
          <li className="font-bold text-gray hover:text-white cursor-pointer flex">
            <img
              src={MusicIcon}
              alt="Music Icon"
              className="w-[1.25rem] mr-2"
            />
            Top tracks
          </li>
        </ul>
      </div>
    </nav>
  );
};
