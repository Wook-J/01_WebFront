function solution(arr) {
  let answer = arr.length > arr[0].length ?
    Array.from(Array(arr.length), () => Array(arr.length).fill(0))
    : Array.from(Array(arr[0].length), () => Array(arr[0].length).fill(0));

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) answer[i][j] = arr[i][j];
  }

  return answer;
}

// Array.from(size, 요소별 대입인자)
// answer을 좀더 간편하게 만들기
function solution(arr) {
  let n = Math.max(arr.length, arr[0].length);
  let answer = Array.from(Array(n), () => Array(n).fill(0));

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) answer[i][j] = arr[i][j];
  }

  return answer;
}