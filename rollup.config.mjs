import fs from "fs";
import path from "path";
import { babel } from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";
import { createEs2015LinkerPlugin } from "@angular/compiler-cli/linker/babel";
import {
  ConsoleLogger,
  NodeJSFileSystem,
  LogLevel,
} from "@angular/compiler-cli";

const __dirname = import.meta.dirname;

// This will be a list of packages that are located within the `fesm2022` folder,
// for instance: ['a11y', 'accordion', 'clipboard', 'dialog', 'collections', ...].
// We'll be able to constructor compilation targets by concatenating them with `@angular/cdk`.
const cdkPackages = fs
  .readdirSync(path.resolve(__dirname, "node_modules/@angular/cdk/fesm2022"), {
    recursive: true,
  })
  .filter((filename) => filename.endsWith(".mjs"))
  // We don't need `testing.mjs` since it'll be used locally in unit tests.
  .filter((filename) => filename.includes("testing") === false)
  .map((filename) => filename.replace(".mjs", ""))
  // replace backslashes with forward slashes for consistency across platforms
  .map((filename) => filename.replace(/\\/g, "/"))
  .map((filename) => {
    // `cdk` is a main entry-point.
    const cdkPackage =
      filename === "cdk" ? "@angular/cdk" : `@angular/cdk/${filename}`;
    return { filename, cdkPackage };
  });

const packageJson = JSON.parse(
  fs
    .readFileSync(
      path.resolve(__dirname, "node_modules/@angular/cdk/package.json"),
    )
    .toString(),
);

/** File system used by the Angular linker plugin. */
const fileSystem = new NodeJSFileSystem();
/** Logger used by the Angular linker plugin. */
const logger = new ConsoleLogger(LogLevel.info);
/**
 * The linker plugin is used to make output files AOT compatible, so they don't
 * require the `@angular/compiler` at runtime.
 */
const linkerPlugin = createEs2015LinkerPlugin({
  fileSystem,
  logger,
  linkerJitMode: false,
});

// Construct a list of compilation targets, the list will be the following:
// [
//  { ecma: '2022', filename: 'bidi', angularPackage: '@angular/cdk/bidi' },
//  { ecma: '2022', filename: 'platform', angularPackage: '@angular/cdk/platform' },
//  ...
// ]
const packages = ["2022"]
  .map((ecma) =>
    cdkPackages.map(({ filename, cdkPackage }) => ({
      ecma,
      filename,
      angularPackage: cdkPackage,
    })),
  )
  .flat();

export default packages
  .map(({ ecma, angularPackage, filename }) => [
    createConfig({
      ecma,
      prod: false,
      format: "system",
      angularPackage,
      filename,
    }),
    createConfig({
      ecma,
      prod: true,
      format: "system",
      angularPackage,
      filename,
    }),
    createConfig({ ecma, prod: false, format: "es", angularPackage, filename }),
    createConfig({ ecma, prod: true, format: "es", angularPackage, filename }),
  ])
  .flat();

function createConfig({ ecma, prod, format, angularPackage, filename }) {
  const dir = (format === "es" ? "." : format) + `/es${ecma}`;
  const flatFilename = filename.replace(/\//g, "-");

  return {
    input: path.join(
      __dirname,
      `node_modules/@angular/cdk/fesm${ecma}/${filename}.mjs`,
    ),
    output: {
      file: `${dir}/angular-${flatFilename}.${prod ? "min." : ""}js`,
      format,
      sourcemap: true,
      banner: `/* esm-bundle - ${angularPackage}@${packageJson.version} - ${format} format - Use of this source code is governed by an MIT-style license that can be found in the LICENSE file at https://angular.io/license */`,
    },
    plugins: [
      babel({ plugins: [linkerPlugin] }),
      prod &&
        terser({
          format: {
            ecma,
            comments: /esm-bundle/,
          },
          compress: {
            global_defs: {
              ngJitMode: false,
              ngDevMode: false,
              ngI18nClosureMode: false,
            },
          },
        }),
    ],
    external: [
      "rxjs",
      "rxjs/operators",
      "@angular/core",
      "@angular/common",
      "@angular/forms",
      /@angular\/cdk\/.*/,
    ],
  };
}
