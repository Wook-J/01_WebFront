function solution(a, b) {
  return BigInt(a) + BigInt(b) + '';
}
// 보통 Number()를 쓰지만 아주 큰 수를 더할 떄는 BigInt를 씀!