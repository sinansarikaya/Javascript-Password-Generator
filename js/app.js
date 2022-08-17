const passwordLength = document.querySelector(".passwordLength");
const passwordInput = document.querySelector(".password-input");
const upperCaseCheck = document.querySelector("#upperCaseCheck");
const lowerCaseCheck = document.querySelector("#lowerCaseCheck");
const numberCheck = document.querySelector("#numberCheck");
const symbolCheck = document.querySelector("#symbolCheck");
const copyButton = document.querySelector(".copyButton");
const alert = document.querySelector(".alert");

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "~!@#$%^&*()_-+=|?";

function getUpperLetters() {
  return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

function getLowerLetters() {
  return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function getNumbers() {
  return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbols() {
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function generate() {
  pw = [];
  if (upperCaseCheck.checked) {
    pw.push(getUpperLetters());
  }
  if (lowerCaseCheck.checked) {
    pw.push(getLowerLetters());
  }
  if (numberCheck.checked) {
    pw.push(getNumbers());
  }
  if (symbolCheck.checked) {
    pw.push(getSymbols());
  }

  password = "";
  password += pw;

  for (let i = 0; i < pw.length; i++) {
    password = password.replace(",", "");
  }

  return password;
}

function generatePassword() {
  if (
    passwordLength.value &&
    passwordLength.value >= 4 &&
    passwordLength.value <= 25 &&
    generate() != ""
  ) {
    const len = passwordLength.value;
    let pass = "";
    for (let i = 0; i < len; i++) {
      const x = generate();
      pass += x;
    }
    pass = pass.slice(0, passwordLength.value);

    passwordInput.value = pass;
  } else if (generate() == "") {
    alertShow("Select at least one checkbox!", "#fe5f5580");
  } else if (passwordLength.value < 4) {
    alertShow("Minimum 4 characters!", "#fe5f5580");
  } else if (passwordLength.value > 25) {
    alertShow("Maximum 25 characters!", "#fe5f5580");
  } else {
    alertShow("Sayi gir len!", "#fe5f5580");
  }
}

function copyPw() {
  if (!passwordInput.value) {
    alertShow("Password not generated yet!", "#fe5f5580");
  } else {
    navigator.clipboard.writeText(passwordInput.value);
    alertShow("Password copied!", "#40ca777f");
  }
}

function alertShow(msg, clr) {
  alert.innerHTML = msg;
  alert.style.bottom = "0";
  alert.style.backgroundColor = clr;
  setTimeout(() => {
    alert.style.bottom = "-75px";
  }, 2000);
}
