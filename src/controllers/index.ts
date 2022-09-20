import { useComponentHooks } from "./componentHooks";
import { useGeneralHooks } from "./generalHooks";
import { useScreenHooks } from "./screenHooks";

export const useControllers = () => {
  return {
    useComponentHooks,
    useGeneralHooks,
    useScreenHooks,
  };
};
