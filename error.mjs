import {readFile} from "fs/promises";

try {
  const res = await readFile(new URL("test.txt", import.meta.url), "utf-8");
  console.log(res)
} catch (error) {
  console.log("file not found");
}

console.log("hello");
