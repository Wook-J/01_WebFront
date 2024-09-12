function solution(a, b) {
  if (a % 2 == 1 && b % 2 == 1) return a * a + b * b;
  else if (a % 2 == 1 || b % 2 == 1) return 2 * (a + b);
  else return a - b > 0 ? a - b : b - a;
}

// 다른사람 풀이 : Math이용
function solution(a, b) {
  if (a % 2 == 1 && b % 2 == 1) return Math.pow(a, 2) + Math.pow(b, 2);
  else if (a % 2 == 1 || b % 2 == 1) return 2 * (a + b);
  else return Math.abs(a - b);
}