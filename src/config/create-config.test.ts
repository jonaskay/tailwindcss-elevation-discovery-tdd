import { PluginAPIWrapperObject } from "../plugin-api-wrapper";
import convertColors from "./convert-colors";
import createConfig, { Config } from "./create-config";
import fetchConfigData, { ConfigData } from "./fetch-config-data";
import validateConfig from "./validate-config";

test("creates config object", () => {
  const pluginAPIWrapper = jest.fn() as unknown as PluginAPIWrapperObject;
  const configData: ConfigData = {
    classSelectorPrefix: "foo",
    colors: {
      foo: "bar",
    },
    customVariablePrefix: "foo",
    defaultColor: "bar",
    opacityBoost: 0.42,
  };
  const config: Config = {
    classSelectorPrefix: "foo",
    colors: {
      foo: [1, 2, 3],
    },
    customVariablePrefix: "foo",
    defaultColor: [1, 2, 3],
    opacityBoost: 0.42,
  };

  fetchConfigData.fetch = jest.fn();
  (fetchConfigData.fetch as jest.Mock).mockReturnValueOnce(configData);

  convertColors.convert = jest.fn();
  (convertColors.convert as jest.Mock).mockReturnValueOnce(config);

  validateConfig.validate = jest.fn();

  const result = createConfig.create(pluginAPIWrapper);

  expect(fetchConfigData.fetch).toHaveBeenCalledWith(pluginAPIWrapper);
  expect(convertColors.convert).toHaveBeenCalledWith(configData);
  expect(validateConfig.validate).toHaveBeenCalledWith(config);
  expect(result).toEqual(config);
});
