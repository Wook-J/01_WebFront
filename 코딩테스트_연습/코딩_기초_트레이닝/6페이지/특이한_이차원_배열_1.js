function solution(n) {
  let answer = [];

  for (let i = 0; i < n; i++) {
    let temp = [];
    for (let j = 0; j < n; j++) i == j ? temp.push(1) : temp.push(0);
    answer.push(temp);
  }

  return answer;
}

// 다른사람 풀이
function solution(n) {
  const answer = Array.from(Array(n), () => Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    answer[i][i] = 1;
  }

  return answer;
}