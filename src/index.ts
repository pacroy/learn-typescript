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

console.log(`
================================================================================
3. Debugging
================================================================================`)
/*
1. Configure `"sourceMap": true` in `tsconfig.json`.
2. Go to `Run and Debug` on the sidebar and click link `create a launch.json file` and choose `Node.js`.
3. This creates file `.vscode/launch.json` in the repository.
4. Add `"preLaunchTask": "tsc: build - tsconfig.json"` just under element `program` and before `outFiles`.
5. Now, you can start debugging by adding a breakpoint and pressing F5.
*/
if (age < 50 )
  age += 10
console.log(age)

console.log(`
================================================================================
4. Primitive Types
================================================================================`)
/*
In JavaScript:
  number
  string
  boolean
  null
  undefined
  object

In TypeScript:
  any
  unknown
  never
  enum
  tuple
*/

let sales: number = 123_456_789
let course: string = 'TypeScript'
let is_published: boolean = true

// In TypeScript, we don't need to annotate the type as it can be inferred from the value assigned
let sales2 = 123_456_789
let course2 = 'TypeScript'
let is_published2 = true
let level // this is type `any`

// We can assign any type of value to `any` variable, but this kills the benefit of using TypeScript
level = 1
level = 'a'

// function render(document) { // You can turn off this error by setting `"noImplicitAny": false` in tsconfig.json
//   console.log(document)
// }

console.log(`
================================================================================
5. Arrays
================================================================================`)
let numbers = [1, 2, 3] // In JavaScript, element can be any type. In TypeScript, the type is inferred from the values assigned
// let number2: number[] = [1, 2, 'a'] // This is error

let numbers2 = [] // This array is type of any, which should be avoided
numbers2[0] = 1
numbers2[1] = 'a'

let numbers3: number[] = []
numbers3[0] = 1
// numbers3[1] = 'a' // This is error

// forEach can be used to iterate through elements in an Array
numbers.forEach(n => console.log(n.toString()))
