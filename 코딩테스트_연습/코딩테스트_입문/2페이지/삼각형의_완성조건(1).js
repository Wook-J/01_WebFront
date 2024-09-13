function solution(sides) {
  let maxNum = sides.splice(sides.indexOf(Math.max(...sides)), 1);

  return sides[0] + sides[1] > maxNum ? 1 : 2;
}

// 다른사람 풀이 : sort 이용
function solution(sides) {
  sides = sides.sort((a, b) => a - b);
  return sides[0] + sides[1] > sides[2] ? 1 : 2;
}