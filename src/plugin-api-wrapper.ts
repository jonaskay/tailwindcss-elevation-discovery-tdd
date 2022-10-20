import { PluginAPI } from "tailwindcss/types/config";

export type PluginAPIWrapperObject = ReturnType<typeof PluginAPIWrapper>;

function PluginAPIWrapper(pluginAPI: PluginAPI) {
  const addUtilities = pluginAPI.addUtilities;

  const colors = function () {
    return pluginAPI.theme("colors");
  };

  const elevation = function () {
    return pluginAPI.config();
  };

  return { addUtilities, colors, elevation };
}

export default PluginAPIWrapper;
