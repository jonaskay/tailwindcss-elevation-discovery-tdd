import { Config } from "./create-config";

function validate(config: Config) {
  const { opacityBoost } = config;

  if (opacityBoost < 0 || opacityBoost > 1) {
    throw new Error("opacityBoost must be between 0 and 1.0");
  }
}

export default {
  validate,
};
