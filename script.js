//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//Mostrar Submenu
//-----------------------------------------------------------------------------
window.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('#navbar li:nth-child(2)');
    const submenu = document.querySelector('.submenu');
  
    navbar.addEventListener('mouseenter', () => {
        submenu.style.display = 'block';
    });
  
    navbar.addEventListener('mouseleave', () => {
        submenu.style.display = 'none';
    });
});  
  
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//SLIDER
//-----------------------------------------------------------------------------
// Definição da variável index para controlar o looper das imagens do carrouseel 
window.addEventListener('DOMContentLoaded', function() {
  const carousel = document.querySelector('.carousel');
  const container = document.querySelector('.carousel-container');
  const prevButton = document.querySelector('.prev-button');
  const nextButton = document.querySelector('.next-button');

  const imageWidth = 1247;
  const imagesCount = 5;
  let currentIndex = 0;

  function showImage(index) {
    const translateX = -imageWidth * index;
    container.style.transform = `translateX(${translateX}px)`;
  }

  function goToPrevImage() {
    currentIndex = (currentIndex === 0) ? imagesCount - 1 : currentIndex - 1;
    showImage(currentIndex);
  }

  function goToNextImage() {
    currentIndex = (currentIndex === imagesCount - 1) ? 0 : currentIndex + 1;
    showImage(currentIndex);
  }

  prevButton.addEventListener('click', goToPrevImage);
  nextButton.addEventListener('click', goToNextImage);

  setInterval(goToNextImage, 5000); // Altere o valor para ajustar o tempo de exibição de cada imagem
});

//DATA E HORA
function exibirDataHora() {
  var dataHoraElement = document.getElementById("data-hora");
  var dataHoraAtual = new Date();
  var data = dataHoraAtual.toLocaleDateString();
  var hora = dataHoraAtual.toLocaleTimeString();
  var dataHoraFormatada = data + ' | ' + hora;
  dataHoraElement.innerHTML = dataHoraFormatada;
}

setInterval(exibirDataHora, 1000); // Atualiza a cada segundo