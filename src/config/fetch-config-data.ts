import { PluginAPIWrapperObject } from "../plugin-api-wrapper";
import { Config, RGBTriplet } from "./create-config";
import mapConfigData from "./map-config-data";

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

function fetch(pluginAPIWrapper: PluginAPIWrapperObject): ConfigData {
  const elevationData = pluginAPIWrapper.fetchElevationData();
  const colorsData = pluginAPIWrapper.fetchColorsData();
  const configData = mapConfigData.map(elevationData, colorsData);

  return configData;
}

export default {
  fetch,
};
