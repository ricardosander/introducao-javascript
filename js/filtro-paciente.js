function prepararFiltroPaciente() {

    var filtroTabela = document.querySelector('#filtrar-tabela');

    filtroTabela.addEventListener('input', function () {

        var pacientes = document.querySelectorAll('.paciente');
        if (this.value.legth == 0) {
            pacientes.forEach(paciente => paciente.classList.remove('invisivel'));
            return;
        }

        var regExp = new RegExp(this.value, 'i');
        pacientes.forEach(paciente => {

            paciente.classList.remove('invisivel');
            var nome = paciente.querySelector('.info-nome').textContent;
            if (!regExp.test(nome)) {
                paciente.classList.add('invisivel');
            }
        });
    });

}