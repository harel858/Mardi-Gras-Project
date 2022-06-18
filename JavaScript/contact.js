//Get Data
const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const success = document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error");

//validate Data
function validateForm() {
  clearMessage();
  let errorFlag = false;
  if (nameInput.value.length < 1) {
    errorNodes[0].innerHTML = "Name cannot be blank";
    nameInput.classList.add("serror-border");
    errorFlag = true;
  }

  if (!emailIsValid(email.value)) {
    errorNodes[1].innerHTML = "Invalid Email Address";
    email.classList.add("error-border");
    errorFlag = true;
  }
  if (message.value.length < 1) {
    errorNodes[2].innerHTML = "Please Enter Message";
    message.classList.add("error-border");
    errorFlag = true;
  }
  if (!errorFlag) {
    success.innerText = "success!";
  }
}

function clearMessage() {
  for (let i = 0; i < errorNodes.length; i++) {
    errorNodes[i].innerText = "";
  }
  success.innerText = "";
  nameInput.classList.remove("error-border");
  email.classList.remove("error-border");
  message.classList.remove("error-border");
}
function emailIsValid(email) {
  let pattern =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return pattern.test(email);
}
