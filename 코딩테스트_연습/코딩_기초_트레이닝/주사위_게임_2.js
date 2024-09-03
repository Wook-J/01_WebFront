function solution(a, b, c) {
  let answer;
  let equalab = a == b;
  let equalbc = b == c;
  let equalca = c == a;

  if (!equalab && !equalbc && !equalca) answer = a + b + c;
  else if (equalab && equalbc && equalca) answer = (a + b + c) * (a * a + b * b + c * c) * (a * a * a + b * b * b + c * c * c);
  else answer = (a + b + c) * (a * a + b * b + c * c);

  return answer;
}