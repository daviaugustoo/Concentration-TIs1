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
    icone.src = "img/sol.png";
  } else {
    html.classList.remove('modo-escuro');
    icone.src = "img/lua.png";
  }
}

botao.addEventListener('change', function() {
  html.classList.toggle('modo-escuro');
  if (botao.checked) {
    icone.src = "img/sol.png";
  } else {
    icone.src = "img/lua.png";
  }

  // Armazenar o estado do checkbox no localStorage
  localStorage.setItem('modoEscuroAtivado', botao.checked);
});