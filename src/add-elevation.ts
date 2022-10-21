import addRules from "./add-rules";
import createConfig from "./config/create-config";
import createRules from "./create-rules";
import { PluginAPIWrapperObject } from "./plugin-api-wrapper";

function add(pluginAPI: PluginAPIWrapperObject) {
  const config = createConfig.create(pluginAPI);
  const rules = createRules.create(config);
  addRules.add(rules, pluginAPI);
}

export default {
  add,
};
