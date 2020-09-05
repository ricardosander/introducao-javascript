var pagetTitle = document.querySelector('.titulo');
pagetTitle.textContent = "Aparecida Nutricionista";

const pacientes = document.querySelector('#tabela-pacientes');

const peso = pacientes.querySelector('.info-peso').textContent;
const altura = pacientes.querySelector('.info-altura').textContent;

var imc = undefined;

const recordMundiaDePeso = 597;
if (peso <= 0 || peso > recordMundiaDePeso) {
    imc = "Peso inválido.";
}

const recordMundialDeAltura = 2.74
if (altura <= 0 || altura > recordMundialDeAltura) {
    imc = "Altura inválida."
}

if (imc == undefined) {
    var imc = peso / (altura * altura);
}

pacientes.querySelector(".info-imc").textContent = imc;