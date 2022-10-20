import { mkdir, readFile, stat, writeFile } from "node:fs/promises";
import { exec } from "node:child_process";

const SOURCE_PATH = "./e2e/fixtures/styles.css";
const TAILWIND_CONFIG_PATH = "./e2e/fixtures/tailwind.config.js";
const MASTER_PATH = "./e2e/masters/styles.css";
const TMP_DIR = "./e2e/tmp";

async function tmpDir() {
  try {
    await stat(TMP_DIR);
  } catch {
    await mkdir(TMP_DIR);
  }

  return TMP_DIR;
}

async function createPostCSSConfigFile(targetPath: string) {
  const content = `
    module.exports = {
      plugins: [
        require("tailwindcss")("${TAILWIND_CONFIG_PATH}")
      ]
    }
  `;

  await writeFile(targetPath, content);
}

async function buildCSSFileWithPostCSS(outputPath: string, configPath: string) {
  await createPostCSSConfigFile(configPath);

  const cmd = `./node_modules/.bin/postcss ${SOURCE_PATH} -o ${outputPath} --config ${configPath}`;

  return new Promise<void>(function (resolve, reject) {
    exec(cmd, function (err) {
      if (err) {
        reject(new Error(err.message));
      }

      resolve();
    });
  });
}

test("generates CSS file with utilities", async () => {
  const master = await readFile(MASTER_PATH);
  const outputPath = `${await tmpDir()}/styles.css`;
  const configPath = `${await tmpDir()}/postcss.config.js`;

  await buildCSSFileWithPostCSS(outputPath, configPath);
  const result = await readFile(outputPath);

  expect(result).toEqual(master);
});
