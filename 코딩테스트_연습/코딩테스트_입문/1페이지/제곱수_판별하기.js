function solution(n) {
  return Math.floor(Math.sqrt(n)) == Math.sqrt(n) ? 1 : 2;
}

// 다른사람 풀이 1
function solution(n) {
  return Number.isInteger(Math.sqrt(n)) ? 1 : 2;
}

// 다른사람 풀이 2
function solution(n) {
  return Math.sqrt(n) % 1 === 0 ? 1 : 2;
}