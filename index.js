const minMax = (arr) => {
  const sortArray = arr.sort((a, b) => a - b);

  const n = arr.length;
  let min = 0;
  let max = 0;

  for (let i = 0; i < n - 1; i++) {
    min += sortArray[i];
  }

  for (let i = 1; i < n; i++) {
    max += sortArray[i];
  }

  console.log(min, max);
};

minMax([5, 5, 5]);
