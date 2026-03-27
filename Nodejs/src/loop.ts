import { glob, globSync, globStream, globStreamSync, Glob } from "glob";

const jsfiles = await glob("**/*.js", { ignore: "node_modules/**" });

import chokidar from "chokidar";
// chokidar.watch(".").on("all", (event, path) => {
//   console.log(event, path);
// });
import path from "path";

console.log(process.cwd());
console.log(path.dirname());

console.log("Hello");

setTimeout(() => console.log("timeout"), 0);

setImmediate(() => console.log("immediate"));

Promise.resolve().then(() => console.log("promise"));

process.nextTick(() => console.log("nextTick"));
