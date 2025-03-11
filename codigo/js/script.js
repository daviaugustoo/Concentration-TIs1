let sec = 0;
let min = 0;
let repeat = 0; 
let cronometro;

function start(){
  min = 25;
  document.getElementById("start-btn").disabled = true;
  cronometro = setInterval(contador, 1000); // aonde está 1000, altera para 1 que o cronometro irá mais rapido. No final do ciclo, no descanso longo, pelo o fato de estar rapido talvez ele mostre o alert antes de estar visualmente 00:00, mas é so pelo fato de estar muito rapido.
}

function contador(){
  sec--;
  
  if (sec < 0)
  {
    min--;
    sec = 59;
  }
  
  document.getElementById("contador").innerText = min +":" +sec;
  
  if (min <= 0 && sec <= 0 && repeat === 0)
  {
    document.getElementById("title").innerText = "Descanso Curto";
    min = 5;
    repeat++;
  } else if (min <= 0 && sec <= 0 && repeat === 1)
  {
    document.getElementById("title").innerText = "Concentre";
    min = 25;
    repeat++;
  } else if (min <= 0 && sec <= 0 && repeat === 2)
  {
    document.getElementById("title").innerText = "Descanso Curto";
    min = 5;
    repeat++;
  }  else if (min <= 0 && sec <= 0 && repeat === 3)
  {
    document.getElementById("title").innerText = "Concentre";
    min = 25;
    repeat++;
  }else if (min <= 0 && sec <= 0 && repeat === 4)
  {
    document.getElementById("title").innerText = "Descanso Longo";
    min = 15;
    repeat++;
  } else if (min <= 0 && sec <= 0 && repeat === 5){
    clearInterval(cronometro)
    document.getElementById("contador").innerText = "00:00";
    alert("Seu ciclo pomodoro finalizou, faça-o novamente :)")
    document.getElementById("title").innerText = "Ciclo Pomodoro";
    document.getElementById("start-btn").disabled = false;
  }
}

const html = document.querySelector('html');
var botao = document.getElementById("botao__modo");
var icone = document.querySelectorAll(".icone__modo")[0];

// Verificar se há um valor armazenado no localStorage
var modoEscuroAtivado = localStorage.getItem('modoEscuroAtivado');

// Se houver um valor armazenado, definir o estado do checkbox de acordo
if (modoEscuroAtivado !== null) {
  botao.checked = modoEscuroAtivado === 'true';
  if (botao.checked) {
    html.classList.add('modo-escuro');
    icone.src = "../img/sol.png";
  } else {
    html.classList.remove('modo-escuro');
    icone.src = "../img/lua.png";
  }
}

botao.addEventListener('change', function() {
  html.classList.toggle('modo-escuro');
  if (botao.checked) {
    icone.src = "../img/sol.png";
  } else {
    icone.src = "../img/lua.png";
  }

  // Armazenar o estado do checkbox no localStorage
  localStorage.setItem('modoEscuroAtivado', botao.checked);
});