function solution(intStrs, k, s, l) {
  let answer = [];

  intStrs.forEach((ele) => {
    answer.push(Number(ele.split('').splice(s, l).join('')));
  });

  return answer.filter((ele) => ele > k);
}

// 다른사람 풀이 : reduce
function solution(intStrs, k, s, l) {
  return intStrs.reduce((acc, cur) => {
    const v = Number(cur.slice(s, s + l));
    if (v > k) acc.push(v);
    return acc;
  }, []);
}