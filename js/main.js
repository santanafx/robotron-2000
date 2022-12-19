const robotron = document.querySelector("#robotron");
const somar = document.querySelector("#somar");
const subtrair = document.querySelector("#subtrair");
const braco = document.querySelector("#braco");

const manipulandoDados = (operacao) => {
  if (operacao == "subtrair") {
    braco.value = parseInt(braco.value) - 1;
  } else {
    braco.value = parseInt(braco.value) + 1;
  }
};

somar.addEventListener("click", () => {
  manipulandoDados("somar");
});

subtrair.addEventListener("click", () => {
  manipulandoDados("subtrair");
});
