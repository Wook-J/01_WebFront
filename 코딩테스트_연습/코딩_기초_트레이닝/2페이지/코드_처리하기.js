function solution(code) {
  let ret = "";
  let mode = 0;
  for (let i = 0; i < code.length; i++) {

    if (code[i] == 1) {
      mode++;
      continue;
    }

    if (mode % 2 == 0) {
      if (i % 2 == 0) ret += code[i];
    } else {
      if (i % 2 == 1) ret += code[i];
    }
  }

  if (ret.length == 0) ret = "EMPTY";

  return ret;
}