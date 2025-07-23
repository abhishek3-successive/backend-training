
# TypeScript Guide

This document provides a concise overview of TypeScript, including its installation, setup, and an introduction to basic types and variables.

---

## 📘 What is TypeScript?

TypeScript is a **typed superset of JavaScript** that compiles to plain JavaScript. It introduces **optional static typing**, interfaces, and advanced tooling capabilities, which help developers build scalable and error-resistant applications.

---

## 🚀 TypeScript Setup

To start using TypeScript in your project, follow the steps below:

### 1. Install TypeScript

Install TypeScript as a development dependency:

```bash
npm install --save-dev typescript
```

---

### 2. Initialize TypeScript Configuration

Generate the default TypeScript configuration file (`tsconfig.json`) using:

```bash
npx tsc --init
```

---

### 3. Install Express Type Definitions (Optional for Node + Express Projects)

If you're using Express with TypeScript, install the type definitions:

```bash
npm install --save-dev @types/express
```

---

### 4. Update `tsconfig.json`

Modify the generated `tsconfig.json` file to suit your project structure:

```json
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true
  }
}
```

- **target**: Output JavaScript version (`ES6` recommended).
- **module**: Module system (`commonjs` for Node.js).
- **outDir**: Output directory for compiled `.js` files.
- **rootDir**: Source directory where your `.ts` files are located.
- **strict**: Enables all strict type-checking options.

---

### 5. Compile TypeScript Code

To compile the `.ts` files to `.js` based on your `tsconfig.json`, run:

```bash
npx tsc
```

This will compile all files in your `src` directory and place the output JavaScript files in the `dist` directory.

---

## 📦 Basic Types in TypeScript

TypeScript provides several built-in types to ensure type safety.

### ✅ Primitive Types

```ts
let isDone: boolean = false;
let age: number = 25;
let username: string = "Goku";
let nothing: null = null;
let notDefined: undefined = undefined;
```

---

### ✅ Arrays

```ts
let numbers: number[] = [1, 2, 3];
let fruits: Array<string> = ["apple", "banana"];
```

---

### ✅ Tuples

```ts
let person: [string, number] = ["John", 30];
```

---

### ✅ Enums

```ts
enum Direction {
  Up,
  Down,
  Left,
  Right
}

let move: Direction = Direction.Up;
```

---

### ✅ Any

Used when you don’t want to restrict the type.

```ts
let randomValue: any = 10;
randomValue = "Now a string";
```

---

### ✅ Unknown

Safer version of `any`.

```ts
let value: unknown = "Hello";
if (typeof value === "string") {
  console.log(value.toUpperCase());
}
```

---

### ✅ Void

Used for functions that do not return a value.

```ts
function greet(): void {
  console.log("Hello, world!");
}
```

---

### ✅ Never

Used for functions that never return (e.g., throw errors or have infinite loops).

```ts
function throwError(): never {
  throw new Error("Something went wrong!");
}
```

---

## 🧪 Declaring Variables

Use `let` and `const` (just like in ES6+), with type annotations:

```ts
let count: number = 10;
const siteName: string = "TypeScript Docs";
```

Let TypeScript infer the type if not specified:

```ts
let language = "TypeScript"; // inferred as string
```

---

## 🧾 Summary

- TypeScript enhances JavaScript with static typing.
- Use `tsconfig.json` to configure the compiler.
- Strongly typed variables reduce bugs and improve IDE support.
- Compile TypeScript using `npx tsc`.

---

## 📂 Suggested Folder Structure

```
project-root/
├── node_modules/
├── src/
│   └── index.ts
├── dist/
├── package.json
├── tsconfig.json
└── typescript.md
```