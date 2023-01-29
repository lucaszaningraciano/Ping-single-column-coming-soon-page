function send() {
  let inputContainer = document.getElementById("input-container");
  let inputText = document.getElementById("input-text");
  let btn = document.getElementById("btn");
  let small = document.getElementById("small");

  if (inputText.value == 0) {
    small.style.display = "block";
    inputText.style.border = "2px solid hsl(354, 100%, 66%)";
  } else {
    console.log("Email Enviado!");
  }
}
