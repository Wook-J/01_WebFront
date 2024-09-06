function solution(num_list) {
  let answer = 0;

  num_list.forEach((element) => {
    while (element != 1) {
      if (element % 2 == 0) element /= 2;
      else element = (element - 1) / 2;

      answer++;
    }
  });
  return answer;
}

// while 내 if문 줄이기
function solution(num_list) {
  let answer = 0;

  num_list.forEach((element) => {
    while (element != 1) {
      element = element % 2 == 0 ? element / 2 : (element - 1) / 2;
      answer++;
    }
  });
  return answer;
}