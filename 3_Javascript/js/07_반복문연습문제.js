function fn1() {
  for (let i = 10; i > 0; i--) {
    console.log(i);
  }
}

function fn2() {
  for (let i = 20; i > 0; i--) {
    if (i % 2 == 1) continue;
    console.log(i);
  }
}

function fn3() {
  let i = 0;
  while (i < 50) {
    i++;
    if (i % 5 !== 0) continue;
    console.log(i);
  }
}

function fn4() {
  let result4 = 1;
  for (i = 1; i < 6; i++) {
    result4 *= i;
  }
  console.log(`문제4 답 : ${result4}`);
}

function fn5() {
  const prob5 = document.getElementById("prob5");               // div의 id : prob5
  prob5.innerHTML = "";
  let str="";
 
  for (i = 2; i < 10; i++) {
    str += `<ul>`;

    for (j = 1; j < 10; j++) {
      str += `<li>${i} x ${j} = ${i * j}</li>`;
    }
    
    str += `</ul>`;
  }

  prob5.innerHTML = str;

}

function fn6() {
  const prob6 = document.getElementById("prob6");
  prob6.innerHTML = "";

  for (i = 1; i < 31; i++) {
    if (((i - 10 * (Math.floor(i / 10))) == 3) || ((i - 10 * (Math.floor(i / 10))) == 6) || ((i - 10 * (Math.floor(i / 10))) == 9)) {
      prob6.innerHTML += `짝 `;
      continue;
    }

    prob6.innerHTML += `${i} `;

    if (i % 10 == 0) {
      prob6.innerHTML += `<br>`;
    }
  }
}

function fn7() {
  const prob7 = document.getElementById("prob7");
  prob7.innerHTML = "소수 : ";

  for (let i = 2; i <= 20; i++) {

    let index =0;
    let sum =0;

    for (let j = 2; j < i; j++) {
      sum += j;

      if (i % j == 0) continue;

      index += j;
    }

    if(sum == index) prob7.innerHTML += `${i} `;
  }
}


// ex 숫자 21    2~20까지 하나라도 나누어지면 통과