import { PluginAPI } from "../add-elevation";
import convertColors from "./convert-colors";
import fetchConfigData from "./fetch-config-data";
import validateConfig from "./validate-config";

export type RGBTriplet = [number, number, number];

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
  const configData = fetchConfigData.fetch(pluginAPI);
  const config = convertColors.convert(configData);
  validateConfig.validate(config);

  return config;
}

export default {
  create,
};