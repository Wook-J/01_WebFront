function solution(str_list) {
  let answer = [];

  for (let i = 0; i < str_list.length; i++) {
    if (str_list[i] == "l") {
      for (let j = 0; j < i; j++) answer.push(str_list[j]);
      break;
    } else if (str_list[i] == "r") {
      for (let j = i + 1; j < str_list.length; j++) answer.push(str_list[j]);
      break;
    }
  }
  return answer;
}

// slice를 이용한 풀이
function solution(str_list) {
  let answer = [];

  for (let i = 0; i < str_list.length; i++) {
    if (str_list[i] == "l") {
      answer = str_list.slice(0, i);
      break;
    } else if (str_list[i] == "r") {
      answer = str_list.slice(i + 1);
      break;
    }
  }
  return answer;
}