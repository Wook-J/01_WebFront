function solution(arr, intervals) {
  let answer = [];
  intervals.forEach(([a, b]) => {
    for (let i = a; i <= b; i++) answer.push(arr[i]);
  })
  return answer;
}

// 다른사람 풀이
function solution(arr, intervals) {
  const [[a, b], [c, d]] = intervals;

  return [...arr.slice(a, b + 1), ...arr.slice(c, d + 1)];
}