// const fs = require("fs")
// const loader = require("@assemblyscript/loader")
// const imports = { /* ... */ }
// const module = loader.instantiateSync(
//   fs.readFileSync("./build/optimized.wasm"),
//   imports
// )
// const imports.twilightRange()

const { AsBind } = require("as-bind");
const fs = require("fs");

const wasm = fs.readFileSync("./build/optimized.wasm");

const asyncTask = async () => {
  const c = await AsBind.instantiate(wasm);

  // You can now use your wasm / as-bind instance!
  console.log(c.exports.__alloc.original);
  const range = c.exports.twilightRange();
  console.log(range); // AsBind: Hello World!
};
asyncTask();