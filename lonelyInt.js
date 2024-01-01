const a = [1, 2, 3, 5, 1, 3, 2];

let result = 0;
for (let i = 0; i < a.length; i++) {
  result ^= a[i];
}

console.log(result);
