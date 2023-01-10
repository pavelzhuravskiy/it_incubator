// ----- Boolean Type -----

let isCompleted: boolean = false;

isCompleted = 42; // Error
isCompleted = "42"; // Error

isCompleted = true; // No Error

// ----- Number Type -----

const decimal: number = 6;
const integer: number = 7.1;
const hex: number = 0xf00d;
const binary: number = 0b1010;
const octal: number = 0o744;

// ----- String Type -----

const name2: string = "Yauhen"; // Simple string
const sentence: string = `Hello, my name is ${name2}`; // Template string

// ----- Null/Undefined Type -----

const u: undefined = undefined;
const n: null = null;

// Void Type

const greetUser = (): void => {
  alert("Hello, nice to see you!");
};