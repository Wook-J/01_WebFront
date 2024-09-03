function solution(n, control) {

  let result = [...control].reduce((acc, cur) => {
    switch (cur) {
      case "w": acc += 1; break;
      case "s": acc -= 1; break;
      case "d": acc += 10; break;
      case "a": acc -= 10; break;
    }
    return acc;
  }, n);

  return result;
}

// for 문 사용하는 방법
function solution(n, control) {
  
  for (let i = 0; i < control.length; i++) {
    switch (control[i]) {
      case "w": n++; break;
      case "s": n--; break;
      case "d": n += 10; break;
      case "a": n -= 10; break;
    }
  }
  return n;
}