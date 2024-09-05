function solution(my_strings, parts) {
  let answer = my_strings.reduce((acc, cur, idx) => {
    return acc + cur.slice(parts[idx][0], parts[idx][1] + 1);
  }, '');
  return answer;
}

// reduce 함수 길이 줄이기
function solution(my_strings, parts) {
  return my_strings.reduce((acc, cur, idx) => acc + cur.slice(parts[idx][0], parts[idx][1] + 1), '');
}

// 다른 풀이

function solution(my_strings, parts) {
  return parts.map(([s, e], i) => {
    return my_strings[i].slice(s, e + 1);
  }).join('');
}