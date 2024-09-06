function solution(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 50 && arr[i] % 2 == 0) arr[i] /= 2;
    else if (arr[i] < 50 && arr[i] % 2 == 1) arr[i] *= 2;
  }
  return arr;
}

// 다른 사람 풀이 map 이용
function solution(arr) {
  return arr.map(num => {
    if (num >= 50 && num % 2 == 0) return num / 2;
    else if (num < 50 && num % 2 == 1) return num * 2;
    else return num;
  })
}