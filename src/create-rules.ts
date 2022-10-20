import { Config } from "./create-config";

export type Rules = {
  [key: string]: {
    [key: string]: string;
  };
};

function create(config: Config): Rules {
  return {};
}

export default {
  create,
};
