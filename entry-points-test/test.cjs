const fs = require("fs");
const path = require("path");

const packageJson = require("../package.json");

// A list of entry points from `package.json`: `['angular-cdk.js', 'angular-accordion.js', ...]`.
const declaredEntryPoints = Object.values(packageJson.exports)
  .map(({ es2020 }) => es2020)
  .map((file) => path.parse(file).base);

// A list of built entry points in the `es2020/ivy` folder.
const builtEntryPoints = fs
  .readdirSync(path.join(process.cwd(), "es2020/ivy"))
  .filter((file) => !file.includes(".min.js") && !file.includes(".map"));

// This simple test basically ensures there's no difference between `@angular/cdk` entry points
// and `angular__cdk` entry points. This is used to ensure that we also add an entry point
// to `exports` when the CDK team adds new entry point on their side.

const difference = builtEntryPoints.filter(
  (entryPoint) => !declaredEntryPoints.includes(entryPoint)
);

if (difference.length > 0) {
  console.error(
    "There is a difference between `exports` and built entry points."
  );
  process.exit(1);
}
