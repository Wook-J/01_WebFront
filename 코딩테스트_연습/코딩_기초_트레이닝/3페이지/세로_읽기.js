function solution(my_string, m, c) {
  let arr = [];
  for (let i = 0; i < my_string.length; i += m) {
    arr.push(my_string.slice(i, i + m));
  }

  let answer = '';
  for (let i = 0; i < my_string.length / m; i++) {
    answer += arr[i].charAt(c - 1);
  }
  return answer;
}

// JS에서도 string.charAt() 사용가능!

// 다른사람 풀이(내꺼에서 배열 안만들고 바로 요소 불러와서 붙여넣기)
function solution(my_string, m, c) {
  var answer = '';

  for (let i = 0; i < my_string.length; i += m) {
    answer += my_string[i + c - 1];
  }
  return answer;
}