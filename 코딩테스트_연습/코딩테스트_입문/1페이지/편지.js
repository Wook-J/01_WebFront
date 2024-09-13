function solution(message) {
  return 2 * message.split('').length;
}

// 다른사람 풀이 : String 자체도 length 메서드 있음..!
function solution(message) {
  return message.length * 2;
}