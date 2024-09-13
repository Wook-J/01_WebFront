function solution(n) {
  let answer = [];
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) answer.push(i);
  }
  return answer;
}

// 다른사람 풀이 : map + filter
function solution(n) {
  return Array(n).fill(1).map((v, index) => v + index).filter((v) => n % v == 0);
}