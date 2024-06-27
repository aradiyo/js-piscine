let vowels = /[AEUIOaeuio]/g;
function vowelDots(str) {
  return str.replace(vowels,"$&.");
}

console.log(vowelDots("hello world"));
console.log(vowelDots(""));