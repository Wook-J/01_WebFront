function solution(arr) {
  let k = 1;

  while (arr.length > k) k = 2 * k;

  for (let i = arr.length; i < k; i++) arr.push(0);

  return arr;
}