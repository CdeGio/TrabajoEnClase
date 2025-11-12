const x = 10;
console.log(x);

// iteraciones
const cielo = document.getElementById("cielo");

for (let i = 0; i < 5; i++) {
  cielo.innerHTML += '⭐';
}

const planetas = ["🪐", "🌍", "🌕", "🌞"];

for (const planeta of planetas) {
  cielo.innerHTML += planeta;
}

let n = 0;
while (n < 5) {
  cielo.innerHTML += "🌙";
  n++;
}

let m = 0;
do {
  cielo.innerHTML += "🚀";
  m++;
} while (m < 4);
//eventos
//Click
const btnEstrella = document.getElementById("btnEstrella");

btnEstrella.addEventListener("click", () => {
  cielo.innerHTML += "⭐";
});

//doble click

const btnPlaneta = document.getElementById("btnPlaneta");

btnPlaneta.addEventListener("dblclick", () => {
  cielo.innerHTML += "🚀";
});

const inputEmoji = document.getElementById("inputEmoji")

const btnAgregarEmoji = document.getElementById("btnAgregarEmoji")

btnAgregarEmoji.addEventListener("click",()=>{
  var emoji= inputEmoji.value.trim();
  if(emoji) cielo.innerHTML += emoji;
  inputEmoji.value="";
})

inputEmoji.addEventListener("keydown", e =>{
  if(e.key==="Escape") cielo.innerHTML="";
})

