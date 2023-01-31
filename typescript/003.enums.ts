// ----- Enum example -----

enum Directions {
  Up = 2,
  Down = 4,
  Left = 6,
  Right,
}

Directions.Up; // 2
Directions.Down; // 4
Directions.Left; // 6
Directions.Right; // 7

// ----- Reverse enum -----

Directions[2];
Directions[4];
Directions[6];
Directions[7];

// If we don't want to create object after compilation, we can use const

const enum Directions2 {
  Up = 2,
  Down = 4,
  Left = 6,
  Right,
}