const controle = document.querySelectorAll(".controle");

controle.forEach((elemento) => {
  elemento.addEventListener("click", (evento) => {
    manipulandoDados(evento.target.textContent, evento.target.parentNode);
  });
});

const manipulandoDados = (operacao, controle) => {
  const peca = controle.querySelector(".controle-contador");
  if (operacao == "-") {
    peca.value = parseInt(peca.value) - 1;
  } else {
    peca.value = parseInt(peca.value) + 1;
  }
};
