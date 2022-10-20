import { PluginAPI } from "./add-elevation";

type RGBTriplet = [number, number, number];

type Colors = {
  [key: string]:
    | RGBTriplet
    | {
        [key: string]: RGBTriplet;
      };
};

export type Config = {
  classSelectorPrefix: string;
  colors: Colors;
  customVariablePrefix: string;
  defaultColor: RGBTriplet;
  opacityBoost: number;
};

function create(pluginAPI: PluginAPI): Config {
  return {};
}

export default {
  create,
};
