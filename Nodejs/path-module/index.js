import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
//some common methods in nodejs path ;
console.log(__dirname);
// console.log(path.dirname(__filename));
// console.log(path.basename(__filename));
// console.log(path.extname(__filename));

const joinPath = path.join("hari", "sa"); //joined the path
const resolvePath = path.resolve("hari", "sa"); //append with absolute root path
const normalizePath = path.normalize("sa", "//sa .."); //Normalize path means // are merged to single .. go to top one folder like that return a absoluet url at the end
console.log(resolvePath);
console.log(normalizePath);

// File system:
import fs from "fs/promises";

async function main() {
  await fs.mkdir("logs", { recursive: true });

  await fs.writeFile("logs/app.log", "Started");

  const data = await fs.readFile("logs/app.log", "utf-8");

  console.log(data);
}

main();
