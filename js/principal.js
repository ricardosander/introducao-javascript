var pagetTitle = document.querySelector('.titulo');
pagetTitle.textContent = "Aparecida Nutricionista";

const pacientes = document.querySelectorAll('.paciente');

var paciente;
var peso;
var altura;
var imc;

const recordMundiaDePeso = 597;
const recordMundialDeAltura = 2.74;

for (var paciente of pacientes) {

    peso = paciente.querySelector('.info-peso').textContent;
    altura = paciente.querySelector('.info-altura').textContent;

    imc = undefined;

    if (peso <= 0 || peso > recordMundiaDePeso) {
        imc = "Peso inválido.";
    }

    if (altura <= 0 || altura > recordMundialDeAltura) {
        imc = "Altura inválida."
    }

    if (imc == undefined) {
        var imc = (peso / (altura * altura)).toFixed(2);
    } else {
        paciente.classList.add("paciente-invalido");
    }

    paciente.querySelector(".info-imc").textContent = imc;
}