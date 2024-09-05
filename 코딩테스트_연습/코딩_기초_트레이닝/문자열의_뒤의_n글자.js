function solution(my_string, n) {
  return my_string.slice(my_string.length - n, my_string.length);
}

// slice 다른 방법

function solution(my_string, n) {
  return my_string.slice(-n)      // 문자열에서 마지막 n개의 문자를 출력
}