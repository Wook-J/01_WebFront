function solution(myString, pat) {
  let count = 0;
  let pos = myString.indexOf(pat);

  while (pos != -1) {
    count++;
    pos = myString.indexOf(pat, pos + 1);
  }

  return count;
}