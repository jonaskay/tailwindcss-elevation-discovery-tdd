import { PluginAPI } from "tailwindcss/types/config";
import addElevation from "./src/add-elevation";
import PluginAPIWrapper from "./src/plugin-api-wrapper";

export default function (pluginAPI: PluginAPI) {
  const pluginAPIWrapper = PluginAPIWrapper(pluginAPI);

  addElevation.add(pluginAPIWrapper);
}
