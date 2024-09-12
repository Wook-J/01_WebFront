function solution(str_list, ex) {
  let answer = '';
  let filt = str_list.filter((ele) => !ele.includes(ex));
  for (let i = 0; i < filt.length; i++) {
    answer += filt[i];
  }
  return answer;
}

// 다른사람 풀이 : reduce
function solution(str_list, ex) {
  return str_list.reduce((acc, cur) => {
    if (cur.includes(ex)) return acc;
    else return acc + cur;
  }, "");
}

// 다른사람 풀이 : filter 간소화
const solution = (str_list, ex) => str_list.filter(v => !v.includes(ex)).join('')

// filter 형식 맞추기
function solution(str_list, ex) {
  return str_list.filter((ele) => !ele.includes(ex)).join('');
}