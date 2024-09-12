function solution(arr) {
  let answer = 1;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i][j] != arr[j][i]) return 0;
    }
  }
  return answer;
}

// 개수 줄이기
function solution(arr) {
  let answer = 1;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length; j++) {  // 대각선은 필요없음, 바로 다음 요소부터 비교
      if (arr[i][j] != arr[j][i]) return 0;
    }
  }
  return answer;
}
