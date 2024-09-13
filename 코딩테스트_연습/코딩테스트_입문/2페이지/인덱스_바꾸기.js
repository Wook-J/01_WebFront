function solution(my_string, num1, num2) {
  let arr = my_string.split('');
  arr[num1] = my_string[num2];
  arr[num2] = my_string[num1];

  return arr.join('');
}

// 다른사람 풀이 : 구조분해할당
function solution(my_string, num1, num2) {
  let arr = my_string.split("");
  [arr[num1], arr[num2]] = [arr[num2], arr[num1]];
  return arr.join("");
}