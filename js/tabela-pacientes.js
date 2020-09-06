const recordMundiaDePeso = 597;
const recordMundialDeAltura = 2.74;

function verificaPesoInvalido(peso) {
    return peso <= 0 || peso > recordMundiaDePeso;
}

function verificaAlturaInvalido(altura) {
    return altura <= 0 || altura > recordMundialDeAltura;
}

function processarPacientes() {

    var pacientes = document.querySelectorAll('.paciente');

    for (var paciente of pacientes) {
        processarPaciente(paciente);
    }
}

function processarPaciente(paciente) {

    var peso = paciente.querySelector('.info-peso').textContent;
    var altura = paciente.querySelector('.info-altura').textContent;

    var resultadoValidacao = undefined;

    if (verificaPesoInvalido(peso)) {
        resultadoValidacao = "Peso inválido.";
    }

    if (verificaAlturaInvalido(altura)) {
        resultadoValidacao = "Altura inválida."
    }

    var objPaciente = undefined;

    if (resultadoValidacao == undefined) {

        objPaciente = {
            peso: peso,
            altura: altura
        }

        objPaciente.imc = calculaICM(objPaciente);
        paciente.querySelector(".info-imc").textContent = objPaciente.imc;

        return;
    } 
    
    paciente.classList.add("paciente-invalido");
    paciente.querySelector(".info-imc").textContent = resultadoValidacao;
}