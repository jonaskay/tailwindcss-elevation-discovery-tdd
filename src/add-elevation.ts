import addRules from "./add-rules";
import createConfig from "./create-config";
import createRules from "./create-rules";

export type PluginAPI = {};

function add(pluginAPI: PluginAPI) {
  const config = createConfig.create(pluginAPI);
  const rules = createRules.create(config);
  addRules.add(rules);
}

export default {
  add,
};
