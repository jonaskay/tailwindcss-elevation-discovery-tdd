import addElevation, { PluginAPI } from "./add-elevation";
import addRules from "./add-rules";
import createConfig, { Config } from "./create-config";
import createRules, { Rules } from "./create-rules";

test("adds elevation utilities", () => {
  const pluginAPI: PluginAPI = {};
  const config: Config = {
    classSelectorPrefix: "foo",
    colors: {
      foo: [1, 2, 3],
    },
    customVariablePrefix: "foo",
    defaultColor: [1, 2, 3],
    opacityBoost: 0.42,
  };
  const rules: Rules = {
    foo: {
      bar: "baz",
    },
  };

  createConfig.create = jest.fn();
  (createConfig.create as jest.Mock).mockReturnValueOnce(config);

  createRules.create = jest.fn();
  (createRules.create as jest.Mock).mockReturnValueOnce(rules);

  addRules.add = jest.fn();

  addElevation.add(pluginAPI);

  expect(createConfig.create).toHaveBeenCalledWith(pluginAPI);
  expect(createRules.create).toHaveBeenCalledWith(config);
  expect(addRules.add).toHaveBeenCalledWith(rules);
});
