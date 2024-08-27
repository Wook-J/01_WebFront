function generateWelcomeMessage() {
  const name = document.getElementById("name").value;
  const welcomeMessage = document.getElementById("welcomeMessage");

  welcomeMessage.innerText = "안녕하세요~ "+name+"님! 환영합니다!!!!";
}