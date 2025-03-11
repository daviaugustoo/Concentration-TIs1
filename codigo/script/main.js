function leDados() {
  let strDados = localStorage.getItem('Key');
  let objDados = {};

  if (strDados) {
    objDados = JSON.parse(strDados);
  } else {
    objDados = {
      feedback: [
        { pergunta: "Excelente aplicação!" },
        { pergunta: "Como faço para alterar o tempo do cronômetro?" }
      ]
    };
  }
  return objDados;
}

function salvaDados(dados) {
  localStorage.setItem('Key', JSON.stringify(dados));
}

function formatDate(date) {
  const dia = date.getDate();
  const mes = date.getMonth() + 1;
  const ano = date.getFullYear();

  return `${dia}/${mes < 10 ? '0' + mes : mes}/${ano}`;
}

function imprimeDados() {
  let tela = document.getElementById('tela');
  let strHtml = '';
  let objDados = leDados();

  for (let i = objDados.feedback.length - 1; i >= 0; i--) {
    const feedback = objDados.feedback[i];
    const dataFormatada = formatDate(new Date(feedback.data));
    strHtml += `<p class="data">${dataFormatada}</p><p class= "feedback">${feedback.pergunta}</p><br>`;

    if (feedback.resposta) {
      strHtml += ` - ${feedback.resposta}`;
    }

    strHtml += '</p>';
  }

  tela.innerHTML = strHtml;
}

function enviarDados() {
  let textarea = document.querySelector('.caixa');
  let pergunta = textarea.value;

  if (pergunta.trim() === '') {
    alert("Escreva algo na caixa de texto");
    return; // Retorna sem enviar os dados
  }

  alert("Mensagem enviada com sucesso!");

  let objDados = leDados();
  let data = new Date();
  objDados.feedback.push({ pergunta: pergunta, resposta: '', data: data.toISOString() });
  salvaDados(objDados);
  textarea.value = ''; // Limpa o conteúdo da textarea

  imprimeDados();
}

document.getElementById('enviar').addEventListener('click', enviarDados);

window.addEventListener('load', function() {
  imprimeDados();
});





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
