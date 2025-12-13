var caixa = document.querySelector("#contador");
var valorDoContador = document.querySelector("#valor");
var num = Number.parseInt(valorDoContador.innerHTML);

valorDoContador.addEventListener("click", contador);
caixa.addEventListener("click", contador);

function contador() {
    num+=1;
    valorDoContador.innerHTML = num;
}

var btnReset = document.querySelector("#btn")
btnReset.addEventListener("click", resetar);

function resetar() {
    num = 0;
    valorDoContador.innerHTML = num;
}