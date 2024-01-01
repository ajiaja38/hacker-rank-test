const arr = [1, 5, 3, 4, 2, 6, 7];
const sorted = arr.slice().sort((a, b) => a - b);
const n = sorted.length;

if (n % 2 === 0) {
  const middle1 = sorted[n / 2 - 1];
  const middle2 = sorted[n / 2];

  console.log((middle1 + middle2) / 2);
} else {
  const median = sorted[Math.floor(n / 2)];
  console.log(median);
}
