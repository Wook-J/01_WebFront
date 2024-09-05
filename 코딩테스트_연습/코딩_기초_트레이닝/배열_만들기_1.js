function solution(n, k) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    if (i % k == 0) arr.push(i);
  }
  return arr;
}

// 다른 사람 풀이
function solution(n, k) {
  var answer = [];
  for (let i = k; i <= n; i += k) {   // 바로 i += k를 통해 if문 생략!
    answer.push(i)
  }
  return answer;
}