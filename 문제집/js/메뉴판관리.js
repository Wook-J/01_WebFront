// 1번째 기능 ---------------------------------------------------------------------------------
const resName = document.getElementById("resName");
const resNameInput = document.getElementById("resNameInput");

resName.addEventListener("click", () => {       // #resName(span) 클릭 시
  resName.style.display = "none";               // #resName(span) 숨김처리
  resNameInput.style.display = "block";         // #resNameInput(input) 출력
  resNameInput.focus();                         // #resNameInput(input) 에 포커싱
});

resNameInput.addEventListener("blur", () => {   // #resNameInput(input)에 포커스 해제 시
  if (resNameInput.value.length == 0) {         // 입력 안할 시 원상태로 복구
    resName.innerText = "식당명을 입력하세요";
    resName.style.display = "block";
    resNameInput.style.display = "none";
    return;
  }
  resName.innerText = resNameInput.value;       // #resNameInput에 입력된 내용으로 변경
  resName.style.display = "block";              // #resName(span) 출력 (다시 원상태로 복구)
  resNameInput.style.display = "none";          // #resNameInput 숨김처리
});

// 2번재 기능 ----------------------------------------------------------------------------------
const normalContainer = document.querySelector(".normal-container");       // div 자체로 나옴
const editContainer = document.querySelector(".edit-container");           // div 자체로 나옴
const menuContainer = document.querySelector(".menu-container");           // ul 자체로 나옴
const addMenu = document.getElementById("addMenu");                        // button 자체로 나옴       
const deleteMenu = document.getElementById("deleteMenu");                  // button 자체로 나옴
const exitBtn = document.getElementById("exitBtn");                        // button 자체로 나옴

// 필요한 함수 -------------------------------------------------------------------------
const newEl = (tag, attr, cls) => {             // 요소 생성 + 속성 추가 + 클래스 추가 함수
  const el = document.createElement(tag);       // 요소 생성
  for(let key in attr){                         // for in 문 (JS객체)
    el.setAttribute(key, attr[key]);            // JS객체로 전달 받은 속성을 요소에 추가
  }
  for(let className of cls){                    // for of 문 (배열)
    el.classList.add(className);                // 배열로 전달 받은 클래스명을 요소에 추가
  }
  return el;                                    // 생성된 요소 반환
}

const createMenuContent = () => {               // 메뉴 내부 요소 생성 함수
  const check = newEl("input", {type:"checkbox"}, ["menu-check"]);    // 체크박스 생성

  // 메뉴명 input 생성 
  const menuNameInput = newEl("input", {type:"text", placeholder:"메뉴명"}, ["menu-name-input"]);

  // 메뉴 가격 input 생성
  const menuPriceInput = newEl("input", {type:"text", placeholder:"가격"}, ["menu-price-input"]);

  // JS객체로 호출된 곳에 반환
  return {"check" : check, "menuNameInput" : menuNameInput, "menuPriceInput" : menuPriceInput};
}

// #updateBtn (수정버튼) 클릭 시 -------------------------------------------------------
document.getElementById("updateBtn").addEventListener("click", () => {
  normalContainer.classList.toggle("b-hidden");       // 메뉴판 수정모드로 변경
  editContainer.classList.toggle("b-hidden");
  // ------------------ 여기가 수정기능 -------------------------------------
  const menuList = document.querySelectorAll(".menu");

  console.log(menuList);    // menuList는 NodeList 형태
  
  menuList.forEach(menu => {
    const menuName = menu.children[0].textContent;
    let menuPrice = menu.children[1].textContent;
    
    menuPrice = menuPrice.substring(0, menuPrice.length-1);    // 가격에서 "원" 글자 제거
    const menuContent = createMenuContent();                   // 메뉴 내부 요소 생성

    menuContent.menuNameInput.value = menuName == "미입력" ? "" : menuName;
    menuContent.menuPriceInput.value = menuPrice == 0 ? "" : menuPrice;

    menu.innerHTML = "";

    for(let key in menuContent){
      menu.append(menuContent[key]);
    }
  });
});

// #exitBtn (종료버튼) 클릭 시 ----------------------------------------------
exitBtn.addEventListener("click", e => {
  normalContainer.classList.toggle("b-hidden");     // 메뉴판 모드로 변경
  editContainer.classList.toggle("b-hidden");

  const menuList = document.querySelectorAll(".menu");
  menuList.forEach(menu => {
    const menuNameInput = menu.children[1].value;
    let menuPriceInput = menu.children[2].value;

    const menuName = newEl("span", {}, ["menu-name"]);
    menuName.textContent = menuNameInput.trim().length == 0 ? "미입력" :  menuNameInput;
    
    const menuPrice = newEl("span", {}, ["menu-price"]);
    menuPrice.textContent = (menuPriceInput.trim().length == 0 ? "0" :  menuPriceInput)  + "원";

    menu.innerHTML = "";
    menu.append(menuName, menuPrice);

  });
});

// #addMenu (추가버튼) 클릭 시 -----------------------------------------------------------------------
addMenu.addEventListener("click", e => {
  if(document.querySelectorAll(".menu").length >= 15){      // 메뉴에 입력 칸 추가 (최대 15개)
    alert("더 이상 메뉴를 추가할 수 없습니다.");
    return;
  }

  const li = newEl("li", {}, ["menu"]);                     // li.menu 생성
  const menuContent = createMenuContent();

  for(let key in menuContent){
    li.append(menuContent[key]);
  }
  menuContainer.append(li);
});

// #deleteMenu (삭제버튼) 클릭 시
deleteMenu.addEventListener("click", e => {
  const checkMenu = document.querySelectorAll(".menu-check:checked");

  checkMenu.forEach(item => {
    item.parentElement.remove();
  });

});






// e.target 이용하기!

// edit-container가 나타난 상태(2-2)
// - 기존 메뉴(span class="menu-name")에 대해서는 음식 메뉴, 가격 변경 가능해야함
//   -> input 창 새로 만들어서 입력해야함
// - 이 상태에서 #exitBtn 클릭하면 "변경된 상태"로 normarl-container 상태로 원상복구
//   -> 1번째 기능에서 구현한 거 다시 만들기!

// #addMenu 누를 시
// - 기존 메뉴에 대해 음식메뉴, 가격 변경 가능(2-2 기능 가져오기)
// - 음식 메뉴, 가격 변경 기능 생성(input 창 새로 만들어서 입력, 위에꺼랑 같은 거 대입)
// - 이 상태에서 #exitBtn 클릭하면 "추가로 생성된 상태"로 normarl-container 상태로 원상복구
//   -> 1번째 기능에서 구현한 거 다시 만들기!

// #deleteMenu 누를 시 메뉴판 내용 자체를 삭제
// - 이 상태에서 #exitBtn 클릭하면 "삭제된 상태"로 normarl-container 상태로 원상복구
// - 17_요소추가제거 도전과제 활용하여 해볼 것