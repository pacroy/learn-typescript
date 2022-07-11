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

let sales: number = 123_456_789 // In TypeScript, you can separate number digit with underscore for better readability.
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

console.log(`
================================================================================
6. Tuples
================================================================================`)
/*
Tuple is a fixed-length Array that each element has fixed type.
Tuplea are usually used with 2 elements like key-value pairs.
Tuple is transpiled into ordinary JS array.
*/
let user: [number, string] = [1, 'Dustin']
console.log(user)
user.push(1)  // However, you can still use JS Array functions to modify the array which may break Tuples concept
console.log(user)

console.log(`
================================================================================
7. Enums
================================================================================`)
/*
Enums is a list of related constants.
Behind the scene, Enums is transpiled into a JS function
*/
enum Size {
  Small,  // By default, the first constant is assigned number 0
  Medium,
  Large
}

enum Size2 {
  Small = 1,  // You can override the value of each constant
  Medium,
  Large
}

enum Size3 {
  Small = 'S',  // Or you can assign string as the value
  Medium = 'M',
  Large = 'L'
}

let mySize: Size = Size.Small
console.log(mySize) // This prints the value of the constant

console.log(`
================================================================================
8. Functions
================================================================================`)
/*
If you don't annotate the return type then TS implicitly assume the type from the returned value.
If your function does not return, annotate with `void`.
If you annotate the return type then the compiler will check whether the returned value match it.
You can configure `tsconfig.json` for additional checks:
  - `"noUnusedParameters": true` will check for unused parameters.
  - `"noImplicitReturns": true` will check whether all code paths return.
  - `"noUnusedLocals": true` will check whether there's no unused local variables
*/

// TS requires you to supply exact number of argument, unlike JS.
function calculateTax(income: number, taxYear: number) {
  if (taxYear < 2022)
    return income * 1.2
  return income * 1.3
}
console.log(calculateTax(10_000, 2022))

// These 2 statements will be error
// calculateTax(10_000, 2022, 1)
// calculateTax(10_000)

// You can make parameter optional by using `?` but you need to check for undefined.
function calculateTax2(income: number, taxYear?: number) {
  if ((taxYear || 2022) < 2022)
    return income * 1.2
  return income * 1.3
}
console.log(calculateTax2(10_000))

// Or you can assign a default value
function calculateTax3(income: number, taxYear = 2022) {
  if (taxYear < 2022)
    return income * 1.2
  return income * 1.3
}
console.log(calculateTax3(10_000))

console.log(`
================================================================================
9. Objects
================================================================================`)
/*
Objects in JS are dynamic. But in TS, this is not the case.
You can annotate object properties and their type.
When you assign values then you need to assign all the properties (cannot assign `null` or `undefined`).
You can make property optional by using `?` but make sure it conceptually makes sense.
You can make property readonly after its first assignment by using `readonly`
You can also add a function property by using : (parameter1: type1) => return_type
*/
let employee: {
  readonly id: number,
  name: string,
  retire: (date: Date) => void
} = { 
  id: 1,
  name: 'Eddie',
  retire: (date: Date) => {
    console.log(date)
  }
}
// employee.id = 2  // This will be error
console.log(employee)

console.log(`
================================================================================
10. Type Aliases
================================================================================`)
/*
To stop DRY principle of declaring employee object above, use `type` alias.
*/
type Employee = {
  readonly id: number,
  name: string,
  retire: (date: Date) => void
}
let employee2: Employee = { 
  id: 2,
  name: 'Robin',
  retire: (date: Date) => {
    console.log(date)
  }
}
console.log(employee2)

console.log(`
================================================================================
11. Union Type
================================================================================`)
/*
You can declare a parameter with more than one type using union (`|`) operator.
But you need to determine the type during runtime using `typeof`.
*/
function kgToLbs(weight: number | string) {
  if (typeof weight === 'number')
    return weight * 2.2
  else
    return parseInt(weight) * 2.2
}
console.log(kgToLbs(10))
console.log(kgToLbs('10kg'))

console.log(`
================================================================================
12. Intersection Type
================================================================================`)
/*
You can declare a parameter with more than one type at the same time using intersection (`&`) operator.
*/
type Draggable = {
  drag: () => void  // Dummy function for demonstration purpose only
}

type Resizable = {
  resize: () => void  // Dummy function for demonstration purpose only
}

type UIWidget = Draggable & Resizable

let textBox: UIWidget = { // this object must implement all members of Draggable and Resizable
  drag: () => {},
  resize: () => {}
}
console.log(textBox)

console.log(`
================================================================================
13. Literal Type
================================================================================`)
/*
You can limit the values to assign to a variable using literal.
*/
type Quantity = 50 | 100 // This is literal type
type Metric = 'cm' | 'inch' // Literal type does not need to be just number but can be string
let quantity: Quantity = 50  // This means quantity can be either 50 or 100 only.
console.log(quantity)

console.log(`
================================================================================
14. Nullable Type
================================================================================`)
/*
If a parameter can be null, you can use a union type with `null`.
*/
function greet(name: string) {
  console.log(name.toUpperCase())
}
// greet(null)  // This will be error

function greet2(name: string | null) {
  if (name)
    console.log(name.toUpperCase())
  else
    console.log('Hola!')
}
greet2(null)
// greet2(undefined)  // This will be error, unless you include `undefined` as a unoin type.

console.log(`
================================================================================
15. Optional Chaining
================================================================================`)
type Customer = {
  birthday: Date,
  birthday2?: Date  // Optional property
}

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() }
}

let customer0 = getCustomer(0)
let customer1 = getCustomer(1)
if (customer0 != null && customer0 != undefined)  // This check can be omitted by using optional property access operator (`?.`)
  console.log(customer0.birthday)

console.log(customer0?.birthday) // Get undefined
console.log(customer0?.birthday?.getFullYear())
console.log(customer1?.birthday)
console.log(customer1?.birthday?.getFullYear())

// We can use the same concept on Arrays
let customers: string[] = []
console.log(customers?.[0])

// And function call
let log: any = null
log?.('sample message')
