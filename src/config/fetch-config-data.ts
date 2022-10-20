import { PluginAPI } from "../add-elevation";
import { Config, RGBTriplet } from "./create-config";

export type ConfigData = Omit<Omit<Config, "defaultColor">, "colors"> & {
  colors: {
    [key: string]:
      | string
      | RGBTriplet
      | {
          [key: string]: string | RGBTriplet;
        };
  };
  defaultColor: string | RGBTriplet;
};

function fetch(pluginAPI: PluginAPI): ConfigData {}

export default {
  fetch,
};
