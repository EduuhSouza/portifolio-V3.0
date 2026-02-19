let progresso = 0;

const barra = document.querySelector('.barra-preenchimento');
const textoPorcentagem = document.getElementById('porcentagem');
const loading = document.getElementById('loading');
const site = document.getElementById('site');

const intervalo = setInterval(() => {
  progresso += Math.floor(Math.random() * 5) + 1;

  if (progresso >= 100) {
    progresso = 100;
    clearInterval(intervalo);

    barra.style.width = '100%';
    textoPorcentagem.textContent = '100%';

    // pequena pausa dramática
    setTimeout(() => {
      loading.classList.add('sair');
      site.classList.add('ativo');
    }, 600);

    return;
  }

  barra.style.width = progresso + '%';
  textoPorcentagem.textContent = progresso + '%';

}, 150);

// ANIMAÇÃO TELA

const fundo = document.querySelector('.background');

let mouseX = 0;
let mouseY = 0;
let posX = 0;
let posY = 0;

const forca = 30; // intensidade do movimento (20–40 ideal)

document.addEventListener('mousemove', (e) => {
  const x = e.clientX / window.innerWidth - 0.5;
  const y = e.clientY / window.innerHeight - 0.5;

  mouseX = x * forca;
  mouseY = y * forca;
});

function atualizarFundo() {
  // suavização (efeito câmera)
  posX += (mouseX - posX) * 0.1;
  posY += (mouseY - posY) * 0.1;

  fundo.style.transform = `
    translate(${posX}px, ${posY}px)
    scale(1.06)
  `;

  requestAnimationFrame(atualizarFundo);
}

atualizarFundo();


