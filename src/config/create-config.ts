import { PluginAPIWrapperObject } from "../plugin-api-wrapper";
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

function create(pluginAPIWrapper: PluginAPIWrapperObject): Config {
  const configData = fetchConfigData.fetch(pluginAPIWrapper);
  const config = convertColors.convert(configData);
  validateConfig.validate(config);

  return config;
}

export default {
  create,
};
