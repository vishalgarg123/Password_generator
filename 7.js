const inputSlider = document.getElementById("inputslider");
const sliderValue = document.getElementById("slidervalue");
const inputBox = document.getElementById("inputbox");
const lowerCase = document.getElementById("lowercase");
const upperCase = document.getElementById("uppercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");
const genbtn = document.getElementById("gnbtn");
const copyWrite = document.getElementById("copy");

// handle the slider
sliderValue.textContent = inputSlider.value;

inputSlider.addEventListener("input", () => {
  sliderValue.textContent = inputSlider.value;
});

genbtn.addEventListener("click", () => {
  inputBox.value = generatePassword();
});

let uppcase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowcase = "abcdefghijklmnopqrstuvwxyz";
let numbrs = "0123456789";
let symb = "!@#$%^&*";
//generate password
const generatePassword = () => {
  let genpassword = "";
  let allcase = "";
  allcase += lowerCase.checked ? lowcase : "";
  allcase += upperCase.checked ? uppcase : "";
  allcase += numbers.checked ? numbrs : "";
  allcase += symbols.checked ? symb : "";

  let i = 1;
  while (i <= inputSlider.value) {
    genpassword += allcase.charAt(Math.floor(Math.random() * allcase.length));
    i++;
  }
  return genpassword;
};
//copy write
copyWrite.addEventListener("click", () => {
  if (inputBox.value != "" || inputBox.value >= 1) {
    navigator.clipboard.writeText(inputBox.value);
    copyWrite.innerText = "check";
    copyWrite.title = "Password Copied";
    setTimeout(() => {
      copyWrite.innerText = "content_copy";
      copyWrite.title = "";
    }, 3000);
  }
});
