
const result = document.getElementById("result");

document.getElementById("btn").addEventListener("click", () => {
  const tagName = document.getElementById("tagName").value;
  const tagInnerText = document.getElementById("tagInnerText").value;
  const colorName = document.getElementById("colorName").value;

  const subResult = document.createElement(`${tagName}`);
  subResult.innerText = tagInnerText;
  subResult.style.color = `${colorName}`;

  result.append(subResult);
});

