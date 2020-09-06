function prepararRemocaoDePaciente() {

    var tabela = document.querySelector('#tabela-pacientes');

    tabela.addEventListener('dblclick', function (event) {

        var linha = event.target.parentNode;
        var nome = linha.querySelector('.info-nome').textContent;

        var confirmado = confirm("Deseja remover o paciente " + nome + "?");

        if (!confirmado) {
            return;
        }

        linha.classList.add('fadeOut');

        setTimeout(function () { linha.remove() }, 500);
    });

}