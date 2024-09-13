function solution(my_string) {
  let answer = 0;
  let arr = my_string.split(' ');
  switch (arr[1]) {
    case '+': answer = Number(arr[0]) + Number(arr[2]); break;
    case '-': answer = Number(arr[0]) - Number(arr[2]); break;
  }
  return answer;
}
// 왜 안나오지...?

// 이건 또 왜 안되지...?
function solution(my_string) {
  let answer = 0;
  let arr = my_string.split(' ');

  if (arr[1] == '+') answer = Number(arr[0]) + Number(arr[2]);
  else if (arr[1] == '-') answer = Number(arr[0]) - Number(arr[2]);

  return answer;
}

// 모두 통과한 구문
function solution(my_string) {
  let arr = my_string.split(' ');
  let answer = Number(arr[0]);
  arr.forEach((ele, idx) => {
    if (ele == '+') answer += Number(arr[idx + 1]);
    else if (ele == '-') answer -= Number(arr[idx + 1]);
  });

  return answer;
}