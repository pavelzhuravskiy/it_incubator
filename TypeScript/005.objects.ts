// Simple object

let user = {
  name: "Zhur",
  age: 33,
};

// Object type using any

let user2: any = {
  // BAD CASE
  name: "Zhur",
  age: 33,
};

user2 = "test";

// Define object type

let user3: { name: string; age: number } = {
  name: "Zhur",
  age: 33,
};

// Using Type for object structure

type Person = { name: string; age: number; nickName: string };

let user4: Person = {
  name: "Pavel",
  age: 33,
  nickName: "Zhur",
};

let admin: Person = {
  name: "Helen",
  age: 36,
  nickName: "Lena",
};

// Updating type with optional properties

type Person2 = {
  name: string,
  age: number,
  nickname?: string,
  getPass?: () => string
}