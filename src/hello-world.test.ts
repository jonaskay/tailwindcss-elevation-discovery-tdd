import { helloWorld } from "./hello-world";

test("returns a message", () => {
  expect(helloWorld).toBe("Hello, World!");
});
