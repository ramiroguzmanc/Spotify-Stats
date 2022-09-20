import { msToMinsAndSecs } from "./useMsToMins";
import { usePlayer } from "./usePlayer";

export const useGeneralHooks = () => {
  return { msToMinsAndSecs, usePlayer };
};
