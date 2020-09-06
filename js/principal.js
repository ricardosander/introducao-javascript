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

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener('click', function(event) {
    event.preventDefault();
    
    var form = document.querySelector('#form-adiciona');

    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    form.reset();

    var linha = document.createElement("tr");

    var colunaNome = document.createElement("td");
    colunaNome.textContent = nome;

    var colunaPeso = document.createElement("td");
    colunaPeso.textContent = peso;

    var colunaAltura = document.createElement("td");
    colunaAltura.textContent = altura;

    var colunaGordura = document.createElement("td");
    colunaGordura.textContent = gordura;

    linha.appendChild(colunaNome);
    linha.appendChild(colunaPeso);
    linha.appendChild(colunaAltura);
    linha.appendChild(colunaGordura);

    var tabelaPacientes = document.querySelector("#tabela-pacientes");
    tabelaPacientes.appendChild(linha);
});