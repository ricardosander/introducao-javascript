const pesoMinimo = 0;
const alturaMinima = 0;

const recordMundiaDePeso = 597;
const recordMundialDeAltura = 2.74;

function validaPeso(peso) {
    return peso > pesoMinimo && peso <= recordMundiaDePeso;
}

function validaAltura(altura) {
    return altura > alturaMinima && altura <= recordMundialDeAltura;
}

function validaNome(nome) {
    return nome.trim().length > 0;
}

function validaGordura(gordura) {
    return gordura > 0 && gordura < 100;
}

function validaPaciente(paciente) {

    var erros = [];

    if (!validaNome(paciente.nome)) {
        erros.push("Nome é obrigatório");
    }

    if (!validaPeso(paciente.peso)) {
        erros.push("Peso inválido");
    }

    if (!validaAltura(paciente.altura)) {
        erros.push("Altura inválida");
    }

    if (!validaGordura(paciente.gordura)) {
        erros.push("Gordura inválida");
    }

    return erros;
}