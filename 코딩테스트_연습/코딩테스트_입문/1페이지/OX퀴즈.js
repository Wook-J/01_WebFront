function solution(quiz) {
  var answer = [];
  quiz.forEach((ele) => {
    temp = ele.split(' ');

    switch (temp[1]) {
      case '+':
        answer.push(Number(temp[0]) + Number(temp[2]) == Number(temp[4]) ? 'O' : 'X');
        break;
      case '-':
        answer.push(Number(temp[0]) - Number(temp[2]) == Number(temp[4]) ? 'O' : 'X');
        break;
    }
  });
  return answer;
}