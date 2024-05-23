import { build } from "esbuild";
import packageJson from "../package.json";

build({
  entryPoints: ["src/index.ts"],
  bundle: true,
  platform: "node",
  outdir: "dist",
  minify: true,
  external: Object.keys(packageJson.dependencies),
})
  .then(() => {
    console.log("Build completed successfully");
    process.exit(0);
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
