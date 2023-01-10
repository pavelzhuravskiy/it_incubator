// ----- Array Type -----

let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3]; // Generic type

// ----- Tuple Type -----

let x: [string, number];
x = ["hello", 10]; // Multiple lines

let y: [string, number] = ["goodbye", 20]; // One line

x = [10, "hello"]; // Error

// ----- Any Type -----

let a: [any, any] = ["goodbye", 42]; // Any type of array
let b: Array<any> = [10, "hello"];

let notSure: any = false;

notSure = true; // No error
notSure = 42; // No error
notSure = "hello"; // No error

// ----- Enum Type -----

enum Directions {
  Up = 2,
  Down = 4,
  Left = 6,
  Right,
}

Directions.Up // 2
Directions.Down // 4
Directions.Left // 6
Directions.Right // 7

// ----- Never Type -----

const msg = "Hello";
const error = (msg: string): never => {
  throw new Error(msg); // Function return error
};

const infiniteLoop = (): never => {
  while (true) {
    // Function infinite loop
  }
};

// ----- Object Type -----

const create = (o: object | null): void => {};

create(1); // Error
create("42"); // Error
create({ obj: 1 }); // No error

let id: number | string // Multiple types for one value

id = 10 // No error
id = '42' // No error
id = true // Error

// ----- Type -----

type Name = string

let id: Name

id = '42' // No error
id = 10 // Error