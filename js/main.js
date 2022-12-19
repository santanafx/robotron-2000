const robotron = document.querySelector("#robotron");
const somar = document.querySelector("#somar");
const subtrair = document.querySelector("#subtrair");
const braco = document.querySelector("#braco");
const controle = document.querySelectorAll(".controle");

controle.forEach((elemento) => {
  elemento.addEventListener("click", (evento) => {
    manipulandoDados(evento.target.textContent);
  });
});

const manipulandoDados = (operacao) => {
  if (operacao == "-") {
    braco.value = parseInt(braco.value) - 1;
  } else {
    braco.value = parseInt(braco.value) + 1;
  }
};
