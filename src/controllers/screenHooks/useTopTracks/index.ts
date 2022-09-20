import { AxiosResponse } from "axios";
import { SyntheticEvent, useEffect, useState } from "react";
import { spotifyApi } from "../../../api/spotifyApi";
import type { Track } from "../../../interfaces";

export const useTopTracks = () => {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [term, setTerm] = useState<number | number[]>(1);

  const handleChange = (
    ev: SyntheticEvent | Event,
    value: number | number[]
  ): void => {
    setTerm(value);

    const time_range = {
      1: "short_term",
      2: "medium_term",
      3: "long_term",
    };

    getTopTracks(time_range[value]);
  };

  const getToken = () => {
    const stringAfterHash = window.location.hash.substring(1);
    const splittedString = stringAfterHash.split("&");
    const paramsSplitUp = splittedString.reduce((acc, val) => {
      const [key, value] = val.split("=");
      acc[key] = value;
      return acc;
    }, {} as Record<string, string>);
    return paramsSplitUp;
  };

  const getTopTracks = async (time_range: string): Promise<void> => {
    const { access_token } = getToken();
    const res: AxiosResponse = await spotifyApi({
      method: "GET",
      url: "/me/top/tracks",
      headers: {
        Authorization: "Bearer " + access_token,
      },
      params: {
        limit: 10,
        time_range: time_range,
      },
    });
    setTracks(res.data.items);
  };

  useEffect(() => {
    handleChange(() => {}, 1);
  }, []);

  return { handleChange, tracks, term };
};
