const scanner = document.getElementById('scanner');
const somOn = document.getElementById('scannerOn');

let scannerAtivo = false;
let bloqueio = false;

// volume do som (leve, estilo cyberpunk)
somOn.volume = 0.35;

document.addEventListener('keydown', (e) => {
  if (e.key === 'CapsLock' && !bloqueio) {
    bloqueio = true;
    e.preventDefault();

    scannerAtivo = !scannerAtivo;

    if (scannerAtivo) {
      scanner.classList.add('ativo');

      // toca o som ao ABRIR
      somOn.currentTime = 0;
      somOn.play();
    } else {
      scanner.classList.remove('ativo');
    }
  }
});

document.addEventListener('keyup', (e) => {
  if (e.key === 'CapsLock') {
    bloqueio = false;
  }
});
