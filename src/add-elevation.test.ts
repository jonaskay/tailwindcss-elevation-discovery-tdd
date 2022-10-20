import addElevation from "./add-elevation";
import addRules from "./add-rules";
import createConfig, { Config } from "./config/create-config";
import createRules, { Rules } from "./create-rules";
import { PluginAPIWrapperObject } from "./plugin-api-wrapper";

test("adds elevation utilities", () => {
  const pluginAPIWrapper = jest.fn() as unknown as PluginAPIWrapperObject;
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

  addElevation.add(pluginAPIWrapper);

  expect(createConfig.create).toHaveBeenCalledWith(pluginAPIWrapper);
  expect(createRules.create).toHaveBeenCalledWith(config);
  expect(addRules.add).toHaveBeenCalledWith(rules);
});
