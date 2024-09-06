function solution(numbers, n) {
  return numbers.reduce((acc, cur) => {
    if (acc <= n) acc += cur;
    else acc += 0;
    return acc;
  });
}

// reduce 코드 줄이는 방법
function solution(numbers, n) {
  return numbers.reduce((acc,cur) => (acc<=n) ? acc+cur : acc)
}

// 다른사람 풀이
function solution(numbers, n) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    if (sum > n) break;
  }
  return sum;
}