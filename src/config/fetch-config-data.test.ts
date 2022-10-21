import {
  ColorsData,
  ElevationData,
  PluginAPIWrapperObject,
} from "../plugin-api-wrapper";
import fetchConfigData, { ConfigData } from "./fetch-config-data";
import mapConfigData from "./map-config-data";

test("fetches config data", () => {
  const pluginAPIWrapper = jest.fn() as unknown as PluginAPIWrapperObject;
  const elevationData: ElevationData = {};
  const colorsData: ColorsData = {};
  const configData: ConfigData = {
    classSelectorPrefix: "foo",
    colors: {
      foo: "bar",
    },
    customVariablePrefix: "baz",
    defaultColor: "qux",
    opacityBoost: 42,
  };

  pluginAPIWrapper.fetchElevationData = jest.fn();
  (pluginAPIWrapper.fetchElevationData as jest.Mock).mockReturnValueOnce(
    elevationData
  );

  pluginAPIWrapper.fetchColorsData = jest.fn();
  (pluginAPIWrapper.fetchColorsData as jest.Mock).mockReturnValueOnce(
    colorsData
  );

  mapConfigData.map = jest.fn();
  (mapConfigData.map as jest.Mock).mockReturnValueOnce(configData);

  const result = fetchConfigData.fetch(pluginAPIWrapper);

  expect(pluginAPIWrapper.fetchElevationData).toHaveBeenCalled();
  expect(pluginAPIWrapper.fetchColorsData).toHaveBeenCalled();
  expect(mapConfigData.map).toHaveBeenCalledWith(elevationData, colorsData);
  expect(result).toEqual(configData);
});
