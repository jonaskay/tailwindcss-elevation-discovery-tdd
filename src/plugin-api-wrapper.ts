import { PluginAPI } from "tailwindcss/types/config";

export type ColorsData = {
  [key: string]:
    | string
    | {
        [key: string]: string;
      };
};

export type ElevationData = {
  classSelectorPrefix?: string;
  color?: string | [number, number, number];
  customPropertyPrefix?: string;
  opacityBoost?: string | number;
};

export type PluginAPIWrapperObject = ReturnType<typeof PluginAPIWrapper>;

function PluginAPIWrapper(pluginAPI: PluginAPI) {
  const addUtilities = pluginAPI.addUtilities;

  const fetchColorsData = function (): ColorsData {
    return pluginAPI.theme("colors");
  };

  const fetchElevationData = function (): ElevationData {
    return pluginAPI.config();
  };

  return { addUtilities, fetchColorsData, fetchElevationData };
}

export default PluginAPIWrapper;
