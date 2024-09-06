function solution(ineq, eq, n, m) {
  let answer;
  switch (ineq) {
    case ">":
      switch (eq) {
        case "=": n >= m ? answer = 1 : answer = 0; break;
        case "!": n > m ? answer = 1 : answer = 0; break;
      }; break;
    case "<":
      switch (eq) {
        case "=": n <= m ? answer = 1 : answer = 0; break;
        case "!": n < m ? answer = 1 : answer = 0; break;
      }; break;
  }
  return answer;
}