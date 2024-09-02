function solution(my_string, overwrite_string, s) {
  let str = my_string.split("");                            // 문자열을 쪼개어 배열형식으로 만들기
  str.splice(s,overwrite_string.length, overwrite_string);  // 시작 위치, 끝위치, 추가할 문자열
  return str.join("");                                      // 배열을 다시 문자열로 합치기
}