import { cpSync, mkdirSync, readdirSync, rmSync } from "node:fs";
import { join } from "node:path";

const root = join(import.meta.dirname, "..");
const dist = join(root, "react-resume", "dist");
const assetsDir = join(root, "assets");
const imagesDir = join(root, "images");

cpSync(join(dist, "index.html"), join(root, "index.html"));
mkdirSync(assetsDir, { recursive: true });
mkdirSync(imagesDir, { recursive: true });

for (const name of readdirSync(assetsDir)) {
  if (/^index-.*\.(js|css)$/.test(name)) {
    rmSync(join(assetsDir, name));
  }
}

cpSync(join(dist, "assets"), assetsDir, { recursive: true });
cpSync(join(dist, "images"), imagesDir, { recursive: true });

console.log("Published react-resume/dist to GitHub Pages root.");
