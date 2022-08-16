const passwordLength = document.querySelector(".passwordLength");
const passwordInput = document.querySelector(".password-input");
const upperCaseCheck = document.querySelector("#upperCaseCheck");
const lowerCaseCheck = document.querySelector("#lowerCaseCheck");
const numberCheck = document.querySelector("#numberCheck");
const symbolCheck = document.querySelector("#symbolCheck");
const copyButton = document.querySelector(".copyButton");

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

console.log(getUpperLetters());
console.log(getLowerLetters());
console.log(getNumbers());
console.log(getSymbols());

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

  //   pw = String(pw);
  //   pw = pw.replace(",", "");
  password = "";
  password += pw;

  for (let i = 0; i < pw.length; i++) {
    password = password.replace(",", "");
  }

  return password;
}

console.log(generate());

function generatePassword() {
  const len = passwordLength.value;
  let pass = "";
  for (let i = 0; i < len; i++) {
    const x = generate();
    pass += x;
  }
  pass = pass.slice(0, passwordLength.value);

  passwordInput.value = pass;
}

passwordLength.addEventListener("change", () => {
  length = passwordLength.value;
  console.log(passwordLength.value);
});

function copyPw() {
  navigator.clipboard.writeText(passwordInput.value);
}
