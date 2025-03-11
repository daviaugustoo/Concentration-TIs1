const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');

let currentSlide = 0;

function hideSlider() {
  slider.forEach(item => item.classList.remove('on'))
}

function showSlider() {
  slider[currentSlide].classList.add('on')
}

function nextSlider() {
  hideSlider()
  if(currentSlide === slider.length -1) {
    currentSlide = 0
  } else {
    currentSlide++
  }
  showSlider()
}

function prevSlider() {
  hideSlider()
  if(currentSlide === 0) {
    currentSlide = slider.length -1
  } else {
    currentSlide--
  }
  showSlider()
}

btnNext.addEventListener('click', nextSlider)
btnPrev.addEventListener('click', prevSlider)


console.log(slider)


currentSlide = currentSlide + 1
currentSlide = currentSlide - 1

function saveIdToLocalStorage(id) {
  var dat = [
    {
      "id": 1,
      "autor": "Confúcio",
      "mensagem": "Não importa que você vá devagar, contanto que você não pare.",
      "categoria": "filosofo"
    },
    {
      "id": 2,
      "autor": "Mario Quintana",
      "mensagem": "Viver é acalentar sonhos e esperanças, fazendo da fé a nossa inspiração maior. É buscar nas pequenas coisas, um grande motivo para ser feliz!",
      "categoria": "escritor"
    },
    {
      "id": 3,
      "autor": "Maya Angelou",
      "mensagem": "Você não pode controlar todos os eventos que acontecem com você, mas pode decidir não ser reduzido por eles.",
      "categoria": "escritor"
    },
    {
      "id": 4,
      "autor": "Augusto Cury",
      "mensagem": "As conquistas dependem de 50% de inspiração, criatividade e sonhos, e 50% de disciplina, trabalho árduo e determinação. São duas pernas que devem caminhar juntas.",
      "categoria": "Psiquiatra"
    }
  ];

  localStorage.setItem('dat', JSON.stringify(dat));
  alert('Mensagem salva: ' + id);
}
function mostrarJSON() {
  var json = localStorage.getItem('dat'); 
  if (json) {
    var parsedJSON = JSON.parse(json); 
    console.log(parsedJSON); 
  } else {
    console.log('Nenhum dado encontrado.');
  }
}
function obterNumero() {
            var numero = prompt("Insira um número:");
            requisitarNumero(numero);
        }

        function requisitarNumero(numero) {
            // Aqui você pode fazer algo com o número inserido pelo usuário
            console.log("O número inserido foi: " + numero);
        }
function exibirJSONLocalStorage() {
  if (localStorage.getItem('dat')) {
    var json = localStorage.getItem('dat');
    document.getElementById('json-container').textContent = json;
  }
}
function exibirElemento() {
  var jsonFromLocalStorage = localStorage.getItem('dat');
  
  if (jsonFromLocalStorage) {
    
    var objetoJSON = JSON.parse(jsonFromLocalStorage);
    var idElemento = '1'
    var elemento = objetoJSON.find(item => item.id.toString() === idElemento);
  
    if (elemento) {
      console.log(elemento);
    } else {
      console.log('Elemento não encontrado!');
    }
  } else {
    console.log('JSON não encontrado no LocalStorage!');
  }
}

var botao = document.getElementById('meuBotao');
botao.addEventListener('click', exibirElemento);