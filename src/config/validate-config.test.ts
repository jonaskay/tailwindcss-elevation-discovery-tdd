import { Config } from "./create-config";
import validateConfig from "./validate-config";

test("throws error when opacityBoost is less than 0", () => {
  const config: Config = {
    classSelectorPrefix: "foo",
    colors: {
      foo: [1, 2, 3],
    },
    customVariablePrefix: "foo",
    defaultColor: [1, 2, 3],
    opacityBoost: -0.1,
  };

  expect(() => validateConfig.validate(config)).toThrow(
    "opacityBoost must be between 0 and 1.0"
  );
});

test("does not throw error when opacityBoost is 0", () => {
  const config: Config = {
    classSelectorPrefix: "foo",
    colors: {
      foo: [1, 2, 3],
    },
    customVariablePrefix: "foo",
    defaultColor: [1, 2, 3],
    opacityBoost: 0,
  };

  expect(() => validateConfig.validate(config)).not.toThrow();
});

test("throws error when opacityBoost is greater than 1", () => {
  const config: Config = {
    classSelectorPrefix: "foo",
    colors: {
      foo: [1, 2, 3],
    },
    customVariablePrefix: "foo",
    defaultColor: [1, 2, 3],
    opacityBoost: 1.1,
  };

  expect(() => validateConfig.validate(config)).toThrow(
    "opacityBoost must be between 0 and 1.0"
  );
});

test("does not throw error when opacityBoost is 1", () => {
  const config: Config = {
    classSelectorPrefix: "foo",
    colors: {
      foo: [1, 2, 3],
    },
    customVariablePrefix: "foo",
    defaultColor: [1, 2, 3],
    opacityBoost: 1,
  };

  expect(() => validateConfig.validate(config)).not.toThrow();
});
