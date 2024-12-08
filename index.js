let inputEL = document.getElementById("input");
let copyBtn = document.getElementById("btn2");
let rangeSlider = document.getElementById("input-range");
let displaylength = document.getElementById("display-length");

var currentValue;
rangeSlider.addEventListener("input", (slide) => {
  currentValue = rangeSlider.value;
  displaylength.textContent = rangeSlider.value;
});

// password generate
let char =
  "123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXY";
var password = "";
let generatePassword = () => {
  password = "";
  for (let i = 0; i < currentValue; i++) {
    password += char.charAt(Math.floor(Math.random() * char.length));
  }
  return password;
};

let generateBtn = document.getElementById("btn1");
generateBtn.addEventListener("click", () => {
  inputEL.value = generatePassword();
  inputEL.select(); // Select the input field to clear its value
});

// copy function
const copyPassword = () => {
  var copyText = document.getElementById("input");
  copyText.select();
  copyText.setSelectionRange(0, copyText.value.length); // Set selection range to the entire value
  document.execCommand("copy");
};

copyBtn.addEventListener("click", copyPassword);