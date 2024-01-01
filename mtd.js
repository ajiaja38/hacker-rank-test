const matrix = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];

let a = 0;
for (let i = 0; i < matrix.length; i++) {
  a += matrix[i][i];
}

let b = 0;
for (let i = 0; i < matrix.length; i++) {
  b += matrix[i][matrix.length - 1 - i];
}

console.log(b - a);
