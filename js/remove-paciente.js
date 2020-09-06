function prepararRemocaoDePaciente() {

    var tabela = document.querySelector('#tabela-pacientes');

    tabela.addEventListener('dblclick', function (event) {

        var linha = event.target.parentNode;
        var nome = linha.children[0].textContent;

        var confirmado = confirm("Deseja remover o paciente " + nome + "?");

        if (!confirmado) {
            return;
        }

        linha.classList.add('fadeOut');

        setTimeout(function () { linha.remove() }, 500);
    });

}