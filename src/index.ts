console.log(`
================================================================================
1. Introduction
================================================================================`)
/*
TypeScript is built on top of Javascript and to be statically-typed language vs. dynamically-typed JavaScript.
All JavaScript statements work in TypeScript.
`tsc` (TypeScript Compiler) can be install from `npm install --location=global typescript`. It is used to compile or transpilation
Use `tsc xxx.ts` to transpile into xxx.js file.
*/

console.log('Hello world!')
let age: number = 20;
// age = 'a'    This can't be done in TypeScript
console.log(age)

console.log(`
================================================================================
2. TS Config File
================================================================================`)
/*
Use `tcs --init` will create TS config file `tsconfig.json` with default values.
  target: es2016
  module: commonjs
  strict: true
  esModuleInterop: true
  skipLibCheck: true
  forceConsistentCasingInFileNames: true
*/

/*
We usually organize project structure like this:
  src/ - TypeScript source codes
  dist/ - Output JavaScript files
And we need  to configure rootDir, outDir, removeComments, noEmitOnError in tsconfig.json:
  "rootDir": "./src",
  "outDir": "./dist",
  "removeComments": true,
  "noEmitOnError": true
*/
