var botaoBuscarPacientes = document.querySelector('#buscar-pacientes');

botaoBuscarPacientes.addEventListener('click', function() {
    
    this.disabled = true;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api-pacientes.herokuapp.com/pacientes');

    xhr.addEventListener('load', function() {

        if (xhr.status != 200) {
            alert('Houve um erro ao realizar requisição.');
            console.log('Status: ' + xhr.status);
            console.log('Detalhe: ' + xhr.responseText);
            botaoBuscarPacientes.disabled = false;
            return;
        }

        pacientes = JSON.parse(xhr.responseText);
        pacientes.forEach(paciente => adicionaPacienteNaTabela(paciente));
        botaoBuscarPacientes.disabled = false;
    });

    xhr.send();
});