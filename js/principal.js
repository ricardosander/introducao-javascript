function alterarTitulo(novoTitulo) {
    var pagetTitle = document.querySelector('.titulo');
    pagetTitle.textContent = novoTitulo;
}

alterarTitulo("Aparecida Nutricionista");

processarPacientes();
criarEventoAdicionarPaciente();
prepararRemocaoDePaciente();