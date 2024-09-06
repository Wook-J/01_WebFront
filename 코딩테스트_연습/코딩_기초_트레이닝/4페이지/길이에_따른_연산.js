function solution(num_list) {
  let answer = 0;

  if (num_list.length >= 11) {
    for (let i = 0; i < num_list.length; i++) answer += num_list[i];
  } else {
    answer = 1;
    for (let i = 0; i < num_list.length; i++) answer *= num_list[i];
  }

  return answer;
}


// reduce 사용하는 경우
function solution(num_list) {
  let answer;

  if (num_list.length >= 11) answer = num_list.reduce((acc, cur) => acc + cur);
  else answer = num_list.reduce((acc, cur) => acc * cur);

  return answer;
}