function solution(my_string, s, e) {
  let arrFront = my_string.split('').slice(0,s);
  let arrSE = my_string.split('').slice(s,e+1).reverse();
  let arrEnd = my_string.split('').slice(e+1);
  
  return arrFront.join('') + arrSE.join('') + arrEnd.join('');
}

// slice(start, end) : start인덱스포함, end인덱스 포함X
// slice(start) : start인덱스부터 끝까지 복사