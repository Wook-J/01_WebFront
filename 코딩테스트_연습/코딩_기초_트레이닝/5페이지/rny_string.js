function solution(rny_string) {
  let arrAnswer = rny_string.split('').reduce((acc, cur) => {
    if (cur == 'm') acc.push('rn');
    else acc.push(cur);

    return acc;
  }, []);

  return arrAnswer.join('');
}

// reduce 줄이기 - 배열 사용
function solution(rny_string) {
  let arrAnswer = rny_string.split('').reduce((acc, cur) => {
    cur == 'm' ? acc.push('rn') : acc.push(cur);
    return acc;
  }, []);

  return arrAnswer.join('');
}

// reduce 줄이기 - 문자열 사용
function solution(rny_string) {
  let arrAnswer = rny_string.split('').reduce((acc, cur) => {
    acc = cur == 'm' ? acc + 'rn' : acc + cur;
    return acc;
  }, '');

  return arrAnswer;
}

// map을 사용하는 방법
function solution(rny_string) {
  let answer = '';
  rny_string.split('').map((element) => {
    if (element == 'm') answer += 'rn';
    else answer += element;
  });
  return answer;
}

// replaceAll 사용하는 방법 String 타입의 문자열 변환
function solution(rny_string) {
  return rny_string.replaceAll('m', 'rn');
}
