// Function example
const createPassword = (name, age) => `${name}${age}`;

// Arguments type

const createPassword2 = (name: string, age: number) => `${name}${age}`;

// Multiple arguments type

const createPassword3 = (name: string, age: number | string) => `${name}${age}`;

// Default arguments

const createPassword4 = (name: string = "Max", age: number | string = 20) =>
  `${name}${age}`;

// Function with optional argument 'age'

const createPassword5 = (name: string, age?: number) => `${name}${age}`;

// REST

const createSkills = (name, ...skills) =>
  `${name}, my skills are ${skills.join()}`;

// REST Type

const createSkills2 = (name: string, ...skills: Array<string>) =>
  `${name}, my skills are ${skills.join()}`;

// Call function with REST arguments

createSkills("Jack", "JS", "ES6", "React");

// Returned type is string

const createPassword6 = (name: string, age: number | string): string =>
  `${name}${age}`;

// Returned type is number

const sum = (first: number, second: number): number => first + second;

// Returned type is object

const createEmptyObject = (): object => ({});