var elText = document.querySelector(".text");

var result = Number(prompt("Yoshingizni kiriting").trim());
var age = 16;

if (isNaN(age)) {
  elText.textContent = "Iltimos, son kiriting";
} else {
  if (result >= age) {
    elText.textContent = "Poygada ishtirok etishingiz mumkin";
  } else if(result == 14){
    elText.textContent = "2-yildan keyin keling";
  }
  else{
    elText.textContent = "Siz hali yosh bolasiz"
  }
}
