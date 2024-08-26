document.querySelector("#apply-form").addEventListener("click", function () {

  const fontWeight = document.getElementsByName("weight");                      // 4. 글자 굵기 o
  const columnJustify = document.getElementsByName("column");                   // 7. 가로정렬 o
  const rowJustify = document.getElementsByName("row");                         // 8. 세로정렬 o
  const result = document.querySelector("#result");                             // 결과

  result.style.border = "1px solid black";                                        // 0. border
  
  result.style.width = `${Number(document.querySelector("#width").value)}px`;       // 1. 너비
  result.style.height = `${Number(document.querySelector("#height").value)}px`;     // 2. 높이
  result.style.fontSize = `${Number(document.querySelector("#size").value)}px`;     // 3. 글자크기
  result.style.color = `${document.querySelector("#color").value}`;                 // 5. 글자색
  result.style.backgroundColor = `${document.querySelector("#background").value}`;  // 6. 배경색
  result.innerHTML = `${document.querySelector("#print-words").value}`;             // 9. 출력 문자열

  for (let i = 0; i < fontWeight.length; i++) {                                     // 4. 글자 굵기
    if (fontWeight[i].checked) {
      result.style.fontWeight = `${fontWeight[i].value}`;
    }
  }

  for (let i = 0; i < columnJustify.length; i++) {                                  // 7. 가로정렬
    if (columnJustify[i].checked) {
      result.style.justifyContent = `${columnJustify[i].value}`;
    }
  }

  for (let i = 0; i < rowJustify.length; i++) {                                     // 8. 세로정렬
    if (rowJustify[i].checked) {
      result.style.alignItems = `${rowJustify[i].value}`;
    }
  }
});
