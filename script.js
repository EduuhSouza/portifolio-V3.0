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
