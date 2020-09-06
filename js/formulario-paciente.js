function criarEventoAdicionarPaciente() {
    var botaoAdicionar = document.querySelector("#adicionar-paciente");
    botaoAdicionar.addEventListener('click', function (event) {
        event.preventDefault();
        adicionarPaciente();
    });
}


function adicionarPaciente() {

    document.querySelector('#mensagens-erro').innerHTML = "";

    var form = document.querySelector('#form-adiciona');

    var paciente = carregaPaciente(form);

    var erros = validaPaciente(paciente);

    if (erros.length > 0) {
        exibirErros(erros);
        return;
    }

    paciente.imc = calculaICM(paciente);

    form.reset();

    adicionaPacienteNaTabela(paciente);
}

function adicionaPacienteNaTabela(paciente) {
    var tabelaPacientes = document.querySelector("#tabela-pacientes");
    tabelaPacientes.appendChild(criarLinhaPaciente(paciente));
}

function exibirErros(erros) {

    var ul = document.querySelector('#mensagens-erro');

    erros.forEach(erro => {
        var li = document.createElement('li');
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function carregaPaciente(form) {
    return {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
    }
}

function criarColuna(valor, classe) {
    
    var coluna = document.createElement("td");
    coluna.textContent = valor;
    coluna.classList.add(classe);

    return coluna;
}

function criarLinhaPaciente(paciente) {

    var linha = document.createElement("tr");
    linha.classList.add('paciente');

    linha.appendChild(criarColuna(paciente.nome, 'info-nome'));
    linha.appendChild(criarColuna(paciente.peso, 'info-peso'));
    linha.appendChild(criarColuna(paciente.altura, 'info-altura'));
    linha.appendChild(criarColuna(paciente.gordura, 'info-gordura'));
    linha.appendChild(criarColuna(paciente.imc, 'info-imc'));

    return linha;
}