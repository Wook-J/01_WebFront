function solution(myString, pat) {
  let idx = myString.toLowerCase().indexOf(pat.toLowerCase());

  return (idx != -1) ? 1 : 0;
}

// 다른사람 풀이, includes도 사용!
function solution(myString, pat) {
  return myString.toUpperCase().includes(pat.toUpperCase()) ? 1 : 0; 
}

/*
 * includes(searchString)
 * includes(searchString, position)
 * 문자열을 찾아내면 true, 실패하면 false를 반환
 * String과 Arrat 둘다 사용할 수 있음
*/